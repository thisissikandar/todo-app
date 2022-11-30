import { createContext } from "react";
import data from "./data";

export const dataContext = createContext();

export const Provider = ({children})=>{
  return <dataContext.Provider value={data}>
      {
        children
      }
  </dataContext.Provider>
}
