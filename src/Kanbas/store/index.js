import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Modules/modulesReducer";
import assignmentReducer from "../Assignments/assignmentReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentReducer
  }
});

export default store;