import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductStyleModule } from './product-style/product-style.module';
import { PrismaModule } from '@lib/prisma/prisma.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [PrismaModule, ProductStyleModule],
})
export class ProductModule {}
