import styled from "styled-components";

import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <ImgElement 
      src={logo} 
      alt="repoprovas logo"
    />
  );
}

const ImgElement = styled.img`
  height: 63.5px;
  width: 292px;
  
  display: block;
  justify-self: flex-start;
`;