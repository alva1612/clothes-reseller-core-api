import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterEmailDto } from './dto/register.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginEmailDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterEmailDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginEmailDto) {
    return this.authService.login(loginDto);
  }
}
