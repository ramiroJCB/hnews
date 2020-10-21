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
exports.ArticlesController = void 0;
const articles_service_1 = require("../services/articles.service");
const common_1 = require("@nestjs/common");
let ArticlesController = class ArticlesController {
    constructor(ArticlesService) {
        this.ArticlesService = ArticlesService;
    }
    async getArticlesNow() {
        return await this.ArticlesService.getArticlesNow();
    }
    async getArticles() {
        return await this.ArticlesService.getArticles();
    }
    async deletArticle(articleId) {
        return await this.ArticlesService.deletArticle(articleId);
    }
};
__decorate([
    common_1.Get('/getArticlesNow'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getArticlesNow", null);
__decorate([
    common_1.Get('/getArticles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getArticles", null);
__decorate([
    common_1.Put('/deleteArticle/:articleId'),
    __param(0, common_1.Param('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "deletArticle", null);
ArticlesController = __decorate([
    common_1.Controller(''),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map