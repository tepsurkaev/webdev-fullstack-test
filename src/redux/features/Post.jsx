import styled from "styled-components";
import { Link } from "react-router-dom";
import { MAIN_COLOR } from "../../constants";

const StyledPost = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  border: 1px solid ${MAIN_COLOR};
  margin: 15px 0;
  border-radius: 5px;

  &:hover {
    background-color: ${MAIN_COLOR};
    > a {
      color: #fff;
    }
  }
`;

function Post({ posts }) {
  return (
    <StyledPost>
      <Link to={`post/${posts.id}`}>
        <p>{posts.title}</p>
      </Link>
    </StyledPost>
  );
}

export default Post;
