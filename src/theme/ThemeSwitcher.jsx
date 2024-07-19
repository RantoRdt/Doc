import { IconButton, Stack, Tooltip } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { useContext } from "react";
import { ThemeStateContext } from "./themeState";

const ThemeSwitcher = () =>{
    const { isDark, switchTheme } = useContext(ThemeStateContext)
    return <Stack style={{display: 'flex', position: 'fixed', right: '5%', bottom: '5%', gap: '10px', background: 'transparent', alignItems: 'flex-end', zIndex: 2}}>
        <Tooltip title={isDark ? "Passer au thème clair" : "Passer au thème sombre"} placement="left-end">
            <IconButton variant="floating" onClick={switchTheme}>{isDark ? <LightModeIcon/> : <DarkModeIcon/>}</IconButton>
        </Tooltip>

    </Stack>
}

export default ThemeSwitcher