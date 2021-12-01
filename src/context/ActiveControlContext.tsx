import React, { Dispatch, SetStateAction } from "react";

interface IActiveControlContext {
    activeControl: string;
    setActiveControl?: Dispatch<SetStateAction<string>>;
  }
  
  const defaultState = {
    activeControl: 'location'
  };
  
  
export const ActiveControlContext = React.createContext<IActiveControlContext>(defaultState);