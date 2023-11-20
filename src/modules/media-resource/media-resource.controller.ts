import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MediaResourceService } from './media-resource.service';
import { CreateMediaResourceDto } from './dto/create-media-resource.dto';
import { UpdateMediaResourceDto } from './dto/update-media-resource.dto';

@Controller('media-resource')
export class MediaResourceController {
  constructor(private readonly mediaResourceService: MediaResourceService) {}

  @Post()
  create(@Body() createMediaResourceDto: CreateMediaResourceDto) {
    return this.mediaResourceService.create(createMediaResourceDto);
  }

  @Get()
  findAll() {
    return this.mediaResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaResourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaResourceDto: UpdateMediaResourceDto) {
    return this.mediaResourceService.update(+id, updateMediaResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaResourceService.remove(+id);
  }
}
