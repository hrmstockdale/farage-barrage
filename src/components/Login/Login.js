import React from "react";
import Form from "../Form/Form";

const Login = props => {
  const [name, setName] = React.useState("");
  const [gitUser, setGitUser] = React.useState("");
  return (
    <React.Fragment>
      <h1>Farrage Barrage</h1>
      <Form />
    </React.Fragment>
  );
};

export default Login;
