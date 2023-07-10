import { device } from './constants';
import { SxStyles } from './types';

export const responsiveSx = ({
  sm,
  lg,
}: {
  sm?: SxStyles;
  lg?: SxStyles;
}): SxStyles => {
  return {
    [device.sm]: sm,
    [device.lg]: lg,
  };
};
