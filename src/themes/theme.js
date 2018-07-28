import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, purple} from '@material-ui/core/colors';

const customMuiTheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: grey
    }
});

export default customMuiTheme;