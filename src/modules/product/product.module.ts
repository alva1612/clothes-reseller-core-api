import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductStyleModule } from './product-style/product-style.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [ProductStyleModule]
})
export class ProductModule {}
