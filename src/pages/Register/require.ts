import { useNavigate } from 'react-router-dom';

import { RegisterRequestPayload, UserPaths, UserRequest } from '@/api/User';

interface RegisterUserResponse {
  code: number;
  message: string;
}

export const RegisterUser = async (
  form: RegisterRequestPayload,
  setLoading: (isLoading: boolean) => void,
  navigate: ReturnType<typeof useNavigate>
): Promise<RegisterUserResponse> => {
  setLoading(true);
  return await UserRequest(UserPaths.register, form)
    .then((response) => {
      navigate('/');
      return { code: response.statusCode, message: response.message };
    })
    .catch((error) => {
      const { response } = error;
      return { code: response.data.statusCode, message: response.data.message };
    })
    .finally(() => {
      setLoading(false);
    });
};
