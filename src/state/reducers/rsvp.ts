import { InvitationTableRow, RSVP } from '@/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum RSVPFlowState {
  INITIAL = 'INITIAL',
  NAME = 'NAME',
  ATTENDING = 'ATTENDING',
  HAS_PLUS_ONE = 'HAS_PLUS_ONE',
  PLUS_ONE_NAME = 'PLUS_ONE_NAME',
}

export interface RsvpUIState {
  flowState: RSVPFlowState;
  invitation?: InvitationTableRow;
  firstName?: string;
  lastName?: string;
  attending?: RSVP;
  hasPlusOne?: boolean;
  plusOneName?: string;
}

export type RsvpUpdateState = Required<
  Pick<RsvpUIState, 'invitation' | 'firstName' | 'lastName' | 'attending'>
> &
  Partial<Pick<RsvpUIState, 'hasPlusOne' | 'plusOneName'>>;

const initialState: RsvpUIState = {
  flowState: RSVPFlowState.INITIAL,
  firstName: undefined,
  lastName: undefined,
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
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setUserAttending: (state, action: PayloadAction<RSVP>) => {
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
  setLastName,
  setFirstName,
} = rsvpSlice.actions;

export const selectRsvpSlice = (state: { rsvp: RsvpUIState }) => state.rsvp;
