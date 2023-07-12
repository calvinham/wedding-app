import { useAppSelector } from '@/state';

export default function useActiveInvitation() {
  return useAppSelector((s) => s.rsvp.invitation);
}
