import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { errorMessages } from '@/constants/errorMessages';
import { startingValues } from '@/helpers/helper';
import { userSchema } from '@/schemas/userSchema';
import useAuthStore from '@/store/useAuthStore';

import { RegisterUser } from './require';

const Register: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading, error, setError] = useAuthStore((state) => [
    state.loading,
    state.setLoading,
    state.error,
    state.setError
  ]);

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: startingValues
  });

  const handleSubmit = async (values: z.infer<typeof userSchema>) => {
    const response = await RegisterUser(values, setLoading);
    setError(response.code);
    response.code === 400 && emailInputRef?.current?.focus();
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
      <Card className="mb-20 mt-10">
        <CardHeader className="mb-10 mt-8">
          <h2 className="mb-10 text-center lg:mr-8 lg:text-end">
            Ya tienes cuenta?
            <Link className="font-bold text-blue-900" to={'/'}>
              {' '}
              Inicia sesión{' '}
            </Link>
          </h2>
          <CardTitle className="pb-9">Registrarse</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su apellido" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su usuario" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl ref={emailInputRef}>
                      <Input placeholder="Ingrese su correo" {...field} />
                    </FormControl>
                    <FormMessage />
                    {error === 400 && (
                      <p className=" text-red-600">
                        {errorMessages.emailInUse}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nacionalidad</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su nacionalidad" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numero de telefono (opcional)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Ingrese su numero de teléfono"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dirección (opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su dirección" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fecha de nacimiento</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder="Ingrese su fecha de nacimiento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Ingrese una contraseña"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="repeatPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repetir Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Repita la contraseña"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error === 500 && (
                <p className=" text-red-600">{errorMessages.serverError}</p>
              )}
              <CardFooter>
                <Button className="mt-9" type="submit">
                  {loading ? (
                    <div className="size-7 animate-spin rounded-full border-b-2 border-r-2 border-white"></div>
                  ) : (
                    <p>Registrarse</p>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
