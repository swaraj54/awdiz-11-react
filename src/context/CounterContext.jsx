import React, { createContext, useReducer } from "react";

export const CounterContext = createContext();

const CounterContextComponent = ({ children }) => {
  // children = <App />
  function reducer(state, action) {
    // its returns updated state
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  const initialState = { count: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
      {/* <App /> */}
    </CounterContext.Provider>
  );
};

export default CounterContextComponent;
