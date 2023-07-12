import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import AirtableAPI from '@/lib/airtable/AirtableAPI';
import { InvitationTableRow } from '@/lib/types';

const invitationsApi = createApi({
  reducerPath: 'invitationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.airtable.com/v0',
  }),
  endpoints: (builder) => {
    return {
      getInvitations: builder.query<InvitationTableRow[], any>({
        async queryFn() {
          const data = await AirtableAPI.getInvitations();
          return { data };
        },
      }),
    };
  },
});

export const { useLazyGetInvitationsQuery, useGetInvitationsQuery } =
  invitationsApi;

const { usePrefetch } = invitationsApi;

export const usePrefetchInvitations = () => {
  return usePrefetch('getInvitations');
};

export default invitationsApi;
