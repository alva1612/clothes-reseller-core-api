import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly _userService: UserService) {}

  async register(registerDto: RegisterDto) {
    const uniqueFields: Partial<RegisterDto> = { email: registerDto.email };
    if (registerDto.phoneNumber)
      uniqueFields.phoneNumber = registerDto.phoneNumber;
    const existingUser = await this._userService.findOneByEitherField(
      uniqueFields,
    );

    if (existingUser)
      throw new BadRequestException(
        `User with ${existingUser.field} ${
          existingUser.user[existingUser.field]
        } exists`,
      );

    const createdUser = this._userService.create(registerDto);
    return createdUser;
  }

  login() {
    return `This action returns all auth`;
  }
}
