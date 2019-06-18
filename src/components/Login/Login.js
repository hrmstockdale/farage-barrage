import React from "react";
import Form from "./Form/Form";

const Login = props => {
  const [name, setName] = React.useState("");
  const [gitUser, setGitUser] = React.useState("");
  return (
    <React.Fragment>
      <div className='App1'>
        <Form />
      </div>
    </React.Fragment>
  );
};

export default Login;
