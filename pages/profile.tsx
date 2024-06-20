/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { Separator } from '@radix-ui/react-separator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
import { useDeleteUserMutation, useEditUserMutation } from './api/authApi';
import { setIsAuthenticated, setUser } from '../redux/features/userSlice';
import { IoPersonOutline } from '../utils/icons';

const editProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email(),
});

const EditProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = useSelector(
    (store: {
      auth: {
        user: null | {
          access: string;
          user: { username: string; email: string };
        };
        isAuthenticated: boolean;
      };
    }) => store.auth
  );

  const EditProfileForm = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: auth.user?.user.username,
      email: auth.user?.user.email,
    },
  });

  const [editUser, { isLoading: isEditUserLoading, data: editData }] =
    useEditUserMutation();

  const [deleteUser] = useDeleteUserMutation();

  function onEditProfileSubmit(values: z.infer<typeof editProfileSchema>) {
    const registerData = {
      body: {
        name: `${values.name} ${values.lastName}`,
      },
      key: auth.user?.access,
    };
    editUser(registerData);
  }
  if (editData) {
    setUser(editData.data.user);
    dispatch(setIsAuthenticated(true));
    router.push('/');
  }

  function onDeleteProfile() {
    deleteUser({});
  }

  return (
    <div className='flex h-screen flex-row'>
      <Card className='w-1/2 text-center'>
        <h1>img</h1>
      </Card>
      <Separator orientation='vertical' className='' />
      <Card className='flex w-1/2 flex-col items-center justify-center'>
        <CardHeader className='text-xl font-semibold'>
          <IoPersonOutline size={50} />
        </CardHeader>
        <CardContent>
          <Form {...EditProfileForm}>
            <form
              onSubmit={EditProfileForm.handleSubmit(onEditProfileSubmit)}
              className='space-y-6'
            >
              <FormField
                control={EditProfileForm.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder='Ingresa tu nombre' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={EditProfileForm.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder='Ingresa tu correo' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className='w-full rounded-3xl bg-black'
                type='submit'
                disabled={isEditUserLoading}
              >
                SAVE
              </Button>
              <Button
                className='w-full rounded-3xl bg-black'
                disabled={isEditUserLoading}
                onClick={() => router.push('/')}
              >
                RETURN
              </Button>
              <Button
                className='invisible w-full rounded-3xl'
                onClick={() => onDeleteProfile}
              >
                Delete
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfile;
