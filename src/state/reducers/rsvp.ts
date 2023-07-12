import { InvitationTableRow } from '@/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum RSVPFlowState {
  INITIAL = 'INITIAL',
  NAME = 'NAME',
  ATTENDING = 'ATTENDING',
  PLUS_ONE = 'PLUS_ONE',
  PLUS_ONE_NAME = 'PLUS_ONE_NAME',
  DONE = 'DONE',
}

export interface RsvpUIState {
  flowState: RSVPFlowState;
  activeRow?: InvitationTableRow;
}

const initialState: RsvpUIState = {
  flowState: RSVPFlowState.INITIAL,
  activeRow: undefined,
};

const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    updateFlowState: (state, action: PayloadAction<RSVPFlowState>) => {
      state.flowState = action.payload;
    },
    setActiveInvited: (state, action: PayloadAction<InvitationTableRow>) => {
      state.activeRow = action.payload;
    },
  },
});

export default rsvpSlice.reducer;

export const { updateFlowState, setActiveInvited } = rsvpSlice.actions;

export const selectRsvpSlice = (state: { rsvp: RsvpUIState }) => state.rsvp;
