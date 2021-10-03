import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  CardActionArea,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { deleteProducts, setData} from "../../actions/actionEstudent";
import { Link } from "react-router-dom";

export const ListarEstudiantes = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.estudiante);
  console.log('MyData', products)

  
  const [showApi, setShowApi] = useState(false);

  useEffect(() => {
    products !== [] ? setShowApi(true) : setShowApi(false);
  }, [products]);

  const showProducts = products.map((element, index) => (
    <Card
      id={index}
      key={index}
      sx={{
        maxWidth: 250,
        minWidth: 250,
        padding: 1,
        maxHeight: 400,
        minHeight: 300,
        margin: 2,
      }}
    >
      <CardActionArea>
      <button className="buttonCustom" onClick={()=> dispatch(deleteProducts(element.nombre))}>X</button>
        <CardMedia
          component="img"
          height="250"
          image={element.img}
          alt="green"
        />
        <CardContent>
          
          <Typography gutterBottom variant="p" fontSize = "14px"component="div" >
          <Link
                      className="setData"
                      to="/detalle"
                      onClick={() => dispatch(setData(element))}>
                      <strong> {element.nombre}</strong>
                    </Link>
          </Typography>

          <Typography variant="body2" fontSize = "18px"  color="brown">
              $ {element.Precio}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {showApi === true && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          {showProducts}{" "}
        </Box>
      )}
    </Box>
  );
};
