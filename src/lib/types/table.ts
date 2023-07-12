export enum RSVP {
  VENDOR = 'VENDOR',
  YES = 'RSVP YES',
  NO = 'RSVP NO',
  UNSURE = 'UNSURE',
}

export type InvitationTableRow = {
  id: string;
  firstName: string | undefined;
  lastName: string | undefined;
  alias: string | undefined;
  needsLodging: boolean | undefined;
  address: string | undefined;
  numGuests: number | undefined;
  guestsAttending: number | undefined;
  rsvp: RSVP | undefined;
  plusOne: string | undefined;
};
