import { ArticlesService } from '../services/articles.service';
import { Controller, Get, Param, Put } from '@nestjs/common';
import { IArticles } from '../interfaces/articles';
import { get } from 'http';
@Controller('')
export class ArticlesController {
  constructor(private ArticlesService: ArticlesService) {}

  @Get('/getArticlesNow')
  async getArticlesNow(): Promise<void> {
    return await this.ArticlesService.getArticlesNow();
  }

  @Get('/getArticles')
  async getArticles(): Promise<IArticles[]> {
    return await this.ArticlesService.getArticles();
  }

  @Put('/deleteArticle/:articleId')
  async deletArticle(@Param('articleId') articleId): Promise<string> {
    return await this.ArticlesService.deletArticle(articleId);
  }
}
