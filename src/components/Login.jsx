import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState('')

  const handleTextChange = (e) => {
    const newRegistration = { ...state };
    newRegistration[e.target.name] = e.target.value;
    setState(newRegistration);
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://capstone-discogs.onrender.com/auth/login", {
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        console.log(res.data.data);
        document.cookie = `loggedIn=true;max-age=60*1000`;
        localStorage.setItem("user", JSON.stringify(res.data.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("User/Password not found...");
      });
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.email}
            name="email"
            label="Enter your Email here"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Enter your Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="inherit"
          >
            Login
          </Button>
          {errorMsg ? <p>{errorMsg}</p> : null}
        </form>
      </Container>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Havent registered,{" "}
        <Link style={{ color: "blue" }} to="/signup">
          Signup Here
        </Link>
      </p>
    </div>
  );
};

export default Login;
