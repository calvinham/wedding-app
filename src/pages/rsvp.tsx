import React, { useRef } from 'react';

import Page from '@/components/Common/Page';

import Landing from '@/components/Rsvp/Landing';
import RsvpInfo from '@/components/Rsvp/RsvpInfo';

const Rsvp: React.FC<{}> = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScrollOnClick = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Page pageMaxWidth={'xl'}>
        <Landing handleScroll={handleScrollOnClick} />
      </Page>
      <Page pageRef={scrollRef} pageMaxWidth={'xl'}>
        <RsvpInfo />
      </Page>
    </>
  );
};

export default Rsvp;
