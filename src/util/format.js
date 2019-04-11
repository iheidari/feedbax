import formatDate from 'date-fns/format';
import { isEmptyString } from './util';

const format = (value, formatName, format) => {
  if (!formatName) return value;
  if (formatName === 'date-format') return dateFormat(value, format);
};

const dateFormat = (value, format) => {
  if (!value) return '';
  if (value instanceof String && isEmptyString(value)) return value;
  const dateValue = value instanceof Date ? value : new Date(value);
  if (dateValue) return formatDate(value, format);
  else throw new Error('invalide date value');
};

export default format;
