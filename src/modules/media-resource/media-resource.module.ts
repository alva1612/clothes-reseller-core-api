import { Module } from '@nestjs/common';
import { MediaResourceService } from './media-resource.service';
import { MediaResourceController } from './media-resource.controller';

@Module({
  controllers: [MediaResourceController],
  providers: [MediaResourceService]
})
export class MediaResourceModule {}
