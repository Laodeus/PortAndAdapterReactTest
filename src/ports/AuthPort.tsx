import { User } from "../domaine/Auth";

// ports/AuthPort.ts
export type AuthAdaptaterPort = () => Promise<AuthResult>;

export type AuthResult = {
  success: boolean;
  message: string;
  user?: User;
}; 
