import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
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
import { SnackBarProvider } from './context'

const App = () => {
  return (
    <BrowserRouter>
      <SnackBarProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Trainee} />
        <PrivateRoute exact path="/trainee" component={TraineeList} />
        <PrivateRoute exact path="/trainee/:id" component={TraineeDetail} />
        <PrivateRoute exact path="/text-field-demo" component={TextFieldDemo} />
        <PrivateRoute exact path="/input-demo" component={InputDemo} />
        <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
        <PrivateRoute exact path="*" component={NotMatch} />
        <AuthRoute exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
      </SnackBarProvider>
    </BrowserRouter>
  );
};

export default App;
