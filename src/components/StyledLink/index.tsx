import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;

  text-decoration-line: underline;
  color: #067EFC;
  text-decoration-color: rgba(105, 139, 208, 0.8);
  
  :hover {
    cursor: pointer;
    text-decoration-color: #067EFC;
  }
`;

export default StyledLink;