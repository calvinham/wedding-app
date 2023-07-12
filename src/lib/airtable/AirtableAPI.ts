import { FieldSet, Record } from 'airtable';
import { InvitationTableRow, RSVP } from '@/lib/types';
import { airtable } from './client';

const parseInvitationRow = (row: Record<FieldSet>): InvitationTableRow => {
  const { fields } = row;

  return {
    id: fields.id as number,
    firstName: fields['First Name'] as string,
    lastName: fields['Last Name'] as string,
    alias: fields['Alias'] as string | null,
    needsLodging: fields['Needs Lodging'] as boolean | null,
    address: fields['Address'] as string | null,
    numGuests: fields['# Guests'] as number,
    guestsAttending: fields['# Guests Attending'] as number | null,
    rsvp: fields['RSVP'] as RSVP | null,
    plusOne: fields['Plus One'] as string | null,
  };
};

export default class AirtableAPI {
  static async getInvitations() {
    const data = await airtable.invitations.select().all();
    return data.map(parseInvitationRow);
  }
}
