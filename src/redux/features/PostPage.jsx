import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "./postsSlice";
import CircleLoading from "../../components/Preloaders/CircleLoading";
import { MAIN_COLOR } from "../../constants";

const StyledPostBlock = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const StyledPostTitle = styled.div`
  border: 1px solid ${MAIN_COLOR};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;

  > h2 {
    font-weight: 500;
    text-align: center;
  }
`;

const StyledPostBody = styled.div`
  border: 1px solid ${MAIN_COLOR};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;

  > p {
    text-align: justify;
  }
`;

function PostPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const loading = useSelector((state) => state.post.loading);

  const post = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  if (loading) {
    return <CircleLoading />;
  }

  return (
    <StyledPostBlock>
      <StyledPostTitle>
        <h2>{post?.title}</h2>
      </StyledPostTitle>
      <StyledPostBody>
        <p>{post?.body}</p>
      </StyledPostBody>
    </StyledPostBlock>
  );
}

export default PostPage;
