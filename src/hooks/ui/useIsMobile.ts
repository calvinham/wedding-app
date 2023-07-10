import { MOBILE_MAX_WIDTH } from '@/lib/ui';
import { useMediaQuery } from '@mui/material';

export default function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
}
