import { PartialType } from '@nestjs/mapped-types';
import { CreateProductStyleDto } from './create-product-style.dto';

export class UpdateProductStyleDto extends PartialType(CreateProductStyleDto) {}
