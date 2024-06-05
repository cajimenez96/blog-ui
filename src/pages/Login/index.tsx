import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
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
import { loginValues } from '@/helpers/helper';
import { loginSchema } from '@/schemas/userSchema';
import useAuthStore from '@/store/useAuthStore';

import { LoginUser } from './require';

const Login: React.FC = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginValues
  });

  const [loading, setLoading, error, setError] = useAuthStore((state) => [
    state.loading,
    state.setLoading,
    state.error,
    state.setError
  ]);
  useEffect(() => {
    setError(0);
  }, []);

  const handleSubmit = async (values: z.infer<typeof loginSchema>) => {
    const response = await LoginUser(values, setLoading);
    setError(response.code);
  };

  return (
    <div className="lg:flex">
      <img
        src="https://picsum.photos/2000/500"
        alt="imagen de celular"
        className="block w-full lg:hidden lg:w-4/12"
      />
      <Card className="mb-20 mt-10">
        <CardHeader className="mb-10 mt-8">
          <h2 className="mb-10 text-center lg:mr-8 lg:text-end">
            No tienes cuenta?
            <Link className="font-bold text-blue-900" to={'/register'}>
              {' '}
              Regístrate{' '}
            </Link>
          </h2>
          <CardTitle className="pb-9">Iniciar sesión</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ingrese su correo electrónico"
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
                        placeholder="Ingrese su contraseña"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error === 400 && (
                <p className=" text-red-600">{errorMessages.loginError}</p>
              )}
              <CardFooter>
                <Button className="mt-9" type="submit">
                  {loading ? (
                    <div className="size-7 animate-spin rounded-full border-b-2 border-r-2 border-white"></div>
                  ) : (
                    <p>Iniciar sesión</p>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
      <img
        src="https://picsum.photos/500/700"
        alt="imagen de escritorio"
        className="hidden h-screen w-full lg:block lg:w-4/12"
      />
    </div>
  );
};

export default Login;
