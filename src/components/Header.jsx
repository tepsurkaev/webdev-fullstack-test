import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { MAIN_COLOR } from "../constants";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${MAIN_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-around;

  > h2 {
    color: #fff;
  }
`;

const SryledLeftOutlined = styled(LeftOutlined)`
  color: #fff;
  font-size: 28px;
`;

const StyledLink = styled(Link)`
  color: #fff;
`;

function Header() {
  const navigate = useNavigate();

  const backOnPrevPage = () => {
    navigate(-1);
  };

  return (
    <StyledHeader>
      <SryledLeftOutlined onClick={backOnPrevPage} />
      <StyledLink to="/">
        <h2>Logo</h2>
      </StyledLink>
    </StyledHeader>
  );
}

export default Header;
