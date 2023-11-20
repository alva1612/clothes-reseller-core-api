import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserState } from './entities/user.entity';
import { PrismaService } from '@lib/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private _prismaService: PrismaService) {}

  async create(data: CreateUserDto) {
    return this._prismaService.user.create({
      data: {
        ...data,
        state: UserState.ACTIVE,
      },
    });
  }

  async findAll() {
    return this._prismaService.user.findMany();
  }

  async findOneById(id: string) {
    return this._prismaService.user.findFirst({ where: { id } });
  }
  async findOneByEitherField(data: Partial<User>) {
    for (const field in Object.keys(data)) {
      const user = await this._prismaService.user.findFirst({
        where: { [field]: data[field] },
      });
      if (user) return { user, field };
    }
    return null;
  }

  async update(id: string, data: UpdateUserDto) {
    return this._prismaService.user.update({ where: { id }, data });
  }

  async softDelete(id: string) {
    return this.update(id, { state: UserState.DELETED });
  }
}
