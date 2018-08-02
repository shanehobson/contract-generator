import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, purple} from '@material-ui/core/colors';

const customMuiTheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: grey
    },
    spacing: {
        unit: 10
    },
    typography: {
        htmlFontSize: 10,
    }
});

export default customMuiTheme;