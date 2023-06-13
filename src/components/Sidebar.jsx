import React from "react";
import { Box } from "@mui/material";
import Logo from "../images/userplaceholder.png";

function Sidebar() {

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        // minWidth: "10%",
        minHeight: "100%",
        backgroundColor: "#D1D0D0",
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 100,
      }}
      sx={{ boxShadow: 3 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img style={{ flex: "1 1 0", flexBasis: 100 }} src={Logo}></img>
        <div
          style={{
            fontSize: 24,
            fontWeight: "bold",
            flex: "1 1 0",
            flexBasis: 100,
          }}
        >
          <span>
            {user?.FirstName} {user?.LastName}
          </span>
        </div>
      </Box>
    </Box>
  );
}

export default Sidebar;
