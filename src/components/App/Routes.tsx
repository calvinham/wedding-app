import React from 'react';

import { Routes as RouterRoutes, Route } from 'react-router-dom';

import FaqPage from '@/pages/FaqPage';
import RsvpPage from '@/pages/RsvpPage';
import MissYouPage from '@/pages/MissYouPage';
import SeeYouSoonPage from '@/pages/SeeYouSoonPage';

import { FAQ_SLUG, MISS_YOU_SLUG, RSVP_SLUG, SEE_YOU_SOON_SLUG } from './slugs';

const Routes: React.FC<{}> = () => {
  return (
    <RouterRoutes>
      <Route index path={`/${RSVP_SLUG}`} element={<RsvpPage />} />
      <Route path={`/${FAQ_SLUG}`} element={<FaqPage />} />
      <Route path={`/${MISS_YOU_SLUG}`} element={<MissYouPage />} />
      <Route path={`/${SEE_YOU_SOON_SLUG}`} element={<SeeYouSoonPage />} />
      <Route path="*" element={null} />
    </RouterRoutes>
  );
};

export default Routes;
