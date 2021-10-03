import * as React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  ToolbarCustomPrimary,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../style/style.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Logo } from "../../assets/export.js";
import { Link } from "react-router-dom";

export default function NavbarPrimary() {
  const [datos, setDatos] = React.useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolbarCustomPrimary variant="dense">
          <img src={Logo} alt="..." style={{ width: "94px" }} />
          <Typography
            variant="span"
            Wrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, paddingLeft: 4 }}
          >
            <div>Hi</div>
            <div>
              <b>Choose your address</b>
            </div>
          </Typography>
          <Search>
          <SearchIconWrapper>
            <Button
              variant="button"
              endIcon={<SearchIcon />}>
              Send
            </Button>
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleInputChange}
            />
          </Search>
          <Typography
            variant="span"
            Wrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, paddingLeft: 2 }}
          >
            <div>Hello, identify yourself</div>
            <div>
              <b>Account and list</b>
            </div>
          </Typography>
          <Typography
            variant="span"
            Wrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, paddingLeft: 2 }}
          >
            <div>
              <Link to="/" className="Link">
                Returns
              </Link>
            </div>
            <div>
              <Link to="/AddProductos" className="Link">
                Products Add
              </Link>
            </div>
          </Typography>
          <Typography
            variant="span"
            Wrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, paddingLeft: 3 }}
          >
            <ShoppingCartIcon />
            <b>Trolley</b>
          </Typography>
        </ToolbarCustomPrimary>
      </AppBar>
    </Box>
  );
}
