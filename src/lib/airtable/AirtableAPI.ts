import { FieldSet, Record } from 'airtable';
import { InvitationTableRow, RSVP } from '@/lib/types';
import { airtable } from './client';

const parseInvitationRow = (row: Record<FieldSet>): InvitationTableRow => {
  const { fields } = row;

  return {
    id: fields.id as number,
    firstName: row.fields['First Name'] as string,
    lastName: row.fields['Last Name'] as string,
    alias: row.fields['Alias'] as string | null,
    needsLodging: row.fields['Needs Lodging'] as boolean | null,
    address: row.fields['Address'] as string | null,
    numGuests: row.fields['# Guests'] as number,
    guestsAttending: row.fields['# Guests Attending'] as number | null,
    rsvp: row.fields['RSVP'] as RSVP | null,
  };
};

export default class AirtableAPI {
  static async getInvitations() {
    const data = await airtable.invitations.select().all();
    return data.map(parseInvitationRow);
  }
}
