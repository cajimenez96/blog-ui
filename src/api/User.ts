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
  address?: string;
  phoneNumber?: string;
  password: string;
  repeatPassword: string;
  role: string;
}

export interface LoginRequestPayload {
  email: string;
  password: string;
}

interface RequestResponse extends GeneralResponse {
  Response?: string;
}

export const UserRequest = async <T>(
  request: UserPaths,
  payload: T
): Promise<RequestResponse> => {
  const response = await Axios.post<RequestResponse>(
    Paths.USER + request,
    payload
  );
  return response.data;
};
