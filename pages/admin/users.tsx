import Layout from '../../components/wrappers/Layout';
import AdminSidebar from '../../components/wrappers/AdminSidebar';
import { Badge } from '../../components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

import users from '../../public/admin_json_example/users_example.json';
import { Switch } from '../../components/ui/switch';

export default function Users() {
  return (
    <Layout>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <AdminSidebar>
          <div className='flex flex-col'>
            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
              <Card>
                <CardHeader className='px-7'>
                  <CardTitle>Usuarios</CardTitle>
                  <CardDescription>
                    Lista de usuarios de la plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre completo</TableHead>
                        <TableHead className='hidden sm:table-cell'>
                          E-mail
                        </TableHead>
                        <TableHead className='hidden sm:table-cell'>
                          Saldo disponible
                        </TableHead>
                        <TableHead className='text-right'>
                          Activar/Desactivar Cuenta
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow className='bg-accent'>
                          <TableCell>
                            <div className='font-medium'>{user.Name}</div>
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            {user.Email}
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              ${user.Balance}
                            </Badge>
                          </TableCell>
                          <TableCell className='text-right'>
                            <Switch />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </main>
          </div>
        </AdminSidebar>
      </div>
    </Layout>
  );
}
