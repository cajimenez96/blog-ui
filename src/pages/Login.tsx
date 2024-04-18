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

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle>Bienvenido!</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Ingrese su usuario</Label>
                <Input id="username" placeholder="Usuario" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Ingrese su contraseña</Label>
                <Input id="password" placeholder="Contraseña" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-y-1">
          <Button variant="outline">Ingresar</Button>
          <h3 className="scroll-m-20 text-2xl font-medium tracking-tight">O</h3>
          <Button>Crear cuenta</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
