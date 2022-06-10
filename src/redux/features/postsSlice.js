import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
  skip: 0,
  limit: 0,
  total: 0,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async (skip, thunkAPI) => {
    try {
      const response = await axios(`/posts?skip=${skip}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchSearching = createAsyncThunk(
  "posts/fetch/search",
  async (query, thunkAPI) => {
    try {
      const response = await axios(`/posts/search?q=${query}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios(`/posts/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSkip(state, action) {
      state.skip = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
      state.posts = [];
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.limit = action.payload.limit;
      state.total = action.payload.total;
    },

    [fetchSearching.pending]: (state) => {
      state.loading = true;
      state.posts = [];
    },
    [fetchSearching.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.limit = action.payload.limit;
      state.total = action.payload.total;
    },

    [fetchPostById.pending]: (state) => {
      state.loading = true;
    },
    [fetchPostById.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
  },
});

export const { setSkip } = postsSlice.actions;

export default postsSlice.reducer;
