import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { loginEmailAndPasworld } from "../actions/actionLogin";
import Navbar from "../components/Navbar/Navbar";
import Detalle from "../components/Detalles/Detalles";

export default function AppRouter() {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(loginEmailAndPasworld(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <PrivateRoute component={Navbar} isAuthenticated={isLoggedIn} />
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={isLoggedIn}
          />
          <PublicRoute
            exact
            path="/registro"
            component={Registro}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/"
            component={DashboardRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/AddProductos"
            component={DashboardRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            path="/detalle"
            isAuthenticated={isLoggedIn}
            component={DashboardRouter}
          />

          <PrivateRoute
            exact
            path="/editar"
            isAuthenticated={isLoggedIn}
            component={DashboardRouter}
          />
        </Switch>
      </div>
    </Router>
  );
}
