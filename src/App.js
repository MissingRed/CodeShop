import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import { AuthProvider } from "../src/Database/Auth";
import PrivateRoute from "../src/Components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Home" component={Home} />
          <PrivateRoute exact path="/Admin" component={Admin} />
          {/* <PrivateRoute exact path="/login" component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
