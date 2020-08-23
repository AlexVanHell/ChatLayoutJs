import { ChatLayoutListHandlerInterface } from '../../action/chat-layout-list-handler.interface';
import { ChatLayoutIdentifierInterface } from '../../common/chat-layout-identifier.interface';
import { ChatLayoutMessage } from '../chat-layout-message.interface';

export interface ChatLayoutListItemInterface
	extends ChatLayoutIdentifierInterface,
		ChatLayoutListHandlerInterface<ChatLayoutMessage> {
	messages: ChatLayoutMessage[];

	/**
	 * Add new message
	 * @param message The message object to add
	 * @param index Index position to insert the message
	 * Ignore this parameter to add at the end
	 */
	add(message: ChatLayoutMessage, index?: number): number;

	/**
	 * Remove message at specific position
	 * @param index Index position to remove the message
	 */
	removeAt(index: number): void;

	/**
	 * Remove message at specific position
	 * @param index Index position to remove the message
	 */
	removeById(id: string): void;
}
