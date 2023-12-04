import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export interface UserInPayload {
  id: string;
  name: string | null;
  lastName: string | null;
  username: string | null;
  email: string;
  state: 'active';
  phoneNumber: string | null;
  isConfirmed: boolean;
}

export const GetUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) =>
    ctx.switchToHttp().getRequest().user as UserInPayload,
);
