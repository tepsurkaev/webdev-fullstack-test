import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";
import Post from "./Post";
import CircleLoading from "../../components/Preloaders/CircleLoading";
import PostsPagination from "../../components/Pagination/PostsPagination";

const StyledPostsList = styled.div`
  width: 90%;
  padding: 10px;
  margin: 0 auto;
`;

function AllPosts() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.post.loading);

  const posts = useSelector((state) => state.post.posts);

  const skip = useSelector((state) => state.post.skip);

  useEffect(() => {
    dispatch(fetchPosts(skip));
  }, [dispatch, skip]);

  if (loading) {
    return <CircleLoading />;
  }

  return (
    <>
      <StyledPostsList>
        {posts.map((post) => (
          <Post key={post.id} posts={post} />
        ))}
      </StyledPostsList>
      <PostsPagination />
    </>
  );
}

export default AllPosts;
