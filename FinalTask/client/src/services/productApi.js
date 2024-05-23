// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => `products`,
        }),
        getOne: builder.query({
            query: (id) => `products/${id}`,
        }),
        delete: builder.mutation({
            query: (id) => (
                {
                    url: `products/${id}`,
                    method: 'DELETE'
                }
            ),
        }),
        post: builder.mutation({
            query: (payload) => (
                {
                    url: `products`,
                    method: 'POST',
                    body: payload,
                    headers: ({
                        'Content-Type': 'application/json'
                    })
                }
            ),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllQuery,useGetOneQuery,useDeleteMutation,usePostMutation } = productApi