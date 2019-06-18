import React from "react";
import { Button } from "../../Button/Button";
import Milkshake from "../Milkshake/Milkshake";

const Form = callback => {
  const [values, setValues] = React.useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <React.Fragment>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Farrage Barrage</h1>
        <Milkshake />
        <label>
          name:
          <br />
          <input
            name='name'
            type='text'
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Github username:
          <input
            name='githubUser'
            type='username'
            value={values.githubUser}
            onChange={handleChange}
          />
        </label>
        <Button link='/game'> PLAY</Button>
      </form>
    </React.Fragment>
  );
};

export default Form;
