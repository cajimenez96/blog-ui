import { constant } from '@/constants/constants';

export const regex = {
  birthdate: /^(?:(?:19|20)\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  password: /^(?=.*[0-9])(?=.*[.!@#$%^&*()-])(?=.*[A-Z]).{4,}$/,
  phoneNumber: /^[0-9]{10,15}$/
};

export const startingValues = {
  name: '',
  lastName: '',
  userName: '',
  email: '',
  country: '',
  birthday: '',
  address: '',
  phoneNumber: '',
  password: '',
  repeatPassword: '',
  role: constant.role
};
