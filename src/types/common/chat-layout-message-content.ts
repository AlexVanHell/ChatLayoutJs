export interface ChatLayoutMessageContentTextInterface {
  /**
   * Text message body
   */
  body: string;
}

export interface ChatLayoutMessageContentLinkInterface
  extends ChatLayoutMessageContentTextInterface {
  /**
   * Link url
   */
  url: string;
}

export interface ChatLayoutMessageContentMediaInterface
  extends ChatLayoutMessageContentTextInterface {
  file: File;
}

export type ChatLayoutMessageContent =
  | ChatLayoutMessageContentTextInterface
  | ChatLayoutMessageContentLinkInterface
  | ChatLayoutMessageContentMediaInterface;
