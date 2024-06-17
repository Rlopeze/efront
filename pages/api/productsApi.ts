import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/products',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/',
    }),

    getProductDetail: builder.query({
      query: (id) => ({
        url: '/get_product_by_id/',
        params: {
          id,
        },
      }),
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: '/add_product/',
        method: 'POST',
        body: product,
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            // TODO: Change this to a real token
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NDQxNjUwLCJqdGkiOiJjYTQ3YmRjYTJkNzI0ODYzOWE0OTAxNWNkODU0YjY3YyIsInVzZXJfaWQiOiI5NTZjMGI2OS0yMmZjLTQ2ZDQtYTQ1Mi0zOTZiZDExNDMwY2IifQ.IYpZjcsAVHIHvLl-w6coUqUdPdvdJ3YXLon6hkVFI-M',
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useCreateProductMutation,
} = productApi;
