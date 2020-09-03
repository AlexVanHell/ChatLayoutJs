import { Validator } from 'prop-types';

export type PropTypeRecord<T extends { [key: string]: any }> = {
	[key in keyof T]: Validator<any>;
};
