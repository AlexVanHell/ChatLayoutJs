import { ThemeAbstractFactoryInterface } from '../theme.abstract-factory.interface';
import DefaultLeftHead from './LeftHead/DefaultLeftHead';
import DefaultSearchbar from './Searchbar/DefaultSearchbar';

export class DefaultThemeFactory implements ThemeAbstractFactoryInterface {
	public createLeftHead() {
		return DefaultLeftHead;
	}

	public createSearchbar() {
		return DefaultSearchbar;
	}

	public createPrimaryButton() {
		return null;
	}

	public createConversationItem() {
		return null;
	}

	public createMessageSendContent() {
		return null;
	}

	public createMessageInput() {
		return null;
	}

	public createMessageItem() {
		return null;
	}

	public createPopupList() {
		return null;
	}

	public createPopupListItem() {
		return null;
	}

	public createDetailSection() {
		return null;
	}

	public createHorizontalSelection() {
		return null;
	}

	public createList() {
		return null;
	}

	public createListItem() {
		return null;
	}
}
