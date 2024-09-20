// adapters/AuthAdapters.ts

import { AuthAdaptaterPort, AuthResult } from '../ports/AuthPort';

export const Authadapter: AuthAdaptaterPort = async () => {
  await new Promise<AuthResult>((resolve) => setTimeout(resolve, 1000));

  const randomBoolean = Math.random() < 0.5;

  return randomBoolean
    ? {
        success: true,
        message: 'Success',
        user: {
          id: 0,
          userName: 'test',
          email: 'test@test',
          token: 'test',
        },
      }
    : {
        success: false,
        message: 'Error',
      };
};
