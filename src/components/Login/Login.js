import React from "react";
import Form from "./Form/Form";

const Login = props => {
  console.log(props.error);
  return (
    <React.Fragment>
      <div className='App1'>
        <Form error={props.error} img={props.img} />
      </div>
    </React.Fragment>
  );
};

export default Login;
