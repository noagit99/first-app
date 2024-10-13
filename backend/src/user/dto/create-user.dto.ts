// src/user/user.dto.ts
import { z } from 'zod';
import { UserSchema } from '../user.schema';

export const CreateUserDto = UserSchema.omit({ id: true });
export const LoginDto = z.object({
  username: z.string(),
  password: z.string(),
});
