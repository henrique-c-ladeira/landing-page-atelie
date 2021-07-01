import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import './index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e6a727',
    },
    text: 'white',
  },
  typography: {
    fontFamily: ['Lato'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
