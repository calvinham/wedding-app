import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { SLUGS, VALID_PATHS } from './slugs';
import useShowReceptionDetails from '@/hooks/reception/useShowReceptionDetails';

function useNavigateToRsvp() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const showReceptionDetails = useShowReceptionDetails();

  useEffect(() => {
    const defaultSlug = showReceptionDetails ? SLUGS.reception : SLUGS.rsvp;

    if (!VALID_PATHS.includes(pathname)) {
      navigate(`/${defaultSlug}`);
    }
  }, [showReceptionDetails, pathname, navigate]);

  return null;
}

const Loader: React.FC<{}> = () => {
  useNavigateToRsvp();

  return null;
};

export default Loader;
