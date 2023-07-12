import React from 'react';

import { Routes as RouterRoutes, Route } from 'react-router-dom';

import Faq from '@/pages/faq';
import Rsvp from '@/pages/rsvp';
import MissYou from '@/pages/missYou';
import { FAQ_SLUG, MISS_YOU_SLUG, RSVP_SLUG } from './slugs';

const Routes: React.FC<{}> = () => {
  return (
    <RouterRoutes>
      <Route path={`/${RSVP_SLUG}`} element={<Rsvp />} />
      <Route path={`/${FAQ_SLUG}`} element={<Faq />} />
      <Route path={`/${RSVP_SLUG}/${MISS_YOU_SLUG}`} element={<MissYou />} />
      <Route path="*" element={<Rsvp />} />
    </RouterRoutes>
  );
};

export default Routes;
