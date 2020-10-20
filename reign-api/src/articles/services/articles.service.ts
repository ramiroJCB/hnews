import { Cron } from '@nestjs/schedule';
import { HttpService, Injectable } from '@nestjs/common';
import { IArticles } from '../interfaces/articles';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class ArticlesService {
  constructor(
    private httpService: HttpService,
    @InjectModel('articles') private readonly articlesModel: Model<IArticles>,
  ) {}

  @Cron('0 * * * *')
  async refreshData(): Promise<void> {
    let {
      data: { hits },
    } = await this.httpService
      .get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
      .toPromise();

    await this.articlesModel.insertMany(
      hits.filter(article => article.story_title || article.story),
    );
  }

  async getArticles(): Promise<IArticles[]> {
    const articles = await this.articlesModel.find();
    return articles.filter(article => !article._ignored);
  }

  async deletArticle(articleId: string): Promise<string> {
    await this.articlesModel.findByIdAndUpdate(new ObjectId(articleId), {
      _ignored: true,
    });

    return 'deleted';
  }
}
