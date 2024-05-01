import { AxiosError } from 'axios';
import { z } from 'zod';

import { constant } from '@/constants/constants';
import Axios from '@/lib/axios';
import { userSchema } from '@/schemas/userSchema';

export const createUser = async (
  values: z.infer<typeof userSchema>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  const data = {
    userName: values.user,
    name: values.name,
    lastName: values.lastName,
    password: values.password,
    email: values.email,
    ...(values.phoneNumber && { phoneNumber: values.phoneNumber }),
    ...(values.address && { address: values.address }),
    country: values.nationality,
    birthday: values.birthdate,
    role: constant.role
  };

  try {
    setLoading(true);
    await Axios.post('/signup', data);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      setError(error?.response?.data?.message || 'Ha ocurrido un error');
    }
  } finally {
    setLoading(false);
  }
};
