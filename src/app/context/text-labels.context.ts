import { createContext } from 'react';
import { JSONValue } from '../../types/json.type';

export const TextLabelsContext = createContext<JSONValue>({ hello: 'world' });
