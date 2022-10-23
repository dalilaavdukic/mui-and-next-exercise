import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type CustomThemeContextType = {
  isCustomSelected: boolean,
  onThemeChange: Dispatch<SetStateAction<boolean>>
}


export const CustomThemeContext = React.createContext<CustomThemeContextType | null>(null);