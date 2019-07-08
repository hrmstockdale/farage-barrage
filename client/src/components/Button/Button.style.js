import styled from "styled-components";

const Button = styled.button`
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	background: none;
	cursor: pointer;
	padding: 1rem 2rem;
	display: inline-block;
	margin: 15px 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
    transition: all 0.3s;
	background: rgb(234,85,105);
    color: #fff;
    box-shadow: 0 6px #ab3c3c;
    -webkit-transition: none;
    -moz-transition: none;
    transition: none;
    border-radius: 5px;
    &:hover {
        box-shadow: 0 4px #ab3c3c;
        top: 2px;
    }
}
`;

const Submit = styled(Button)`
	background: #397d9f;
    box-shadow: 0 6px #28546a;
    &:hover {
        box-shadow: 0 4px #28546a;
`;

const Button1 = styled.button`
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	background: none;
	cursor: pointer;
	padding: 1rem 2rem;
	display: inline-block;
	margin: 15px 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
    transition: all 0.3s;
    background: rgb(234,85,105);
    color: #fff;
    box-shadow: 0 6px #ab3c3c;
    -webkit-transition: none;
    -moz-transition: none;
    transition: none;
    border-radius: 5px;
    &:hover {
        box-shadow: 0 4px #ab3c3c;
        top: 2px;
    }
}
`;

export { Button, Submit, Button1 };
