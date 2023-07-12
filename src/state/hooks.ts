import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { AppState, AppDispatch } from '@/state/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
