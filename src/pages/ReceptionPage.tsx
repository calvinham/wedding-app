import React, { useRef } from 'react';

import Page from '@/components/Common/Page';

import ReceptionDetails from '@/components/Reception/ReceptionDetails';
import Landing from '@/components/Rsvp/Landing';

const ReceptionPage: React.FC<{}> = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Page pageMaxWidth={'xl'}>
        <Landing
          handleScroll={() => {
            if (!scrollRef.current) return;
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </Page>
      <Page pageRef={scrollRef} pageMaxWidth={'xl'}>
        <ReceptionDetails />
      </Page>
    </>
  );
};

export default ReceptionPage;
