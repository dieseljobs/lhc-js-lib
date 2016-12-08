export const yearsOld = (year) => {
  if (!year) return 'Unknown';
  const today = new Date();
  let thisYear = today.getFullYear();
  let age = thisYear - parseInt(year);
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
