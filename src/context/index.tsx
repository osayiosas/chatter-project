"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";

type ConttextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
};

export const GlobalContext = createContext<ConttextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ loading, setLoading }}
    >{children}</GlobalContext.Provider>
  );
}
