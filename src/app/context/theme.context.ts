import { createContext } from 'react';
import { ThemeAbstractFactoryInterface } from '../themes/theme.abstract-factory.interface';

export const ThemeContext = createContext<ThemeAbstractFactoryInterface>(null);
