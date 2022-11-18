import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Employees from './pages/Employees'
import Layout from './components/Layout'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: blueGrey[800],
        light: blueGrey[100],
      },
    },
  })

  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Employees />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
