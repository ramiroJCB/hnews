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
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesSchema = exports.articles = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = require("@nestjs/mongoose");
let articles = class articles {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", mongodb_1.ObjectId)
], articles.prototype, "_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "created_at", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "url", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "author", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "points", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "story_text", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "comment_text", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], articles.prototype, "num_comments", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], articles.prototype, "story_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "story_title", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "story_url", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], articles.prototype, "parent_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], articles.prototype, "created_at_i", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], articles.prototype, "_tags", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], articles.prototype, "objectID", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Object)
], articles.prototype, "_highlightResult", void 0);
__decorate([
    mongoose_1.Prop({ defaultValue: false }),
    __metadata("design:type", Boolean)
], articles.prototype, "_ignored", void 0);
articles = __decorate([
    mongoose_1.Schema()
], articles);
exports.articles = articles;
exports.articlesSchema = mongoose_1.SchemaFactory.createForClass(articles);
//# sourceMappingURL=articles.schema.js.map