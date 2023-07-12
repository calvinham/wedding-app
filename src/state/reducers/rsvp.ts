import { InvitationTableRow } from '@/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum RSVPFlowState {
  INITIAL = 'INITIAL',
  NAME = 'NAME',
  ATTENDING = 'ATTENDING',
  NOT_ATTENDING = 'NOT_ATTENDING',
  PLUS_ONE = 'PLUS_ONE',
  PLUS_ONE_NAME = 'PLUS_ONE_NAME',
  DONE = 'DONE',
}

export interface RsvpUIState {
  flowState: RSVPFlowState;
  invitation?: InvitationTableRow;
  attending?: boolean;
}

const initialState: RsvpUIState = {
  flowState: RSVPFlowState.INITIAL,
  invitation: undefined,
  attending: undefined,
};

const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    updateFlowState: (state, action: PayloadAction<RSVPFlowState>) => {
      state.flowState = action.payload;
    },
    setActiveInvitation: (state, action: PayloadAction<InvitationTableRow>) => {
      state.invitation = action.payload;
    },
    setUserAttending: (state, action: PayloadAction<boolean>) => {
      state.attending = action.payload;
    },
  },
});

export default rsvpSlice.reducer;

export const { updateFlowState, setActiveInvitation, setUserAttending } =
  rsvpSlice.actions;

export const selectRsvpSlice = (state: { rsvp: RsvpUIState }) => state.rsvp;
