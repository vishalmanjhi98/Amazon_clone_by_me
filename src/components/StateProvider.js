import { useContext, createContext } from "react";
import { useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={{ myReducer: useReducer(reducer, initialState), initialState}}>
    { children }
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);