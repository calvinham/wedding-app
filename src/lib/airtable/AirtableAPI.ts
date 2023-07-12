import { RsvpUIState } from '@/state/reducers/rsvp';
import Airtable, { FieldSet, Record } from 'airtable';
import { airtableUtil } from './util';
import { InvitationTableRow, RSVP } from '../types';

const airtableClient = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
});

const invitationsTable = airtableClient.base(
  import.meta.env.VITE_AIRTABLE_BASE_ID
)('Invitations');

const COL = {
  firstName: 'First Name',
  lastName: 'Last Name',
  alias: 'Alias',
  needsLodging: 'Needs Lodging',
  address: 'Address',
  numGuests: '# Guests',
  numGuestsAttending: '# Guests Attending',
  rsvp: 'RSVP',
  plusOne: 'Plus One',
};

class AirtableAPI {
  static async getInvitations() {
    const data = await invitationsTable.select().all();
    return data.map(airtableUtil.parseInvitationRow);
  }

  static async updateInvitation(rsvpState: RsvpUIState) {
    const { invitation } = rsvpState;

    const castData = airtableUtil.castStateToRawInvitation(rsvpState);

    console.debug('cast data: ', castData);

    if (!invitation || !castData) {
      return;
    }

    return invitationsTable.update(invitation.id, castData);
  }
}

export default AirtableAPI;
