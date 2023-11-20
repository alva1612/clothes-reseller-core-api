import { Test, TestingModule } from '@nestjs/testing';
import { ProductStyleController } from './product-style.controller';
import { ProductStyleService } from './product-style.service';

describe('ProductStyleController', () => {
  let controller: ProductStyleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductStyleController],
      providers: [ProductStyleService],
    }).compile();

    controller = module.get<ProductStyleController>(ProductStyleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
