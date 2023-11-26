import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterEmailDto } from './dto/register.dto';
import { UserService } from './user/user.service';
import { LoginEmailDto } from './dto/login.dto';
import { scryptSync } from 'node:crypto';

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

    const passwordCrypt = scryptSync(registerDto.password, 'salt', 2);
    const password = passwordCrypt.toString('utf-8');
    const createdUser = this._userService.create({
      email: registerDto.email,
      password,
    });
    return createdUser;
  }

  login(data: LoginEmailDto) {
    return `This action returns all auth`;
  }
}
