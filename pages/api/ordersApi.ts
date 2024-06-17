import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1',
    prepareHeaders: (headers) => {
      //TO DO get token from local storage
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NDQxNjUwLCJqdGkiOiJjYTQ3YmRjYTJkNzI0ODYzOWE0OTAxNWNkODU0YjY3YyIsInVzZXJfaWQiOiI5NTZjMGI2OS0yMmZjLTQ2ZDQtYTQ1Mi0zOTZiZDExNDMwY2IifQ.IYpZjcsAVHIHvLl-w6coUqUdPdvdJ3YXLon6hkVFI-M';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: '/products/add_product/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;
