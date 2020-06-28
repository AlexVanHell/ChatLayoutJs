import { ChatLayoutIdentifierInterface } from '../common/chat-layout-identifier.interface';
import { ChatLayoutListInterface } from './list/chat-layout-list.interface';

export interface ChatLayoutGroupInterface
  extends ChatLayoutIdentifierInterface,
    ChatLayoutListInterface {
  /**
   * Name of the group
   */
  name: string;

  /**
   * Group iconƒ
   */
  icon?: string;
}
