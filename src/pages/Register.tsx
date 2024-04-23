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

const Register = () => {
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
              <Input id="name" placeholder="Nombre" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="lastName">Ingrese su apellido</Label>
              <Input id="lastName" placeholder="Apellido" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="user">Ingrese su usuario</Label>
              <Input id="user" placeholder="Usuario" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="email">Ingrese su email</Label>
              <Input id="email" placeholder="Email" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="nationality">Ingrese su nacionalidad</Label>
              <Input id="nationality" placeholder="Nacionalidad" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="phoneNumber">
                Ingrese su telefono (Opcional)
              </Label>
              <Input type="number" id="phoneNumber" placeholder="Telefono" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="address">Ingrese su domicilio (Opcional)</Label>
              <Input id="address" placeholder="Domicilio" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="birthdate">Ingrese su fecha de nacimiento</Label>
              <Input type="date" id="birthdate" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="password">Ingrese una contraseña</Label>
              <Input id="password" placeholder="Contraseña" />
            </div>
            <div className="pb-9 lg:pb-5">
              <Label htmlFor="repeatPassword">Repetir contraseña</Label>
              <Input id="repeatPassword" placeholder="Contraseña" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="mb-16 mt-10">
          <Button variant="default" size={'lg'}>
            Registrarse
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
