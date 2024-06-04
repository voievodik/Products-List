import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CommentService {
  private comments = [];

  constructor() {
    this.comments = [
      {
        id: 3,
        productId: '1',
        description: 'some text here',
        date: '14:00 22.08.2021',
      },
    ];
  }

  create(createCommentDto: CreateCommentDto) {
    const comment = {
      id: randomUUID(),
      ...createCommentDto,
    };

    this.comments.push(comment);

    return {
      comment,
      message: 'Successfully added',
      success: true,
    };
  }

  async findCommentsByProductId(productId: string) {
    return this.comments.filter((comment) => comment.productId === productId);
  }
}
