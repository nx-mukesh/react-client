import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, PrivateRoute } from './routes';
import { InputDemo, Login, TextFieldDemo, TraineeList, TraineeDetail, ChildrenDemo, NotMatch } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/trainee" component={TraineeList} />
        <PrivateRoute exact path="/trainee/:id" component={TraineeDetail} />
        <PrivateRoute exact path="/text-field-demo" component={TextFieldDemo} />
        <PrivateRoute exact path="/input-demo" component={InputDemo} />
        <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
        <PrivateRoute exact path="*" component={NotMatch} />
        <AuthRoute exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
