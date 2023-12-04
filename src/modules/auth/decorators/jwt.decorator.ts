import { UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt.guard';

export const JwtAuth = () =>
  applyDecorators(ApiBearerAuth(), UseGuards(JwtAuthGuard));
