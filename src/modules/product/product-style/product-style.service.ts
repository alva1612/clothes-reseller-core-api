import { Injectable } from '@nestjs/common';
import { CreateProductStyleDto } from './dto/create-product-style.dto';
import { UpdateProductStyleDto } from './dto/update-product-style.dto';

@Injectable()
export class ProductStyleService {
  create(createProductStyleDto: CreateProductStyleDto) {
    return 'This action adds a new productStyle';
  }

  findAll() {
    return `This action returns all productStyle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productStyle`;
  }

  update(id: number, updateProductStyleDto: UpdateProductStyleDto) {
    return `This action updates a #${id} productStyle`;
  }

  remove(id: number) {
    return `This action removes a #${id} productStyle`;
  }
}
