import React from 'react';
import { AuthRoute, PrivateRoute } from './routes';
import { InputDemo, Login, TextFieldDemo, Trainee, ChildrenDemo, NotMatch } from './pages';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Trainee} />
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
