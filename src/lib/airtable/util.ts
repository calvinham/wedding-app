import { capitalize, capitalizeOrUndef } from '@/lib/util';
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

const parseInvitationRow = (
  row: Record<FieldSet>
): InvitationTableRow | undefined => {
  const { fields } = row;

  const firstNameCOL = fields[COL.firstName] as string | undefined;

  if (!firstNameCOL) {
    return undefined;
  }

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
  hasPlusOne,
  plusOneName,
}: RsvpUpdateState) {
  if (!invitation || !firstName) {
    return undefined;
  }

  /// If we already account for a Plus One, then we keep the 'First Name' field as is
  if (invitation.firstName && invitation.plusOne) {
    return (
      capitalize(invitation.firstName) + ' + ' + capitalize(invitation.plusOne)
    );
  }

  const plusOneFirstName = plusOneName
    ? plusOneName.split(' ').slice(0, -1).join(' ')
    : undefined;

  const _firstName =
    hasPlusOne && plusOneFirstName
      ? `${capitalize(firstName)} + ${capitalize(plusOneFirstName)}`
      : capitalize(firstName);

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

  const { invitation: inv } = rsvpState;

  const numAttending =
    rsvpState.attending === RSVP.NO
      ? 0
      : rsvpState.hasPlusOne && rsvpState.plusOneName
      ? 2
      : 1;

  const toRaw: Partial<FieldSet> = {
    [COL.firstName]: castFirstName(rsvpState as RsvpUpdateState),
    [COL.lastName]: capitalizeOrUndef(inv.lastName),
    [COL.alias]: capitalizeOrUndef(inv.alias),
    [COL.needsLodging]: inv.needsLodging,
    [COL.address]: inv.address,
    [COL.numGuests]: inv.numGuests,
    [COL.numGuestsAttending]: numAttending,
    [COL.rsvp]: rsvpState.attending,
    [COL.plusOne]: capitalizeOrUndef(rsvpState.plusOneName) || 'N/A',
  };

  return toRaw;
};

export const airtableUtil = {
  parseInvitationRow,
  castStateToRawInvitation,
};
