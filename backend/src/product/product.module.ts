import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CommentService } from 'src/comment/comment.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, CommentService],
})
export class ProductModule {}
