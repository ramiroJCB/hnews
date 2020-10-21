"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const schedule_1 = require("@nestjs/schedule");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongodb_1 = require("mongodb");
let ArticlesService = class ArticlesService {
    constructor(httpService, articlesModel) {
        this.httpService = httpService;
        this.articlesModel = articlesModel;
    }
    async refreshData() {
        let { data: { hits }, } = await this.httpService
            .get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
            .toPromise();
        await this.articlesModel.insertMany(hits.filter(article => article.story_title || article.story));
    }
    async getArticles() {
        const articles = await this.articlesModel.find();
        return articles.filter(article => !article._ignored);
    }
    async getArticlesNow() {
        let { data: { hits }, } = await this.httpService
            .get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
            .toPromise();
        await this.articlesModel.insertMany(hits.filter(article => article.story_title || article.story));
    }
    async deletArticle(articleId) {
        await this.articlesModel.findByIdAndUpdate(new mongodb_1.ObjectId(articleId), {
            _ignored: true,
        });
        return 'deleted';
    }
};
__decorate([
    schedule_1.Cron('0 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticlesService.prototype, "refreshData", null);
ArticlesService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('articles')),
    __metadata("design:paramtypes", [common_1.HttpService,
        mongoose_2.Model])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map