/* eslint-disable react/jsx-props-no-spreading */
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className='flex h-screen flex-row'>
      <Card className='w-1/2 text-center'>
        <h1>img</h1>
      </Card>
      <Separator orientation='vertical' className='' />
      <Card className='flex w-1/2 flex-col items-center justify-center'>
        <CardHeader className='text-xl font-semibold'>
          <Image src='/Logo.jpeg' alt='Logo' width={200} height={200} />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue='login' className='w-[250px]'>
            <TabsList className='grid grid-cols-2 rounded-3xl bg-neutral-200'>
              <TabsTrigger className='rounded-3xl font-semibold' value='login'>
                LOGIN
              </TabsTrigger>
              <TabsTrigger className='rounded-3xl font-semibold' value='signup'>
                SIGN UP
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
        <CardContent className='w-7/12'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter Email Address' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter a Password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <h2 className='pl-[30%] underline '>Forgot password?</h2>
              <Button className='w-full rounded-3xl bg-black' type='submit'>
                LOG IN
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
