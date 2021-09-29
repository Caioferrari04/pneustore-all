import { createTheme, colors } from '@mui/material';

const theme = createTheme({
    pallete: {
        background:{
            default: colors.common.white,
            paper: colors.common.white,
        },
        primary:{
            main: '#1f1d1d',
        },
        secondary:{
            main: 'red'
        },
        text: {
            primary: colors.blueGrey[900],
            secundary: colors.blueGrey[600],

        },

    },


});

export default theme;