import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterEmailDto } from './dto/register.dto';
import { UserService } from './user/user.service';
import { encryptPassword } from './utils/password.utils';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService,
  ) {}

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

    const { base64 } = encryptPassword(registerDto.password);
    const createdUser = this._userService.create({
      email: registerDto.email,
      password: base64,
    });
    return createdUser;
  }

  async login(data: Partial<User>) {
    data.password && delete data.password;
    data.isConfirmed && delete data.isConfirmed;
    data.securityHash && delete data.securityHash;
    const payload = {
      user: data,
    };
    return {
      access_token: await this._jwtService.signAsync(payload),
    };
  }

  async validateUser(email: string, password: string) {
    const existingUser = await this._userService.findOneByEitherField({
      email,
    });
    if (!existingUser.user) return null;

    const passwordMatches =
      encryptPassword(password).base64 === existingUser.user.password;

    if (!passwordMatches) return null;

    return existingUser.user;
  }
}
