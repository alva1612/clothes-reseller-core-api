import { Test, TestingModule } from '@nestjs/testing';
import { MediaResourceController } from './media-resource.controller';
import { MediaResourceService } from './media-resource.service';

describe('MediaResourceController', () => {
  let controller: MediaResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaResourceController],
      providers: [MediaResourceService],
    }).compile();

    controller = module.get<MediaResourceController>(MediaResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
