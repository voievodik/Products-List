import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SizeDto {
  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  height: number;
}

export class CreateProductDto {
  @IsNotEmpty()
  imageUrl: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  count: number;

  @ValidateNested()
  @Type(() => SizeDto)
  @IsNotEmpty()
  size: SizeDto;

  @IsNotEmpty()
  weight: string;

  @IsOptional()
  comments: string[];
}
