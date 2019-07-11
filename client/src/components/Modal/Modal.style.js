import styled from "styled-components";

const Modal = styled.section`
  width: 300px;
  padding: 30px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 25%;
  background-color: white;
  margin: auto;
  border: 1px solid;
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
`;

const ModalAction = styled.section`
  width: 300px;
  padding: 30px;
  position: fixed;
  left: 0;
  right: 0;
  top: 5.6em;
  background-color: white;
  margin: auto;
  border: 1px solid;
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
`;

export { Modal, ModalAction };
