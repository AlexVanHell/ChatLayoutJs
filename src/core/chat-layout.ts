import { ChatLayoutGroupInterface } from '../types/layout/chat-layout-group.interface';
import { ChatLayoutInterface } from '../types/layout/chat-layout.interface';
import { ChatLayoutListHandler } from './common/chat-layout-list-handler';

export class ChatLayout extends ChatLayoutListHandler<ChatLayoutGroupInterface>
	implements ChatLayoutInterface {
	groups: ChatLayoutGroupInterface[];

	constructor() {
		super('groups');
	}
}
