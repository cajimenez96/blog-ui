import Axios from '@/lib/axios';

const Paths = {
  USER: '/user'
};

export enum UserPaths {
  login = '/login',
  register = '/signup'
}

interface GeneralResponse {
  statusCode: number;
  message: string;
}

export interface RegisterRequestPayload {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  country: string;
  birthday: string;
  address: string | null;
  phoneNumber: string | null;
  password: string;
  repeatPassword: string;
  role: string;
}

interface RegisterRequestResponse extends GeneralResponse {
  RegisterResponse: string | undefined;
}

export const RegisterRequest = async (
  request: string,
  payload: RegisterRequestPayload
): Promise<RegisterRequestResponse> => {
  const response = await Axios.post(Paths.USER + request, payload);
  return response.data;
};
