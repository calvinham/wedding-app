export const RSVP_SLUG = 'rsvp';

export const MISS_YOU_SLUG = `${RSVP_SLUG}/miss-you`;

export const FAQ_SLUG = 'faq';

export const SEE_YOU_SOON_SLUG = `${RSVP_SLUG}/see-you-soon`;

export const RECEPTION_SLUG = 'reception';

export const SLUGS = {
  rsvp: RSVP_SLUG,
  missYou: MISS_YOU_SLUG,
  faq: FAQ_SLUG,
  seeYouSoon: SEE_YOU_SOON_SLUG,
  reception: RECEPTION_SLUG,
};

export const VALID_PATHS: string[] = [
  `/${RSVP_SLUG}`,
  `/${FAQ_SLUG}`,
  `/${MISS_YOU_SLUG}`,
  `/${SEE_YOU_SOON_SLUG}`,
  `/${RECEPTION_SLUG}`,
];
