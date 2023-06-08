import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState('')

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        console.log(res);
        document.cookie = `loggedIn=true;max-age=60*1000`;
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg('User/Password not found...')
      });
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
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
    </div>
  );
};

export default Login;
