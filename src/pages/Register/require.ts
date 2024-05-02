import { RegisterRequest, RegisterRequestPayload, UserPaths } from '@/api/User';

interface RegisterUserResponse {
  code: number;
  message: string;
}

export const RegisterUser = (
  form: RegisterRequestPayload
): RegisterUserResponse => {
  const response = RegisterRequest(UserPaths.register, form);
  console.log(response);
  return { code: 200, message: 'oki' };
};
