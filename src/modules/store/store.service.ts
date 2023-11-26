import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from '@lib/prisma/prisma.service';

@Injectable()
export class StoreService {
  constructor(private _prismaService: PrismaService) {}

  async create(createStoreDto: CreateStoreDto) {
    const createOutput = this._prismaService.store.create({
      data: {
        ...createStoreDto,
      },
    });
    /**
     * Aqui debería de crear el perfil de fundador al nuevo usuario
     * en base al id
     */
    return createOutput;
  }

  findAll() {
    return `This action returns all store`;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
