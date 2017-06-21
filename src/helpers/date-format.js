import moment from 'moment'

/**
 * Get years old from year string
 * If floor set to false, returns expression of years + months as decimal
 *
 * @param  {string|integer}  year
 * @param  {Boolean} [floor=true]
 * @return {string}
 */
export const yearsOld = (year, floor = true) => {
  if (String(year).length !== 4) {
    return 'Unknown';
  }
  const today = new Date();
  const thisYear = today.getFullYear();
  let age = thisYear - parseInt(year);
  // if floor set to false, include expression years.months (as decimal)
  if (!floor) {
    age += (today.getMonth() / 12);
    age = age.toFixed(1);
  }
  if (age === 1) {
    age = age.toString() + ' year old';
  } else {
    if (age < 0) {
      age = 0;
    }
    age = age.toString() + ' years old';
  }
  return age;
}

/**
 * Produce a range of years starting from current year
 *
 * @param  {integer} count
 * @return {array}
 */
export const yearsFromNowRange = ( count ) => {
  let cursorYear = parseInt( moment().format('YYYY') )
  let lastYear = cursorYear + count
  let yearRange = []
  while ( cursorYear < lastYear ) {
    yearRange.push( cursorYear )
    cursorYear ++
  }
  return yearRange
}
