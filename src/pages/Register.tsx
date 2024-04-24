import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validateInputs } from '@/helper';
import { FormData } from '@/interfaces/registerInterfaces';

const Register: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    lastName: '',
    user: '',
    nationality: '',
    phoneNumber: '',
    address: '',
    birthdate: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormData>(initialFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleRegistro = async () => {
    const isValid = validateInputs(formData, setErrors);
    if (!isValid) return;

    const data = {
      name: formData.name,
      lastName: formData.lastName,
      user: formData.user,
      email: formData.email,
      password: formData.password,
      nationality: formData.nationality,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      birthdate: formData.birthdate
    };

    console.log('usuario logueado', data);
  };

  const renderError = (error: string) => {
    return error ? <h1 className=" text-red-600">{error}</h1> : null;
  };

  return (
    <div className="lg:flex">
      <img
        src="https://picsum.photos/500/1000"
        alt="imagen de escritorio"
        className="hidden w-full lg:block lg:w-4/12"
      />

      <img
        src="https://picsum.photos/2000/500"
        alt="imagen de celular"
        className="block w-full lg:hidden lg:w-4/12"
      />

      <Card className="mt-10">
        <CardHeader className="mb-10 mt-8">
          <h2 className="mb-10 text-center lg:mr-8 lg:text-end">
            Ya tienes cuenta?
            <Link className="font-bold text-blue-900" to={'/'}>
              Inicia sesión
            </Link>
          </h2>
          <CardTitle className="pb-10">Registrarse</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="name">Ingrese su nombre</Label>
              <Input
                id="name"
                placeholder="Nombre"
                onChange={(e) => handleChange(e)}
              />
              {renderError(errors?.name)}
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="lastName">Ingrese su apellido</Label>
              <Input
                id="lastName"
                placeholder="Apellido"
                onChange={(e) => handleChange(e)}
              />
              {renderError(errors?.lastName)}
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="user">Ingrese su usuario</Label>
              <Input
                id="user"
                placeholder="Usuario"
                onChange={(e) => handleChange(e)}
              />
              {renderError(errors?.user)}
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="email">Ingrese su email</Label>
              <Input
                id="email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
              />
              {renderError(errors?.email)}
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="nationality">Ingrese su nacionalidad</Label>
              <Input
                id="nationality"
                placeholder="Nacionalidad"
                onChange={(e) => handleChange(e)}
              />
              {renderError(errors?.nationality)}
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="phoneNumber">
                Ingrese su telefono (Opcional)
              </Label>
              <Input
                type="number"
                id="phoneNumber"
                placeholder="Telefono"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="address">Ingrese su domicilio (Opcional)</Label>
              <Input
                id="address"
                placeholder="Domicilio"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="birthdate">Ingrese su fecha de nacimiento</Label>
              <Input
                type="date"
                id="birthdate"
                onChange={(e) => handleChange(e)}
              />
              {renderError(errors?.birthdate)}
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="password">Ingrese una contraseña</Label>
              <Input
                id="password"
                placeholder="Contraseña"
                onChange={(e) => handleChange(e)}
              />
              {renderError(errors?.password)}
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="repeatPassword">Repetir contraseña</Label>
              <Input
                id="repeatPassword"
                placeholder="Contraseña"
                onChange={(e) => handleChange(e)}
              />
              {renderError(errors?.repeatPassword)}
            </div>
          </form>
        </CardContent>
        <CardFooter className="mb-16 mt-10">
          <Button onClick={handleRegistro} variant="default" size={'lg'}>
            Registrarse
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
