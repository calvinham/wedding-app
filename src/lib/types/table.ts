export enum RSVP {
  VENDOR = 'VENDOR',
  YES = 'RSVP YES',
  NO = 'RSVP NO',
  UNSURE = 'UNSURE',
}

export type InvitationTableRow = {
  id: number;
  firstName: string;
  lastName: string;
  alias: string | null;
  needsLodging: boolean | null;
  address: string | null;
  numGuests: number;
  guestsAttending: number | null;
  rsvp: RSVP | null;
  plusOne: string | null;
};
