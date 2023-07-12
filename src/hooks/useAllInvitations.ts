import { useGetInvitationsQuery } from '@/state/api';

export default function useAllInvitations() {
  const invitationsQuery = useGetInvitationsQuery(null);

  return {
    data: invitationsQuery.data,
    isLoading: invitationsQuery.isLoading,
  } as const;
}
