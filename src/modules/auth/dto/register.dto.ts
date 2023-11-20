import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Alvaro Axel' })
  name: string;
  @ApiProperty({ example: 'Guillén Carbajal' })
  lastName: string;
  @ApiProperty({ example: 'aguillen' })
  username: string;
  @ApiProperty({ example: 'wowpassword123*' })
  password: string;
  @ApiProperty({ example: 'wowpassword123*' })
  confirmPassword: string;
  @ApiProperty({ example: 'alvaro.guillenc1612@gmail.com' })
  email: string;
  @ApiProperty({ example: '947540679' })
  phoneNumber: string;
}
