import { createTheme } from '@mui/material/styles';

import { colors } from './colors';

import { themePalette } from './palette';
import { themeTypography } from './typography';
import { componentStyleOverrides } from './compStyleOverride';

const theme = () => {
  let themeOption = {
    colors: colors,
    heading: colors.grey900,
    paper: colors.paper,
    backgroundDefault: colors.paper,
    background: colors.primaryLight,
    darkTextPrimary: colors.grey700,
    darkTextSecondary: colors.grey500,
    textDark: colors.grey900,
    menuSelected: colors.secondaryDark,
    menuSelectedBack: colors.secondaryLight,
    divider: colors.grey200,
  };

  return createTheme({
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: themeTypography(themeOption),
    components: componentStyleOverrides(themeOption),
  });
};

// import 'overrides-mui'

export default theme;
