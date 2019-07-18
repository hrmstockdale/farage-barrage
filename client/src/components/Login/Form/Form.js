import React from "react";
import Highscores from "../../Highscores/Highscores";
import { Button } from "../../Button/Button";
import Milkshake from "../Milkshake/Milkshake";
import { getUserData } from "../../../utils/data_helpers";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as S from "./Form.style";

const Form = props => {
  const [values, setValues] = React.useState({
    name: "",
    githubUser: ""
  });

  let gitHubToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

  const handleSubmit = event => {
    event.preventDefault();
    props.passDownName(values.name);
    props.passDownGithub(values.githubUser);
    getUserData(values.githubUser, gitHubToken).then(
      ({ errorResponse, avatar_url }) => {
        errorResponse ? props.error(errorResponse) : props.img(avatar_url);
        if (!errorResponse) {
          Swal.fire(
            "Success!",
            `Synced with your Github & <br>ready to barrage!`,
            "success"
          );
        } else {
          Swal.fire(
            "Failure!",
            "Github username required <br> Please check your username is valid",
            "error"
          ).then(() => window.location.reload());
        }
      }
    );
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
      <S.Loginform className='form' onSubmit={handleSubmit}>
        <h1>Farrage Barrage</h1>
        <Highscores />
        <Milkshake />
        <S.InstructionsContainer>
          <S.Instructions>
            <b>SYNC</b> to Github
          </S.Instructions>
          <S.Instructions>
            When you are ready, click <b>PLAY</b>
          </S.Instructions>
          <S.Instructions>
            Barrage Farage, <u>not yourself</u>
          </S.Instructions>
        </S.InstructionsContainer>
        <S.LoginFormLabel>
          Name:&nbsp;&nbsp;
          <S.LogiformInput
            placeholder='name'
            name='name'
            type='text'
            value={values.name}
            onChange={handleChange}
          />
        </S.LoginFormLabel>
        <S.LoginFormLabel>
          Github:
          <S.LogiformInput
            placeholder=' Github username'
            name='githubUser'
            type='text'
            value={values.githubUser}
            onChange={handleChange}
          />
        </S.LoginFormLabel>
        <Button form='form' type='submit'>
          SYNC
        </Button>

        <Link to='/game'>
          <Button form='form'>play</Button>
        </Link>
      </S.Loginform>
    </React.Fragment>
  );
};

export default Form;
