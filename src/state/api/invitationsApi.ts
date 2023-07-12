import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import AirtableAPI from '@/lib/airtable/AirtableAPI';
import { InvitationTableRow } from '@/lib/types';
import { RsvpUIState } from '../reducers/rsvp';
import { airtableUtil } from '@/lib/airtable/util';

const invitationsApi = createApi({
  reducerPath: 'invitationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.airtable.com/v0',
  }),
  tagTypes: ['Invitation'],
  endpoints: (builder) => {
    return {
      getInvitations: builder.query<InvitationTableRow[], null>({
        async queryFn() {
          console.debug('[INVITATIONS API] getInvitations]: fetching...');
          const data = await AirtableAPI.getInvitations();
          console.debug('[INVITATIONS API] getInvitations]: result', data);
          return { data };
        },
        providesTags: ['Invitation'],
      }),
      updateInvitation: builder.mutation<any, RsvpUIState>({
        async queryFn(rsvpState) {
          console.debug(
            '[INVITATIONS API] updateInvitation]: updating',
            rsvpState
          );
          const data = await AirtableAPI.updateInvitation(rsvpState);
          console.debug(
            '[INVITATIONS API] updateInvitation]: result RAW',
            data
          );

          if (!data) {
            return { data: undefined };
          }

          const parsed = airtableUtil.parseInvitationRow(data);

          console.debug(
            '[INVITATIONS API] updateInvitation]: result PARSED',
            parsed
          );

          return { data: parsed };
        },
        invalidatesTags: ['Invitation'],
      }),
    };
  },
});

export const {
  useLazyGetInvitationsQuery,
  useGetInvitationsQuery,
  useUpdateInvitationMutation,
} = invitationsApi;

export default invitationsApi;
