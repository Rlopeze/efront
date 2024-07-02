import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/products`,
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

    getAllProductByID: builder.query({
      query: (id) => ({
        url: '/get_product_by_id_specific_color/',
        params: {
          id,
        },
      }),
    }),

    getProductsByCategory: builder.query({
      query: (category) => ({
        url: `/filter_products/?category=${category}`,
      }),
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: '/add_product/',
        method: 'POST',
        body: product,
        headers: {
          Authorization:
            // TODO: Change this to a real token
            `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/delete_product_by_id/?id=${id}`,
        method: 'DELETE',
        headers: {
          Authorization:
            // TODO: Change this to a real token
            `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }),
    }),

    updateProduct: builder.mutation({
      query: (product) => ({
        url: '/stock_update/',
        method: 'PUT',
        body: product,
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            // TODO: Change this to a real token
            `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useGetAllProductByIDQuery,
  useGetProductsByCategoryQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
