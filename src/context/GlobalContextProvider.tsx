import React, { createContext, ReactNode, useMemo, useState } from 'react';
import Strings from '../resources/Strings';

type TGlobalContext = {
  strings: typeof Strings.EN;
};

interface IGlobalContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext<TGlobalContext>(
  {} as TGlobalContext,
);

const GlobalContextProvider = ({ children }: IGlobalContextProps) => {
  const [strings] = useState(Strings.getInstance());

  const globalContext: TGlobalContext = useMemo(() => ({ strings }), [strings]);

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
