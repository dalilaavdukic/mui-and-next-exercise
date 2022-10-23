import { createTheme } from '@mui/material/styles';
import { teal, lime } from '@mui/material/colors';

// Create a theme instance.
const customTheme = createTheme(
  {
    palette: {
      primary: {
        main: teal[600],
        light: teal[400],
        dark: teal[900],
        contrastText: '#fff',
      },
      secondary: {
        main: lime[500],
        light: lime[200],
        dark: lime[800],
        contrastText: '#000',
      },
    }
  }
);

export default customTheme;