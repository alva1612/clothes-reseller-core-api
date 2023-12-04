import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/auth.guard';
import { RegisterEmailDto } from './dto/register.dto';
import { LoginEmailDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterEmailDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({
    type: LoginEmailDto,
  })
  login(@Req() req) {
    return this.authService.login(req.user);
  }
}
