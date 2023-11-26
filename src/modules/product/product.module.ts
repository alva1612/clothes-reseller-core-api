import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductStyleModule } from './product-style/product-style.module';
import { PrismaService } from '@lib/prisma/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [ProductStyleModule, PrismaService],
})
export class ProductModule {}
