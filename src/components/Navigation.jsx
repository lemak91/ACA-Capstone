import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../images/discogsfinal.svg';


const Navigation = () => {
  const navigate = useNavigate();


const appBarStyle = {
  minWidth: "100%",
  minHeight: "100%",
  automaticallyImplyLeading: false,
  titleSpacing: 0,
};



  return (
    <AppBar
      position="static"
      color="default"
      style={appBarStyle}
      sx={{
        titleSpacing: 0,
        boxShadow: 0,
      }}
    >
      <Toolbar>
        <Box
          component="img"
          sx={{
            objectFit: "cover",
            minWidth: "100%",
            height: 200,
          }}
          alt="Your logo."
          src={Logo}
          loading="lazy"
        />
      </Toolbar>
      <Toolbar>
        <ul className="nav-list">
          <li
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
            className="nav-list-item"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              localStorage.removeItem('user');
              navigate("/login");
            }}
          >
            Logout
          </li>
          <li
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
            className="nav-list-item"
          >
            <Link to="/collection">Collection</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;





