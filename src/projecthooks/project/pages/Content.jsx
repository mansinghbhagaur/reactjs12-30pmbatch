import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
// import { ThemeContext } from '../store/Context'
import { useThemeContext } from '../store/Context'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Content = () => {
      // const { mode, toggleMode } = useContext(ThemeContext);

      // custom hook
      const { mode, toggleMode } = useThemeContext();

      return (
            <Box
                  sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100vh',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3,
                        minHeight: '56px',
                  }}
            >
                  <Typography variant='h1' color='primary'>Content show Light And Dark Theme</Typography>
                  <Typography variant='h1' color='secondary'>Content show Light And Dark Theme</Typography>
                  <button onClick={toggleMode}>{
                        mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />
                  }</button>
            </Box>
      )
}

export default Content
