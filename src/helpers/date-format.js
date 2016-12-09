/**
 * Get years old from year string
 * If floor set to false, returns expression of years + months as decimal
 *
 * @param  {string|integer}  year
 * @param  {Boolean} [floor=true]
 * @return {string}
 */
export const yearsOld = (year, floor = true) => {
  if (!year) return 'Unknown';
  const today = new Date();
  let thisYear = today.getFullYear();
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
