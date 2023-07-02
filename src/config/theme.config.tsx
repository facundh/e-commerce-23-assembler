import { FC } from 'react';
import { ThemeProp } from '../types/types';
import { ThemeProvider, createTheme, CssBaseline} from '@mui/material';

enum themePalette{
    BG = '#0c0e0f',
    STEELBLUE = '#1974a2'
}
const theme = createTheme({
    palette:{
        mode:'dark',
        background:{
            default:themePalette.BG
        },

    }
})
export const ThemeConfig: FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}