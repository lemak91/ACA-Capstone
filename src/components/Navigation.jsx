import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../images/discogsf.svg';


const Navigation = () => {
  const navigate = useNavigate();

const toolbarStyle = {
  minHeight: "100px",
  minWidth: "100px",
  margin: "none"
};

const appBarStyle = {
  height: 170,
  minWidth: "100px",
  minHeight: 100,
  margin: "none",
  // backgroundColor: "#c8c7ca",
  padding: "none"
};



  return (
    <AppBar
      position="relative"
      color="default"
      style={appBarStyle}
      sx={{ titleSpacing: 0 }}
    >
      <Toolbar style={toolbarStyle}>
        <Box
          component="img"
          sx={{
            objectFit: 'fill',
            height: 150,
            width: 10000,
            minWidth: 100,
            maxWidth: 10000,
          }}
          alt="Your logo."
          src={Logo}
        />
      </Toolbar>
      <Toolbar>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            Logout
          </li>
          <li className="nav-list-item">Collection</li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;





