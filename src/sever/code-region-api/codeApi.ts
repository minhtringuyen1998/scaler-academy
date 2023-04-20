import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFlag } from 'interface';
 const codeApi = createApi({
  reducerPath: "codeApi",
  baseQuery:fetchBaseQuery({ baseUrl : "https://mocki.io/v1/"}),
  tagTypes : ["Code"],
  endpoints : (builder) => ({
    getCodeRegion : builder.query<IFlag[] , string >({
      query : () => `5cb40367-ca15-4905-89b4-68ee9a47a40a`,
    }),
    
    
  }),
})
export const { useGetCodeRegionQuery } = codeApi
export default codeApi