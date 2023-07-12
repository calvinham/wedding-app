import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { RSVP_SLUG, VALID_PATHS } from './slugs';

function useNavigateToRsvp() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!VALID_PATHS.includes(pathname)) {
      navigate(`/${RSVP_SLUG}`);
    }
  }, [pathname, navigate]);

  return null;
}

const Loader: React.FC<{}> = () => {
  useNavigateToRsvp();

  return null;
};

export default Loader;
