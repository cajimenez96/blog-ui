import { RegisterRequest, RegisterRequestPayload, UserPaths } from '@/api/User';
interface RegisterUserResponse {
  code: number;
  message: string;
}

export const RegisterUser = async (
  form: RegisterRequestPayload,
  setLoading: (isLoading: boolean) => void
): Promise<RegisterUserResponse> => {
  setLoading(true);
  return await RegisterRequest(UserPaths.register, form)
    .then((response) => {
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
