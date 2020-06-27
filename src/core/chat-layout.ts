import { ChatLayoutGroupInterface } from '../types/layout/chat-layout-group.interface';
import { ChatLayoutInterface } from '../types/layout/chat-layout.interface';
import { ChatLayoutLoader } from './chat-layout-loader';
import { ChatLayoutListHandler } from './common/chat-layout-list-handler';

export class ChatLayout extends ChatLayoutListHandler<ChatLayoutGroupInterface>
  implements ChatLayoutInterface {
  public static loader = new ChatLayoutLoader();

  groups: ChatLayoutGroupInterface[];

  constructor() {
    super('groups');
  }

  public removeByName(name: string) {
    const index = this.groups.findIndex((g) => g.name === name);

    if (index > -1) {
      this.groups.splice(index, 1);
    }
  }
}
