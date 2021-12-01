import React, { Dispatch, SetStateAction } from "react";

export interface IActiveControlContext {
  activeControl: string;
  setActiveControl: Dispatch<SetStateAction<string>>;
}
  
const defaultState = {
  activeControl: 'location',
  setActiveControl: () => {}
};
  
export const ActiveControlContext = React.createContext<IActiveControlContext>(defaultState);