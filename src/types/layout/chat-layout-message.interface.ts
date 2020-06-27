import { ChatLayoutIdentifierInterface } from '../common/chat-layout-identifier.interface';
import {
  ChatLayoutMessageContent,
  ChatLayoutMessageContentTextInterface,
} from '../common/chat-layout-message-content';

/**
 * @template T `content` type
 */
export interface ChatLayoutMessage<
  T extends ChatLayoutMessageContent = ChatLayoutMessageContentTextInterface
> extends ChatLayoutIdentifierInterface {
  /**
   * Message content
   */
  content: T;

  /**
   * Message reference for replies
   */
  messageRef: ChatLayoutMessage<any>;

  variant: 'left' | 'right';
}
