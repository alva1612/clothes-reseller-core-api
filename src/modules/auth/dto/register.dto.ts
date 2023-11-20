import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'wowpassword123*' })
  password: string;
  @ApiProperty({ example: 'wowpassword123*' })
  confirmPassword: string;
  @ApiProperty({ example: 'alvaro.guillenc1612@gmail.com' })
  email: string;
}
