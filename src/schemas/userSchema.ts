import { z } from 'zod';

import { errorMessages } from '@/constants/errorMessages';
const {
  nameError,
  lastNameError,
  userError,
  emailError,
  passwordError,
  repeatPasswordError,
  birthdateError,
  nationalityError
} = errorMessages;

const regex = {
  birthdate: /^(?:(?:19|20)\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  password: /^(?=.*[!@#$%^&*().])(?=.*[0-9]).{4,}$/
};

export const userSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: nameError
      })
      .max(50, {
        message: nameError
      }),
    lastName: z
      .string()
      .min(2, {
        message: lastNameError
      })
      .max(50, {
        message: lastNameError
      }),
    user: z
      .string()
      .min(2, {
        message: userError
      })
      .max(50, {
        message: userError
      }),
    email: z.string().email({
      message: emailError
    }),
    nationality: z
      .string()
      .min(2, {
        message: nationalityError
      })
      .max(50, {
        message: nationalityError
      }),
    address: z.string().optional(),
    phoneNumber: z.string().optional(),
    birthdate: z.string().refine((val) => regex.birthdate.test(val), {
      message: birthdateError
    }),
    password: z.string().refine((val) => regex.password.test(val), {
      message: passwordError
    }),
    repeatPassword: z.string()
  })
  .refine(
    (values) => {
      return values.password === values.repeatPassword;
    },
    {
      message: repeatPasswordError,
      path: ['repeatPassword']
    }
  );
