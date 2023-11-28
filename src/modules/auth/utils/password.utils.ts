import { scryptSync } from 'crypto';

export function encryptPassword(password: string) {
  const buffer = scryptSync(password, 'salt', 2);
  return { buffer, base64: buffer.toString('base64') };
}
