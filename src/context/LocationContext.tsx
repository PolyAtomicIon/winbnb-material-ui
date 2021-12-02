import { Dispatch, SetStateAction, createContext } from "react";

export interface ILocationContext {
  location: string ;
  setLocation: Dispatch<SetStateAction<string>>;
}
  
const defaultState = {
  location: '',
  setLocation: () => {}
};
  
export const LocationContext = createContext<ILocationContext>(defaultState);