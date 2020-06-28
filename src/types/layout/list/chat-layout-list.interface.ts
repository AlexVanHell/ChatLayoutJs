import { ChatLayoutListHandlerInterface } from '../../action/chat-layout-list-handler.interface';
import { ChatLayoutIdentifierInterface } from '../../common/chat-layout-identifier.interface';
import { ChatLayoutListItemInterface } from './chat-layout-list-item.interface';

export interface ChatLayoutListInterface
  extends ChatLayoutIdentifierInterface,
    ChatLayoutListHandlerInterface<ChatLayoutListItemInterface> {
  items: ChatLayoutListItemInterface[];

  /**
   * Get item by id
   * @param id Item id
   */
  get(id: string): ChatLayoutListItemInterface;

  /**
   * Add new item to the list
   * @param item The item to insert
   * @param index Index position to insert the item.
   * Ignore this parameter to add at the end
   * @returns The length of the `items`
   */
  add(item: ChatLayoutListItemInterface, index?: number): number;

  /**
   * Remove item at specific position
   * @param index Index position to remove the item
   */
  removeAt(index: number): void;
}
