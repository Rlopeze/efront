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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { useGetProductsQuery } from '../api/productsApi';

export default function Products() {
  const { data, isLoading } = useGetProductsQuery('');

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <img src='/loading.gif' alt='loading' className='h-20 w-20' />
      </div>
    );
  }

  return (
    <Layout>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <AdminSidebar>
          <div className='flex flex-col'>
            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
              {data && !isLoading && (
                <Card>
                  <CardHeader className='px-7'>
                    <CardTitle>Productos</CardTitle>
                    <CardDescription>
                      Lista de Productos Disponibles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nombre producto</TableHead>
                          <TableHead className='hidden sm:table-cell'>
                            Precio
                          </TableHead>
                          <TableHead className='hidden sm:table-cell'>
                            Categoría
                          </TableHead>
                          <TableHead className='hidden sm:table-cell'>
                            Género
                          </TableHead>
                          <TableHead className='hidden sm:table-cell'>
                            Talla
                          </TableHead>
                          <TableHead className='hidden sm:table-cell'>
                            Color
                          </TableHead>
                          <TableHead className='hidden sm:table-cell'>
                            Stock
                          </TableHead>
                          <TableHead className='text-right' />
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.map((product) => (
                          <TableRow className='bg-accent'>
                            <TableCell>
                              <div className='font-medium'>
                                {product.name.length > 40
                                  ? `${product.name.substring(0, 40)}...`
                                  : product.name}
                              </div>
                            </TableCell>
                            <TableCell className='hidden sm:table-cell'>
                              CLP {product.price}
                            </TableCell>
                            <TableCell className='hidden sm:table-cell'>
                              {product.category}
                            </TableCell>
                            <TableCell className='hidden sm:table-cell'>
                              {product.gender}
                            </TableCell>
                            <TableCell className='hidden sm:table-cell'>
                              {product.size}
                            </TableCell>
                            <TableCell className='hidden sm:table-cell'>
                              {product.color}
                            </TableCell>
                            <TableCell className='hidden sm:table-cell'>
                              <Badge className='text-xs' variant='secondary'>
                                {product.quantity}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Dialog>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      aria-haspopup='true'
                                      size='icon'
                                      variant='ghost'
                                    >
                                      <MoreHorizontal className='h-4 w-4' />
                                      <span className='sr-only'>
                                        Toggle menu
                                      </span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align='end'>
                                    <DialogTrigger asChild>
                                      <DropdownMenuItem>
                                        Actualizar Stock
                                      </DropdownMenuItem>
                                    </DialogTrigger>
                                    <DropdownMenuItem>
                                      Eliminar
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                                <DialogContent className='sm:max-w-[425px]'>
                                  <DialogHeader>
                                    <DialogTitle>
                                      Actualizar stock de {product.name}
                                    </DialogTitle>
                                    <DialogDescription>
                                      Ingresa la nueva cantidad de stock del
                                      producto
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className='grid gap-4 py-4'>
                                    <div className='grid grid-cols-4 items-center gap-4'>
                                      <Label
                                        htmlFor='name'
                                        className='text-right'
                                      >
                                        Nuevo stock
                                      </Label>
                                      <Input id='name' className='col-span-3' />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button type='submit'>Actualizar </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </main>
          </div>
        </AdminSidebar>
      </div>
    </Layout>
  );
}
