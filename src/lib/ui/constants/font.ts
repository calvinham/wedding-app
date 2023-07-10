// Font Size

export type FontSizeType = 'xs' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';

export const FontSizes: Record<FontSizeType, string> = {
  xs: '0.75rem', // 12px,
  base: '1rem', // 16px
  md: '1.25rem', // 20px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  xxl: '3rem', // 48px
};

// Font Weight
export type FontWeightType = 'bold' | 'semi-bold' | 'base';

export const FontWeights: Record<FontWeightType, number> = {
  bold: 700,
  'semi-bold': 550,
  base: 400,
};

export const FONT_CONFIG = {
  spacing: 8,
  fontFamily: 'Helvetica',
  fontSize: 16,
  htmlFontSize: 16,
} as const;
