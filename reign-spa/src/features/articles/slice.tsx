import Axios from "axios";
import moment from "moment";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticles } from "../../interfaces/articles";
const name = "articles";

export const fetchArticles = createAsyncThunk(
  `${name}/fetchArticles`,
  async () => {
    const { data } = await Axios.get("http://localhost:5000/getArticles");

    return data.sort((a: any, b: any) =>
      moment.utc(b.created_at).diff(moment.utc(a.created_at))
    );
  }
);

export const fetchArticlesNow = createAsyncThunk(
  `${name}/fetchArticlesNow`,
  async () => {
    await Axios.get("http://localhost:5000/getArticlesNow");
    return;
  }
);

export const deleteArticle = createAsyncThunk(
  `${name}/deleteArticle`,
  async (id: string) => {
    const { statusText } = await Axios.put(
      `http://localhost:5000/deleteArticle/${id}`
    );

    return statusText;
  }
);

type State = { articles: IArticles[] | null };

export const initialState: State = {
  articles: null,
};

const articles = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
  },
});

export const { reducer: articlesReducer } = articles;
