import React from 'react';
// import { InputDemo } from './pages';
import { Theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { ChildrenDemo } from './pages/ChildrenDemo';

const App = () => (
  <ThemeProvider theme={Theme}>
    <div className="app">
      {/* <TextFieldDemo /> */}
      {/* <InputDemo /> */}
      <ChildrenDemo />
    </div>
  </ThemeProvider>
);

export default App;
