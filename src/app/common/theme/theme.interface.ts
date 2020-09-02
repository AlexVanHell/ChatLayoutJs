import { ColorType } from './color.type';

export interface ThemeColorsInterface {
	primary?: ColorType;
	secondary?: ColorType;
	warning?: ColorType;
	danger?: ColorType;
	info?: ColorType;
}

export interface ThemeInterface {
	style?: 'default' | 'material' | 'ios';
	colors?: ThemeColorsInterface;
}
