import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/products',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/get_products/',
    }),

    getProductDetail: builder.query({
      query: (id) => ({
        url: '/get_product_by_id/',
        params: {
          id,
        },
      }),
    }),
    getAllProductByID: builder.query({
      query: (id) => ({
        url: '/get_product_by_id_specific_color/',
        params: {
          id,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useGetAllProductByIDQuery,
} = productApi;
