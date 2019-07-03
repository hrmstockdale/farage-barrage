import React from "react";
import { Button } from "../../Button/Button";
import Milkshake from "../Milkshake/Milkshake";
import { getUserData } from "../../../utils/data_helpers";

const Form = props => {
  const [values, setValues] = React.useState({});

  let gitHubToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

  const handleSubmit = event => {
    event.preventDefault();
    getUserData(values.githubUser, gitHubToken).then(
      ({ errorResponse, avatar_url }) =>
        errorResponse ? props.error(errorResponse) : props.img(avatar_url)
    );
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  console.log(values);
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
            type='text'
            value={values.githubUser}
            onChange={handleChange}
          />
        </label>
        <Button link='/game' form='form' type='submit'>
          PLAY
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Form;
