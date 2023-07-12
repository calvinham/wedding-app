import { usePrefetchInvitations } from '@/state/api';
import React, { useEffect } from 'react';

const Loader: React.FC<{}> = () => {
  const prefetchInvitations = usePrefetchInvitations();

  useEffect(() => {
    const fetch = async () => {
      const data = await prefetchInvitations({});
      console.log('prefetched data: ', data);
    };

    fetch();
  }, []);

  return null;
};

export default Loader;
