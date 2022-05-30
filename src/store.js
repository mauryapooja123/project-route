import { configureStore, createReducer } from "@reduxjs/toolkit";
import { createStore } from "redux-form";

import Submit from "./components/Reducer/Submit";
//import { reduxForm } from "redux-form";

export const store = configureStore({
  reducer: {
    register: Submit,
  },
});
// import { createStore, createReducer } from "@reduxjs/toolkit";
// import { reducer as reduxFormReducer } from "redux-form";
// import { reducers } from "../RootReducers/rootReducer";

// const store = (
//   window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore
// )(reducers);

// export default store;
