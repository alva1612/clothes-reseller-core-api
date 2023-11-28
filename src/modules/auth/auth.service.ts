import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterEmailDto } from './dto/register.dto';
import { UserService } from './user/user.service';
import { LoginEmailDto } from './dto/login.dto';
import { encryptPassword } from './utils/password.utils';
import { JwtService } from '@nestjs/jwt';

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

  async login(data: LoginEmailDto) {
    const existingUser = await this._userService.findOneByEitherField({
      email: data.email,
    });

    if (!existingUser.user) throw new NotFoundException('No user with email');

    const passwordMatches =
      encryptPassword(data.password).base64 === existingUser.user.password;
    if (!passwordMatches) throw new UnauthorizedException('No match');

    delete existingUser.user.password;
    delete existingUser.user.isConfirmed;
    delete existingUser.user.securityHash;
    const payload = {
      user: existingUser.user,
    };
    return {
      access_token: await this._jwtService.signAsync(payload),
    };
  }
}
