import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
export default Routes;