import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import invitationsApi from './invitationsApi';

const rootReducer = combineReducers({
  [invitationsApi.reducerPath]: invitationsApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(invitationsApi.middleware),
});

setupListeners(store.dispatch);


export type RootState = typeof rootReducer;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;



export default store;