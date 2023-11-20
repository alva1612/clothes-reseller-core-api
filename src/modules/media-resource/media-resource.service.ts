import { Injectable } from '@nestjs/common';
import { CreateMediaResourceDto } from './dto/create-media-resource.dto';
import { UpdateMediaResourceDto } from './dto/update-media-resource.dto';

@Injectable()
export class MediaResourceService {
  create(createMediaResourceDto: CreateMediaResourceDto) {
    return 'This action adds a new mediaResource';
  }

  findAll() {
    return `This action returns all mediaResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaResource`;
  }

  update(id: number, updateMediaResourceDto: UpdateMediaResourceDto) {
    return `This action updates a #${id} mediaResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaResource`;
  }
}
