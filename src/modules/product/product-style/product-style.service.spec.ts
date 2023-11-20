import { Test, TestingModule } from '@nestjs/testing';
import { ProductStyleService } from './product-style.service';

describe('ProductStyleService', () => {
  let service: ProductStyleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductStyleService],
    }).compile();

    service = module.get<ProductStyleService>(ProductStyleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
