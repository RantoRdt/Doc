import React from 'react';
import { ThemeStateProvider } from './theme/themeState';
import Nav from './components/Nav/Main';
import Content from './components/Content/Main';
import './App.css';
import { Stack } from '@mui/material';
import { PageStateProvider } from './pageState';
import ThemeSwitcher from './theme/ThemeSwitcher';

function App() {
  return (
    <ThemeStateProvider>
      <PageStateProvider>
        <Stack flexDirection='row'>
          <Stack variant="all-h"><Nav/></Stack>
          <Stack variant="all"><Content/></Stack>
        </Stack>
        <ThemeSwitcher/>
      </PageStateProvider>
    </ThemeStateProvider>
  )
}

export default App
