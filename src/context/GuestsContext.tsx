import { Dispatch, SetStateAction, createContext } from "react";

export interface IGuestsContext {
  adultGuests: number;
  childGuests: number;
  setAdultGuests: Dispatch<SetStateAction<number>>;
  setChildGuests: Dispatch<SetStateAction<number>>;
}
  
const defaultState = {
  adultGuests: 0,
  childGuests: 0,
  setAdultGuests: () => {},
  setChildGuests: () => {}
};
  
export const GuestsContext = createContext<IGuestsContext>(defaultState);