import { format, fromUnixTime, formatDistance } from 'date-fns';

import enUS from 'date-fns/locale/en-US';

const defaultDateFnsOptions = {
  locale: enUS
};

export default {
  currency(value, currency = ' USD') {
    return `${value} ${currency}`;
  },
  date(date, formatStr = 'dd MMMM yyyy HH:mm') {
    return format(fromUnixTime(date), formatStr, defaultDateFnsOptions);
  },
  dateRelative(date) {
    const formattedDate = fromUnixTime(date);
    return formatDistance(formattedDate, new Date().getTime(), {
      ...defaultDateFnsOptions,
      addSuffix: true
    });
  }
};
