import { MoreHorizontal } from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

// Se prueba con el json público orders_example.json
import orders from '../../public/admin_json_example/orders_example.json';
import { Button } from '../../components/ui/button';

export default function Orders() {
  return (
    <Layout>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <AdminSidebar>
          <div className='flex flex-col'>
            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
              <Card>
                <CardHeader className='px-7'>
                  <CardTitle>Órdenes</CardTitle>
                  <CardDescription>Compras recientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre Cliente</TableHead>
                        <TableHead className='hidden sm:table-cell'>
                          Estado
                        </TableHead>
                        <TableHead className='hidden md:table-cell'>
                          Fecha
                        </TableHead>
                        <TableHead className='hidden md:table-cell'>
                          Monto
                        </TableHead>
                        <TableHead className='text-right' />
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow className='bg-accent'>
                          <TableCell>
                            <div className='font-medium'>{order.Client}</div>
                            <div className='text-muted-foreground hidden text-sm md:inline'>
                              {order.ClientEmail}
                            </div>
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              {order.Status}
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            {order.Date}
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            ${order.Amount}
                          </TableCell>
                          <TableCell className='text-right'>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup='true'
                                  size='icon'
                                  variant='ghost'
                                >
                                  <MoreHorizontal className='h-4 w-4' />
                                  <span className='sr-only'>Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align='end'>
                                <DropdownMenuItem>
                                  Marcar orden como completada
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Ver Detalles
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
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
