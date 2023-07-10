import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Invitations from '@/lib/airtable/Invitations';

const invitationsApi = createApi({
  reducerPath: 'invitationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.airtable.com/v0',
  }),
  endpoints: (builder) => {
    return {
      getInvitations: builder.query({
        async queryFn() {
          const instance = Invitations.getInstance();
          const data = await instance.getAllInvitations();
          return { data };
        },
      }),
    };
  },
});

export const { useLazyGetInvitationsQuery, useGetInvitationsQuery } =
  invitationsApi;

export default invitationsApi;
