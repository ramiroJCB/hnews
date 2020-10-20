import { Module, HttpModule } from '@nestjs/common';
import { ArticlesController } from './controler/articles.controller';
import { ArticlesService } from './services/articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { articlesSchema } from './schemas/articles.schema';
import {} from 'moment';
@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'articles', schema: articlesSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
