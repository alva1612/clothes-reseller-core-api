export enum UserState {
  ACTIVE = 'active',
  DISABLED = 'disabled',
  DELETED = 'deleted',
}

export class User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  state: UserState;

  isConfirmed: boolean;
  securityHash: string;
  phoneNumber: string;
}
