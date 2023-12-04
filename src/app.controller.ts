import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuth } from './modules/auth/decorators/jwt.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @JwtAuth()
  getHello() {
    return this.appService.getHello();
  }
}
