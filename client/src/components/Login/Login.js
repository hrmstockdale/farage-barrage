import React from "react";
import Form from "./Form/Form";

const Login = props => {
  const passDownError = props.error;
  const passDownImg = props.img;
  const passDownName = props.nameApp;
  const passDownGithub = props.githubApp;

  console.log("passdown", passDownName);
  return (
    <React.Fragment>
      <div className='App1'>
        <Form
          error={passDownError}
          img={passDownImg}
          passDownName={passDownName}
          passDownGithub={passDownGithub}
        />
      </div>
    </React.Fragment>
  );
};

export default Login;
