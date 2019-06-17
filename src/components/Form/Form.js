import React from "react";

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
        <label>
          name:
          <input
            name='name'
            type='text'
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Github username:
          <input
            name='githubUser'
            type='email'
            value={values.githubUser}
            onChange={handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </React.Fragment>
  );
};

export default Form;
