'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const dateParts = date.split(fromFormat[3]);
  const dateIndexes = fromFormat.slice(0, -1);

  const longYearIndex = dateIndexes.indexOf('YYYY');
  const shortYearIndex = dateIndexes.indexOf('YY');

  if (longYearIndex !== -1) {
    dateParts[shortYearIndex] = dateParts[longYearIndex].slice(-2);
  } else if (shortYearIndex !== -1) {
    const year = parseInt(dateParts[shortYearIndex], 10);

    dateParts[longYearIndex] =
      year < 30
        ? `20${dateParts[shortYearIndex]}`
        : `19${dateParts[shortYearIndex]}`;
  }

  return toFormat
    .slice(0, -1)
    .map((part) => dateParts[dateIndexes.indexOf(part)])
    .join(toFormat[3]);
}

module.exports = formatDate;
