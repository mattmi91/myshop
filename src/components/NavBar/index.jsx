import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
  } from "@material-ui/core";


  import styled from 'styled-components';
  
  import { ShoppingCart } from "@material-ui/icons";
  import { Link, NavLink, useLocation } from "react-router-dom";
  
  import "./style.css";
  
  const NavBar = ({ basketItems, totalCost }) => {
    const location = useLocation();
  
    return (
      <>
        <AppBar position="fixed" className="custom-navbar"> 
          <Container>
            <Toolbar>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                className="custom-title"
                color="inherit"
                
              >
                
                <img
                  src="https://raw.githubusercontent.com/mattmi91/site/master/mylogo.png"
                  alt=""
                  height="25px"
                  className="logo"
                />
              </Typography>
              {location.pathname === "/basket" ? (
                <div className="basket-wrapper">
                  <h2>
                    Total cost: <strong>{totalCost}</strong>
                  </h2>
                </div>
              ) : (
                <div className="basket-wrapper">
                   <NavLink to='/' className="myLinks">
                    Home
                  </NavLink>
                  <NavLink to='/basket' className="myLinks">
                    Cart
                  </NavLink>
                  <NavLink to='/checkout' className="myLinks">
                    Checkout
                  </NavLink>
                          <IconButton
                    component={Link}
                    to="/basket"
                    aria-label="Show basket contents"
                    color="inherit"
                  >
                    <Badge badgeContent={basketItems} color="secondary">
                      <ShoppingCart className="custom-basket" />
                    </Badge>
                  </IconButton>
                </div>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </>
    );
  };
  
  export default NavBar;