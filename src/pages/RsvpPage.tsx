import React, { useRef } from 'react';

import Page from '@/components/Common/Page';

import Landing from '@/components/Rsvp/Landing';
import RsvpInfo from '@/components/Rsvp/RsvpInfo';
import RSVPDrawer from '@/components/Rsvp/RSVPDrawer';
import useAllInvitations from '@/hooks/useAllInvitations';

const Rsvp: React.FC<{}> = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const invitations = useAllInvitations();

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
        <RsvpInfo />
      </Page>
      <RSVPDrawer invitations={invitations} />
    </>
  );
};

export default Rsvp;
