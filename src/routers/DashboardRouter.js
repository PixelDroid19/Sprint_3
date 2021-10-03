import React, {useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Estudiantes } from "../components/Products/AddProducts";
import { ListarEstudiantes } from "../components/List/ListarEstudiantes";
import { useDispatch } from "react-redux";
import { listProducts } from "../actions/actionEstudent";
import Detalle from "../components/Detalles/Detalles";

export const DashboardRouter = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(listProducts());
  }, [])

  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListarEstudiantes} />
        <Route exact path="/AddProductos" component={Estudiantes} />
        <Route exact path="/detalle" component={Detalle} />
      </Switch>
    </div>
  );
};
