import { Dispatch, SetStateAction } from "react";
import { TABS } from "../consts/tabs";

export type TTab = (typeof TABS)[number];

export interface TabsContextType {
  tab?: TTab;
  setTab?: Dispatch<SetStateAction<TTab>>;
}
