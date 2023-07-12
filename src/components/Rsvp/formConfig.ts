import { RSVPFlowState } from '@/state/reducers/rsvp';

const RSVP_FORM_CONFIG: {
  [k in RSVPFlowState]: {
    title: string;
  };
} = {
  [RSVPFlowState.INITIAL]: {
    title: '',
  },
  [RSVPFlowState.NAME]: {
    title: "What's your name?",
  },
  [RSVPFlowState.ATTENDING]: {
    title: 'Can you make it to the event on the evening of September 29th?',
  },
  [RSVPFlowState.HAS_PLUS_ONE]: {
    title: 'Are you bringing a +1?',
  },
  [RSVPFlowState.PLUS_ONE_NAME]: {
    title: "What's your +1's name?",
  },
};

export default RSVP_FORM_CONFIG;
