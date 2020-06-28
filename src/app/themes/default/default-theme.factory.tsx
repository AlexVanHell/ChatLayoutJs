import React, { Props } from 'react';
import { ThemeAbstractFactoryInterface } from '../theme.abstract-factory.interface';
import DefaultLeftHead from './LeftHead/DefaultLeftHead';
import DefaultSearchbar from './Searchbar/DefaultSearchbar';

export class DefaultThemeFactory implements ThemeAbstractFactoryInterface {
  createLeftHead() {
    return DefaultLeftHead;
  }

  createSearchbar() {
    return DefaultSearchbar;
  }

  createPrimaryButton() {
    return (props: Props<any>) => <div></div>;
  }

  createConversationItem() {
    return (props: Props<any>) => <div></div>;
  }

  createMessageSendContent() {
    return (props: Props<any>) => <div></div>;
  }

  createMessageInput() {
    return (props: Props<any>) => <div></div>;
  }

  createMessageItem() {
    return (props: Props<any>) => <div></div>;
  }

  createPopupList() {
    return (props: Props<any>) => <div></div>;
  }

  createPopupListItem() {
    return (props: Props<any>) => <div></div>;
  }

  createDetailSection() {
    return (props: Props<any>) => <div></div>;
  }

  createHorizontalSelection() {
    return (props: Props<any>) => <div></div>;
  }

  createList() {
    return (props: Props<any>) => <div></div>;
  }

  createListItem() {
    return (props: Props<any>) => <div></div>;
  }
}
