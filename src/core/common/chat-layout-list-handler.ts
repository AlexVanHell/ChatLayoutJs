import { ChatLayoutListHandlerInterface } from '../../types/action/chat-layout-list-handler.interface';
import { ChatLayoutIdentifierInterface } from '../../types/common/chat-layout-identifier.interface';

export class ChatLayoutListHandler<T extends ChatLayoutIdentifierInterface>
	implements ChatLayoutListHandlerInterface<T> {
	constructor(private propertyName = 'items') {
		(this[this.propertyName] as T[]) = [] as T[];
	}

	public add(item: T, index?: number) {
		(this[this.propertyName] as T[]).splice(index, 0, item);
		return (this[this.propertyName] as T[]).length;
	}

	public removeAt(index: number) {
		(this[this.propertyName] as T[]).splice(index, 1);
	}

	public removeById(id: string) {
		const index = (this[this.propertyName] as T[]).findIndex(
			(item) => item.id === id,
		);

		if (index > -1) {
			(this[this.propertyName] as T[]).splice(index, 1);
		}
	}
}
