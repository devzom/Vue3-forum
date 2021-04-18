import { format, fromUnixTime } from 'date-fns';

export default {
  currency(value, currency = ' USD') {
    return `${value} ${currency}`;
  },
  date(date, formatStr = 'dd MMMM yyyy HH:mm') {
    return format(fromUnixTime(date), formatStr);
  }
};
