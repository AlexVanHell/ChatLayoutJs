import { createContext } from 'react';
import { ThemeInterface } from '../common/theme/theme.interface';

export const ThemeContext = createContext<ThemeInterface>({});
