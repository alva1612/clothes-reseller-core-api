import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './modules/store/store.module';
import { ProductModule } from './modules/product/product.module';
import { BrandModule } from './modules/brand/brand.module';
import { AuthModule } from './modules/auth/auth.module';
import { MediaResourceModule } from './modules/media-resource/media-resource.module';
import { PrismaService } from './lib/prisma/prisma.service';

@Module({
  imports: [
    StoreModule,
    ProductModule,
    BrandModule,
    AuthModule,
    MediaResourceModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
