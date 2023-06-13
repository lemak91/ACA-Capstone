import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";


const Signup = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const newRegistration = { ...state };
    newRegistration[e.target.name] = e.target.value;
    setState(newRegistration);
    // const { name, value } = e.target;
    // setState((prevState) => {
    //   return {
    //     ...prevState,
    //     [name]: value,
    //   };
    // });
  };

    // const signup = (e) => {
    //   e.preventDefault();
    //   document.cookie = `loggedIn=true;max-age=60*1000`;
    //   // set cookie here
    //   // set loggedIn = true and max-age = 60*1000 (one minute)

    //   navigate("/login");
    // };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("https://capstone-discogs.onrender.com/auth/signup", {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={signup}>
          <TextField
            required
            label="Enter First Name Here"
            value={state.firstName}
            onChange={handleTextChange}
            name="firstName"
            type="text"
          />

          <TextField
            required
            label="Enter Last Name Here"
            value={state.lastName}
            onChange={handleTextChange}
            name="lastName"
            type="text"
          />
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
            Sign Up!
          </Button>
        </form>
      </Container>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Already registered, <Link style={{color: "blue"}} to="/login">Login Here</Link>
      </p>
    </div>
  );
};

export default Signup;


