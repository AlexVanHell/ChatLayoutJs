import { createContext } from 'react';
import { ChatLayout } from '../../core/chat-layout';

export const LayoutHandlerContext = createContext<ChatLayout>(null);
