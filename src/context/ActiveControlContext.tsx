import { Dispatch, SetStateAction, createContext } from "react";

export interface IActiveControlContext {
  activeControl: string;
  setActiveControl: Dispatch<SetStateAction<string>>;
}
  
const defaultState = {
  activeControl: 'location',
  setActiveControl: () => {}
};
  
export const ActiveControlContext = createContext<IActiveControlContext>(defaultState);