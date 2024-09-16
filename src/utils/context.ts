import { createContext } from "react";

interface SWContextType {
    page: string;
    changePage: (newPage: string) => void;
  }
  
  export const SWContext = createContext<SWContextType>({} as SWContextType);