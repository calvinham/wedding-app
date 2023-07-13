import Airtable from 'airtable';
import { RsvpUIState } from '@/state/reducers/rsvp';
import { airtableUtil } from './util';
import { InvitationTableRow } from '../types';

const airtableClient = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
});

const invitationsTable = airtableClient.base(
  import.meta.env.VITE_AIRTABLE_BASE_ID
)('Invitations');

class AirtableAPI {
  static async getInvitations(): Promise<InvitationTableRow[]> {
    const data = await invitationsTable.select().all();

    const validRows: InvitationTableRow[] = [];

    data.forEach((d) => {
      const parsed = airtableUtil.parseInvitationRow(d);
      if (parsed) validRows.push(parsed);
    });

    return validRows;
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
