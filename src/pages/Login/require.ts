import { LoginRequestPayload, UserPaths, UserRequest } from '@/api/User';

export const LoginUser = async (
  form: LoginRequestPayload,
  setLoading: (isLoading: boolean) => void
) => {
  setLoading(true);
  return await UserRequest(UserPaths.login, form)
    .then((response) => {
      return { code: response.statusCode, message: response.message };
    })
    .catch((error) => {
      const { response } = error;
      return { code: response.status, message: response.data.message };
    })
    .finally(() => {
      setLoading(false);
    });
};
