import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return this.productsService.findAll(
      Number(page),
      Number(limit),
    );
  }

  @Get(':product_id')
  findOne(
    @Param('product_id') id: string,
  ) {
    return this.productsService.findOne(+id);
  }

  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.create(
      createProductDto,
    );
  }

  @Put(':product_id')
  update(
    @Param('product_id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(
      +id,
      updateProductDto,
    );
  }

  @Delete(':product_id')
  remove(
    @Param('product_id') id: string,
  ) {
    return this.productsService.remove(+id);
  }
}