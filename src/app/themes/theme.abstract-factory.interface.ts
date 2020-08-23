import { ComponentType } from 'react';
import { LeftHeadProps } from './HOCs/LeftHead/LeftHead';
import { SearchbarProps } from './HOCs/Searchbar/Searchbar';

export interface ThemeAbstractFactoryInterface {
	createLeftHead(): ComponentType<LeftHeadProps>;

	createRightHead?(): ComponentType<any>;

	createSearchbar(): ComponentType<SearchbarProps>;

	createPrimaryButton(): ComponentType<any>;

	createConversationItem(): ComponentType<any>;

	createMessageSendContent(): ComponentType<any>;

	createMessageInput(): ComponentType<any>;

	createMessageItem(): ComponentType<any>;

	createPopupList(): ComponentType<any>;

	createPopupListItem(): ComponentType<any>;

	createDetailSection(): ComponentType<any>;

	createHorizontalSelection(): ComponentType<any>;

	createList(): ComponentType<any>;

	createListItem(): ComponentType<any>;
}
