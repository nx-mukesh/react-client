import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { AuthRoute, PrivateRoute } from './routes';
import {
  InputDemo,
  Login,
  TextFieldDemo,
  TraineeList,
  Trainee,
  TraineeDetail,
  ChildrenDemo,
  NotMatch,
} from './pages';
import { Theme } from './theme';
import { SnackBarProvider } from './context';

const App = () => {
  return (
    <BrowserRouter>
      <SnackBarProvider>
        <ThemeProvider theme={Theme}>
          <Switch>
            <AuthRoute exact path="/" component={Login} />
            <AuthRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/trainee" component={TraineeList} />
            <PrivateRoute exact path="/trainee/:id" component={TraineeDetail} />
            <PrivateRoute exact path="/text-field-demo" component={TextFieldDemo} />
            <PrivateRoute exact path="/input-demo" component={InputDemo} />
            <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
            <PrivateRoute exact path="*" component={NotMatch} />
            <Redirect to="/login" />
          </Switch>
        </ThemeProvider>
      </SnackBarProvider>
    </BrowserRouter>
  );
};

export default App;
