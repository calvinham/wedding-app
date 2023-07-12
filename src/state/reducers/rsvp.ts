import { InvitationTableRow } from '@/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum RSVPFlowState {
  INITIAL = 'INITIAL',
  NAME = 'NAME',
  ATTENDING = 'ATTENDING',
  NOT_ATTENDING = 'NOT_ATTENDING',
  HAS_PLUS_ONE = 'HAS_PLUS_ONE',
  PLUS_ONE_NAME = 'PLUS_ONE_NAME',
  DONE = 'DONE',
}

export interface RsvpUIState {
  flowState: RSVPFlowState;
  invitation?: InvitationTableRow;
  attending?: boolean;
  hasPlusOne?: boolean;
  plusOneName?: string;
}

const initialState: RsvpUIState = {
  flowState: RSVPFlowState.INITIAL,
  invitation: undefined,
  attending: undefined,
  hasPlusOne: undefined,
  plusOneName: undefined,
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
    setHasPlusOne: (state, action: PayloadAction<boolean>) => {
      state.hasPlusOne = action.payload;
    },
    setPlusOneName: (state, action: PayloadAction<string>) => {
      state.plusOneName = action.payload;
    },
    resetRsvpState: () => initialState,
  },
});

export default rsvpSlice.reducer;

export const {
  updateFlowState,
  setActiveInvitation,
  setUserAttending,
  setHasPlusOne,
  setPlusOneName,
  resetRsvpState,
} = rsvpSlice.actions;

export const selectRsvpSlice = (state: { rsvp: RsvpUIState }) => state.rsvp;
