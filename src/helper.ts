import { errorMessages } from './constants/errorMessages';
import { FormData } from './interfaces/registerInterfaces';

const validateField = (
  value: string,
  regex: RegExp,
  errorMessage: string
): string => {
  return !regex.test(value) ? errorMessage : '';
};

export const validateInputs = (
  formData: FormData,
  setErrors: (errors: FormData) => void
): boolean => {
  const nameRegExp: RegExp = /^[a-zA-Z]{2,50}$/;
  const userRegExp: RegExp = /^[a-zA-Z]{2,30}$/;
  const passwordRegExp: RegExp =
    /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-zA-Z]).{4,}$/;
  const emailRegExp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nationalityRegExp: RegExp = /^[a-zA-Z]{3,30}$/;
  const birthdateRegExp: RegExp =
    /^(?:(?:19|20)\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  const newErrors: FormData = {
    name: validateField(formData.name, nameRegExp, errorMessages.nameError),
    lastName: validateField(
      formData.lastName,
      nameRegExp,
      errorMessages.lastNameError
    ),
    user: validateField(formData.user, userRegExp, errorMessages.userError),
    nationality: validateField(
      formData.nationality,
      nationalityRegExp,
      errorMessages.nationality
    ),
    phoneNumber: '',
    address: '',
    birthdate: validateField(
      formData.birthdate,
      birthdateRegExp,
      errorMessages.birthdate
    ),
    email: validateField(formData.email, emailRegExp, errorMessages.emailError),
    password: validateField(
      formData.password,
      passwordRegExp,
      errorMessages.passwordError
    ),
    repeatPassword:
      formData.repeatPassword !== formData.password
        ? errorMessages.repeatPasswordError
        : ''
  };

  setErrors(newErrors);

  return Object.values(newErrors).every((error) => error === '');
};
