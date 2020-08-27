import { createStore, applyMiddleware } from "redux";
import { notesReducer } from "./noteReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const middleware = [thunk];

export const store = createStore(
  notesReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
