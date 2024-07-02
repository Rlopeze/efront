import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/user`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/all/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            //  TODO: Change this to a real token
            `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }),
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url: `/staff/?id=${user.id}`,
        method: 'PUT',
        body: user,
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            // TODO: Change this to a real token
            `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/`,
        method: 'DELETE',
        body: { id },
        headers: {
          Authorization:
            // TODO: Change this to a real token
            `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
