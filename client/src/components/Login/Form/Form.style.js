import styled from "styled-components";

const Instructions = styled.p`
  margin: 2px;
  padding: 1%;
  color: rgb(234, 85, 105);
`;

const Loginform = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  text-align: center;
  width: 320px;
  height: 90vh;
  padding: 1em;
  background-color: #ffe4c3;
  border: 1px solid rgb(234, 85, 105);
  border-width: 10px 6px 6px 10px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23397d9f' fill-opacity='0.09' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const LogiformInput = styled.input`
  border: 1px inset rgb(132, 222, 234);
  border-width: 3px 1px 1px 3px;
  border-radius: 5%;
  padding: 0.25em;
  margin: 10px;
`;

const LoginFormLabel = styled.label`
  display: inline-block;
  text-align: inherit;
`;

const InstructionsContainer = styled.section`
  border-top: 1px solid #ab3c3c;
  border-bottom: 1px solid #ab3c3c;
  margin: 15px;
  padding: 15px;
`;

export {
  Instructions,
  Loginform,
  LogiformInput,
  LoginFormLabel,
  InstructionsContainer
};
