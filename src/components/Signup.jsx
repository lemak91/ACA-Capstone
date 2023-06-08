import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
// import axios from "axios";


const Signup = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

    const signup = (e) => {
      e.preventDefault();
      document.cookie = `loggedIn=true;max-age=60*1000`;
      // set cookie here
      // set loggedIn = true and max-age = 60*1000 (one minute)

      navigate("/login");
    };

  // const signup = (e) => {
  //   e.preventDefault();
  //   axios.post("http://localhost:4000", {
  //     name: state.name,
  //     username: state.username,
  //     password: state.password
  //   }).then(res => {
  //     console.log(res)
  //     navigate("/login");
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={signup}>
          <TextField
            required
            label="Enter your full name here"
            value={state.name}
            onChange={handleTextChange}
            name="name"
            type="text"
          />
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
            Sign Up!
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Signup;


