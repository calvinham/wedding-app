import React, { useMemo } from 'react';

import { Routes as RouterRoutes, Route } from 'react-router-dom';

import FaqPage from '@/pages/FaqPage';
import RsvpPage from '@/pages/RsvpPage';
import MissYouPage from '@/pages/MissYouPage';
import SeeYouSoonPage from '@/pages/SeeYouSoonPage';

import { SLUGS } from './slugs';
import useShowReceptionDetails from '@/hooks/reception/useShowReceptionDetails';
import ReceptionPage from '@/pages/ReceptionPage';

const Routes: React.FC<{}> = () => {
  const showReceptionDetails = useShowReceptionDetails();

  const MainPage = useMemo(() => {
    const component: React.FC<{}> = () =>
      showReceptionDetails ? <ReceptionPage /> : <RsvpPage />;
    return component;
  }, [showReceptionDetails]);

  return (
    <RouterRoutes>
      <Route
        path={`/${showReceptionDetails ? SLUGS.reception : SLUGS.rsvp}`}
        element={<MainPage />}
      />
      <Route path={`/${SLUGS.faq}`} element={<FaqPage />} />
      <Route path={`/${SLUGS.missYou}`} element={<MissYouPage />} />
      <Route path={`/${SLUGS.seeYouSoon}`} element={<SeeYouSoonPage />} />
      <Route path="*" element={<MainPage />} />
    </RouterRoutes>
  );
};

export default Routes;
