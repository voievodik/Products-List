import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { randomUUID } from 'crypto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PRODUCT_MESSAGES } from './messages/product.messages';
import { CommentService } from 'src/comment/comment.service';

@Injectable()
export class ProductService {
  private products = [];

  constructor(private commentsService: CommentService) {
    this.products = [
      {
        id: '1',
        imageUrl:
          'https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png',
        name: 'Product name',
        count: 4,
        size: {
          width: 200,
          height: 200,
        },
        weight: '200g',
        comments: ['CommentModel', 'CommentModel'],
      },
    ];
  }

  create(createProductDto: CreateProductDto) {
    const newProduct = {
      ...createProductDto,
      id: randomUUID(),
      comments: [],
    };

    this.products.push(newProduct);

    return {
      product: newProduct,
      message: PRODUCT_MESSAGES.createSuccess,
      success: true,
    };
  }

  findAll() {
    // const productsWithComments = this.commentsService;
    // let productsWithComments = [];

    for (const product of this.products) {
      const comments = this.commentsService.findCommentsByProductId(product.id);

      product.comments = comments;
    }

    return {
      products: this.products,
      message: PRODUCT_MESSAGES.getSuccess,
      success: true,
    };
  }

  findOne(id: string) {
    const product = this.products.find((product) => product.id === id);
    return {
      product,
      message: PRODUCT_MESSAGES.getSuccess,
      success: true,
    };
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) {
      throw new BadRequestException('Product not found');
    }

    const updatedProduct = {
      ...this.products[productIndex],
      ...updateProductDto,
    };

    this.products[productIndex] = updatedProduct;

    return {
      product: updatedProduct,
      message: PRODUCT_MESSAGES.updateSuccess,
      success: true,
    };
  }

  remove(id: string) {
    this.products = this.products.filter((product) => product.id !== id);

    return {
      message: PRODUCT_MESSAGES.deleteSuccess,
      success: true,
    };
  }
}
