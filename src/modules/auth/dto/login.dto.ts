import { ApiProperty } from '@nestjs/swagger';

export class LoginEmailDto {
  @ApiProperty({ example: '1234' })
  password: string;
  @ApiProperty({ example: 'alvaro.guillenc1612@gmail.com' })
  email: string;
}
