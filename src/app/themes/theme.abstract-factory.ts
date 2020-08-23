import { Newable } from '../../types/newable.type';
import { DefaultThemeFactory } from './default/default-theme.factory';
import { ThemeAbstractFactoryInterface } from './theme.abstract-factory.interface';

export class ThemeAbstractFactory {
	private themeFactories: {
		[key: string]: Newable<ThemeAbstractFactoryInterface>;
	} = {
		default: DefaultThemeFactory,
	};

	public getTheme(name: string = 'default') {
		const Theme = this.themeFactories[name];
		return new Theme();
	}

	public addTheme(name: string, theme: Newable<ThemeAbstractFactoryInterface>) {
		if (this.themeFactories[name]) {
			throw new Error(`There is already a theme with the name: "${name}"`);
		}

		this.themeFactories[name] = theme;
	}
}
