import React from "react";
import Form from "./Form/Form";

const Login = props => {
  const passDownError = props.error;
  const passDownImg = props.img;
  return (
    <React.Fragment>
      <div className='App1'>
        <Form error={passDownError} img={passDownImg} />
      </div>
    </React.Fragment>
  );
};

export default Login;
