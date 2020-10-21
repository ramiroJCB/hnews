import { HttpService } from '@nestjs/common';
import { IArticles } from '../interfaces/articles';
import { Model } from 'mongoose';
export declare class ArticlesService {
    private httpService;
    private readonly articlesModel;
    constructor(httpService: HttpService, articlesModel: Model<IArticles>);
    refreshData(): Promise<void>;
    getArticles(): Promise<IArticles[]>;
    getArticlesNow(): Promise<void>;
    deletArticle(articleId: string): Promise<string>;
}
