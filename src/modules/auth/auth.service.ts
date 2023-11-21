import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterEmailDto } from './dto/register.dto';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly _userService: UserService) {}

  async register(registerDto: RegisterEmailDto) {
    const uniqueFields: Partial<RegisterEmailDto> = {
      email: registerDto.email,
    };
    const existingUser = await this._userService.findOneByEitherField(
      uniqueFields,
    );

    if (registerDto.confirmPassword !== registerDto.password)
      throw new BadRequestException("Password don't match");

    if (existingUser)
      throw new BadRequestException(
        `User with ${existingUser.field} ${
          existingUser.user[existingUser.field]
        } exists`,
      );

    const createdUser = this._userService.create({
      email: registerDto.email,
      password: registerDto.password,
    });
    return createdUser;
  }

  login() {
    return `This action returns all auth`;
  }
}
