import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import invitationsApi from '@/state/api/invitationsApi';
import rsvpReducer from '@/state//reducers/rsvp';

const rootReducer = combineReducers({
  [invitationsApi.reducerPath]: invitationsApi.reducer,
  rsvp: rsvpReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(invitationsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = typeof rootReducer;
export type AppStore = typeof store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
