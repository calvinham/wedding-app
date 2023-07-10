import { ThemeOptions, createTheme, responsiveFontSizes } from '@mui/material';

import {
  AppPalette,
  MOBILE_MAX_WIDTH,
  FONT_CONFIG,
  FontWeights,
  FontSizes,
} from './constants';

const { spacing, fontFamily, fontSize, htmlFontSize } = FONT_CONFIG;

const muiThemeOptions: ThemeOptions = {
  spacing: spacing,
  breakpoints: {
    values: {
      xs: 0,
      sm: MOBILE_MAX_WIDTH,
      md: 800,
      lg: 853,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: AppPalette.black,
      contrastText: AppPalette.white,
    },
    text: {
      primary: AppPalette.black,
      secondary: AppPalette.black,
    },
  },
  typography: {
    fontFamily: fontFamily,
    fontSize: fontSize,
    htmlFontSize: htmlFontSize,
    h1: {
      fontSize: FontSizes.xxl,
      fontWeight: FontWeights.bold,
    },
    h2: {
      fontSize: FontSizes.xl,
      fontWeight: FontWeights.bold,
    },
    h3: {
      fontSize: FontSizes.lg,
      fontWeight: FontWeights.bold,
    },
    h4: {
      fontSize: FontSizes.md,
      fontWeight: FontWeights.bold,
    },
    subtitle1: {
      fontSize: FontSizes.md,
      fontWeight: FontWeights.bold,
    },
    body1: {
      fontSize: FontSizes.base,
      fontWeight: FontWeights.base,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: 'text.Primary',
        variant: 'body1',
      },
    },
  },
};

const makeTheme = () => createTheme({ ...muiThemeOptions });

const muiTheme = responsiveFontSizes(makeTheme());

export default muiTheme;
