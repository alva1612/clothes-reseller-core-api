import { Module } from '@nestjs/common';
import { ProductStyleService } from './product-style.service';
import { ProductStyleController } from './product-style.controller';

@Module({
  controllers: [ProductStyleController],
  providers: [ProductStyleService]
})
export class ProductStyleModule {}
