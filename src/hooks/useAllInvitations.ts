import { InvitationTableRow, RSVP } from '@/lib/types';
import { useGetInvitationsQuery } from '@/state/api';
import { FieldSet, Record } from 'airtable';
import { useMemo } from 'react';

const parseInvitationRow = (row: Record<FieldSet>): InvitationTableRow => {
  const { fields } = row;

  return {
    id: fields.id as number,
    ['First Name']: row.fields['First Name'] as string,
    ['Last Name']: row.fields['Last Name'] as string,
    ['Needs Lodging']: row.fields['Needs Lodging'] as boolean | null,
    address: row.fields['Address'] as string | null,
    ['# Guests']: row.fields['# Guests'] as number,
    ['# Guests Attending']: row.fields['# Guests Attending'] as number | null,
    ['RSVP']: row.fields['RSVP'] as RSVP | null,
  };
};

export default function useAllInvitations() {
  const invitationsQuery = useGetInvitationsQuery({});

  const data: InvitationTableRow[] = useMemo(() => {
    const arr: InvitationTableRow[] = [];

    invitationsQuery.data?.forEach((datum) => {
      if (!datum) return;
      arr.push(parseInvitationRow(datum));
    });

    return arr;
  }, [invitationsQuery.data]);

  return {
    data,
    loading: invitationsQuery.isLoading,
    refetch: invitationsQuery.refetch,
  } as const;
}
