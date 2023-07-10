import { useMemo } from 'react';
import useAllInvitations from './useAllInvitations';

export default function useIsInvited(firstName: string, lastName: string) {
  const { data, loading } = useAllInvitations();

  if (!data || loading) return false;

  return useMemo(() => {}, []);
}
