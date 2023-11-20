import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductStyleService } from './product-style.service';
import { CreateProductStyleDto } from './dto/create-product-style.dto';
import { UpdateProductStyleDto } from './dto/update-product-style.dto';

@Controller('product-style')
export class ProductStyleController {
  constructor(private readonly productStyleService: ProductStyleService) {}

  @Post()
  create(@Body() createProductStyleDto: CreateProductStyleDto) {
    return this.productStyleService.create(createProductStyleDto);
  }

  @Get()
  findAll() {
    return this.productStyleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productStyleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductStyleDto: UpdateProductStyleDto) {
    return this.productStyleService.update(+id, updateProductStyleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productStyleService.remove(+id);
  }
}
