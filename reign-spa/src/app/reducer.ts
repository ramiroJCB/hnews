import { AppDispatch, RootState } from "./store";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { articlesReducer } from "../features/articles/slice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const reducer = {
  articles: articlesReducer,
};
