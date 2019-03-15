import { isEmpty } from 'validator';

export const isNotEmpty = (str, options) => !isEmpty(str, options);

export const required = value => !!value;
