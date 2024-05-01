import { z } from 'zod';

import { errorMessages } from '@/constants/errorMessages';
import { regex } from '@/helpers/helper';
const {
  nameError,
  lastNameError,
  userError,
  emailError,
  passwordError,
  repeatPasswordError,
  birthdateError,
  nationalityError,
  addressError,
  phoneError
} = errorMessages;

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
      .min(3, {
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
      .min(4, {
        message: nationalityError
      })
      .max(60, {
        message: nationalityError
      }),

    address: z.string().max(100, { message: addressError }).optional(),

    phoneNumber: z.string().max(30, { message: phoneError }).optional(),

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
  )
  .refine((values) => !values.address || values.address.length >= 10, {
    message: addressError,
    path: ['address']
  });
