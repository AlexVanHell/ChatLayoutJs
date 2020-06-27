import { ChatLayoutListHandlerInterface } from '../action/chat-layout-list-handler.interface';
import { ChatLayoutGroupInterface } from './chat-layout-group.interface';

export interface ChatLayoutInterface
  extends ChatLayoutListHandlerInterface<ChatLayoutGroupInterface> {
  groups: ChatLayoutGroupInterface[];

  /**
   * Add new group at specific positon
   * @param group Group to add
   * @param index ndex position to insert group.
   * Ignore this paramenter to add at the end
   * @returns The length of the `groups`
   */
  add(group: ChatLayoutGroupInterface, index?: number): number;

  /**
   * Remove group at specific position
   * @param index Index position to remove the message
   */
  removeAt(index: number): void;

  /**
   * Remove group by id
   * @param index Index position to remove the group
   */
  removeById(id: string): void;

  /**
   * Remove group by name
   * @param index Index position to remove the group
   */
  removeByName(id: string): void;
}
