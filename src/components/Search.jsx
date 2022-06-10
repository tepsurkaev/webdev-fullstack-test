import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { MAIN_COLOR } from "../constants";
import { fetchSearching } from "../redux/features/postsSlice";

const StyledForm = styled.form`
  width: 50%;
  margin: 25px auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 375px) {
    width: 90%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid ${MAIN_COLOR};
  outline: 0;
`;

const StyledButton = styled.button`
  padding: 10px 25px;
  border-radius: 5px;
  background-color: ${MAIN_COLOR};
  border: 0;
  outline: 0;
  color: #fff;
  cursor: pointer;
`;

function Search() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchSearching(search));
  };

  return (
    <StyledForm onSubmit={(e) => onSubmit(e)}>
      <StyledInput
        onChange={(e) => handleSearch(e)}
        type="text"
        placeholder="Поиск..."
      />
      <StyledButton type="submit">Поиск</StyledButton>
    </StyledForm>
  );
}

export default Search;
