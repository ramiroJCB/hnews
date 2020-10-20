import { ArticlesService } from '../services/articles.service';
import {
  Controller,
  Get,
  Param,
  Put,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { IArticles } from '../interfaces/articles';
@Controller('')
export class ArticlesController {
  constructor(private ArticlesService: ArticlesService) {}

  @Get('/getArticles')
  async getArticles(@Res() res): Promise<IArticles[]> {
    const articles = await this.ArticlesService.getArticles();
    if (!articles) throw new NotFoundException('There is no Articles');
    return res.status(HttpStatus.OK).JSON({
      message: 'Articles!',
      data: articles,
    });
  }

  @Put('/deleteArticle/:articleId')
  async deletArticle(
    @Res() res,
    @Param('articleId') articleId,
  ): Promise<string> {
    const deletedResponse = await this.ArticlesService.deletArticle(articleId);
    return res.status(HttpStatus.OK).JSON({
      message: 'Article deleted',
      data: deletedResponse,
    });
  }
}
