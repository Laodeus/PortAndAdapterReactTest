// application/AuthService.ts

import { Authadapter } from './../adaptateurs/AuthAdapteur';
import { User } from '../domaine/Auth';
import { AuthAdaptaterPort, AuthResult } from '../ports/AuthPort';

export type AuthServicePort = (auth?: AuthAdaptaterPort) => {
  login: (username: string, password: string) => Promise<AuthResult>;
  isConnected: () => boolean;
  getUser: () => User | null;
  logOut: () => void;
};

export const authService: AuthServicePort = (auth = Authadapter) => {
  let user: User | undefined;

  const login = async () => {
    const connection: AuthResult = await auth();
    user = connection?.user;
    return connection;
  };

  const isConnected = () => {
    return user ? true : false;
  };

  const getUser = () => {
    return user ? user : null;
  };
  const logOut = () => {
    user = undefined;
  };

  return {
    login,
    isConnected,
    getUser,
    logOut,
  };
};
