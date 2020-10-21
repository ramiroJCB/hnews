import { ArticlesService } from '../services/articles.service';
import { IArticles } from '../interfaces/articles';
export declare class ArticlesController {
    private ArticlesService;
    constructor(ArticlesService: ArticlesService);
    getArticlesNow(): Promise<void>;
    getArticles(): Promise<IArticles[]>;
    deletArticle(articleId: any): Promise<string>;
}
