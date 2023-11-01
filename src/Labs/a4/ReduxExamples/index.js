import React from "react";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <CounterRedux />
      <HelloRedux />
    </div>
  );
};

export default ReduxExamples;