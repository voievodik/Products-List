import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [ProductModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
