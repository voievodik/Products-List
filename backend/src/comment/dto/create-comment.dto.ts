import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  date: string;
}
