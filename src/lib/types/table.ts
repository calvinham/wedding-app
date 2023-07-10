export enum RSVP {
  VENDOR = 'VENDOR',
  YES = 'RSVP YES',
  NO = 'RSVP NO',
  UNSURE = 'UNSURE',
}

export type InvitationTableRow = {
  id: number;
  ['First Name']: string;
  ['Last Name']: string;
  ['Needs Lodging']: boolean | null;
  address: string | null;
  ['# Guests']: number;
  ['# Guests Attending']: number | null;
  ['RSVP']: RSVP | null;
};
