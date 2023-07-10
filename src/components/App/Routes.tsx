import React from 'react';

import { Routes as RouterRoutes, Route } from 'react-router-dom';

import Faq from '@/pages/faq';
import Rsvp from '@/pages/rsvp';

const Routes: React.FC<{}> = () => {
  return (
    <RouterRoutes>
      <Route index path="/rsvp" element={<Rsvp />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<Rsvp />} />
    </RouterRoutes>
  );
};

export default Routes;
