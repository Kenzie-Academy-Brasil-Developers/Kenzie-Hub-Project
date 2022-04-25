import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const Routes = () => {
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Hub:token"));
    if (token) {
      setAuthentication(true);
    }
  }, [authentication]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          authentication={authentication}
          setAuthentication={setAuthentication}
        />
      </Route>
      <Route path="/register">
        <Register authentication={authentication} />
      </Route>
      <Route path="/home">
        <Home authentication={authentication} />
      </Route>
    </Switch>
  );
};
export default Routes;
