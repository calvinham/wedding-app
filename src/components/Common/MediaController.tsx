import useIsMobile from '@/hooks/ui/useIsMobile';
import { exists } from '@/lib/util';
import React from 'react';

export type IMediaController = {
  sm?: JSX.Element | null;
  lg?: JSX.Element | null;
};

const MediaController: React.FC<IMediaController> = ({ sm, lg }) => {
  const isMobile = useIsMobile();

  if (isMobile && exists(sm)) {
    return sm;
  } else if (!isMobile && exists(lg)) {
    return lg;
  }

  return null;
};

export default MediaController;
