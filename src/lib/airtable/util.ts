import { FieldSet, Record } from 'airtable';
import { InvitationTableRow, RSVP } from '@/lib/types';
import { RsvpUIState, RsvpUpdateState } from '@/state/reducers/rsvp';

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

const parseInvitationRow = (row: Record<FieldSet>): InvitationTableRow => {
  const { fields } = row;

  const firstNameCOL = fields[COL.firstName] as string;

  const invitationRow: InvitationTableRow = {
    id: row.id as string,
    firstName: undefined,
    lastName: fields[COL.lastName] as string | undefined,
    alias: fields[COL.alias] as string | undefined,
    needsLodging: fields[COL.needsLodging] as boolean | undefined,
    address: fields[COL.address] as string | undefined,
    numGuests: fields[COL.numGuests] as number | undefined,
    guestsAttending: fields[COL.numGuestsAttending] as number | undefined,
    rsvp: fields[COL.rsvp] as RSVP | undefined,
    plusOne: undefined as string | undefined,
  };

  const [_firstName, _plusOne] = firstNameCOL.split('+');

  if (_firstName) {
    invitationRow.firstName = _firstName.trim();
  }

  if (_plusOne) {
    invitationRow.plusOne = _plusOne.trim();
  }

  return invitationRow;
};

function castFirstName({
  invitation,
  firstName,
  lastName,
  hasPlusOne,
  plusOneName,
}: RsvpUpdateState) {
  if (!invitation || !firstName || !lastName) {
    return undefined;
  }

  const _firstName =
    hasPlusOne && plusOneName ? `${firstName} + ${plusOneName}` : firstName;

  return _firstName;
}

const castStateToRawInvitation = (rsvpState: RsvpUIState) => {
  if (
    !rsvpState.invitation ||
    !rsvpState.firstName ||
    !rsvpState.lastName ||
    !rsvpState.attending
  ) {
    return undefined;
  }

  const { invitation } = rsvpState;

  const numGuestsAttending =
    rsvpState.hasPlusOne && rsvpState.plusOneName ? 2 : 1;

  const toRaw: Partial<FieldSet> = {
    // id: invitation.id as string,
    [COL.firstName]: castFirstName(rsvpState as RsvpUpdateState),
    [COL.lastName]: invitation.lastName as string | undefined,
    [COL.alias]: invitation.alias as string | undefined,
    [COL.needsLodging]: invitation.needsLodging as boolean | undefined,
    [COL.address]: invitation.address as string | undefined,
    [COL.numGuests]: invitation.numGuests as number | undefined,
    [COL.numGuestsAttending]: numGuestsAttending as number | undefined,
    [COL.rsvp]: (rsvpState.attending ? RSVP.YES : RSVP.NO) as
      | string
      | undefined,
    [COL.plusOne]: rsvpState.plusOneName?.split(' ')[0] as string | undefined,
  };

  return toRaw;
};

export const airtableUtil = {
  parseInvitationRow,
  castStateToRawInvitation,
};
