import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./PostsPagination.module.css";
import { setSkip } from "../../redux/features/postsSlice";

const StyledPagination = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto 20px auto;
`;

function PostsPagination() {
  const dispatch = useDispatch();

  const total = useSelector((state) => state.post.total);

  const limit = useSelector((state) => state.post.limit);

  const skip = useSelector((state) => state.post.skip);

  const paginationCount = total / limit;

  const ifNaN = isNaN(paginationCount) ? 0 : paginationCount;

  let pagination;

  if (total && limit) {
    pagination = new Array(Math.floor(ifNaN)).fill(null);
  }

  return (
    <StyledPagination>
      {pagination?.map((_, i) => (
        <div
          key={i}
          onClick={() => dispatch(setSkip(i + 1))}
          className={skip === i + 1 ? `${styles.currenPage}` : `${styles.page}`}
        >
          {i + 1}
        </div>
      ))}
    </StyledPagination>
  );
}

export default PostsPagination;
