import moment from 'moment'

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export const SHORT_MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

export const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

/**
 * Ensure date helper argument is converted to Date instance
 *
 * @param  {Date|Integer|String} value
 * @return {Date}
 */
export const varToDate = ( value ) => {
  // catch value that's already a Date instance
  if ( value instanceof Date ) {
    return value
  }
  // if value is a number string with length of 10, its php epoch time
  if ( !/\-|\//.test( value ) && value.toString().length === 10 ) {
    value = 1000 * ( parseInt( value ) )
  // else if value is a date string, ensure is UTC
  } else if ( /\-|\//.test( value ) && !/UTC/.test( value ) ) {
    value += ' UTC'
  }

  return new Date( value )
}

/**
 * Standard YYYY-mm-dd format
 *
 * @param  {Date|Integer|String} value
 * @return {String}
 */
export const dateStampFormat = ( value ) => {
  const date = varToDate( value )
  const day = ( "0" + ( date.getDate() ) ).slice( -2 )
  const month = ( "0" + ( date.getMonth() + 1 ) ).slice( -2 )
  const year = date.getFullYear()

  return year + '-' + month + '-' + day
}

/**
 * Date to 'days ago' format
 *
 * @param  {Date|Integer|String} value
 * @return {String}
 */
export const daysAgoFormat = ( value ) => {
  const date = varToDate( value )
  const today = new Date
  let timeDiff = Math.abs( today.getTime() - date.getTime() )
  timeDiff = timeDiff / ( 1000 * 3600 * 24 )
  let diffDays = Math.floor( timeDiff )
  let returnText
  if ( diffDays === 0 ) {
      returnText = 'Today'
  } else if ( diffDays === 1 ) {
      returnText = 'Yesterday'
  } else if ( diffDays <= 105 ) {
      returnText = diffDays + ' days ago'
  } else if ( diffDays <= 365 ) {
      returnText = Math.round( diffDays / 30, 0 ) + ' months ago'
  } else {
      if ( Math.round( diffDays / 365, 0 ) > 1 ) {
          returnText = Math.round( diffDays / 365, 0 ) + ' years ago'
      } else {
          returnText = '1 year ago'
      }
  }

  return returnText
}

/**
 * Full month name and date format
 *
 * @param  {Date|Integer|String} value
 * @return {String}
 */
export const monthDayFormat = ( value ) => {
  const date = varToDate( value )
  const day = date.getDate()
  const monthIndex = date.getMonth()

  return MONTH_NAMES[ monthIndex ] + ' ' + day
}

/**
 * Short month name and date format
 *
 * @param  {Date|Integer|String} value
 * @return {String}
 */
export const shortMonthDayFormat = ( value ) => {
  const date = varToDate( value )
  const day = date.getDate()
  const monthIndex = date.getMonth()

  return SHORT_MONTH_NAMES[ monthIndex ] + ' ' + day
}

/**
 * Get years old from year string
 * If floor set to false, returns expression of years + months as decimal
 *
 * @param  {string|integer}  year
 * @param  {Boolean} [floor=true]
 * @return {string}
 */
export const yearsOld = ( year, floor = true ) => {
  if ( !year || parseInt( year ) <= 0 || String( year ).length !== 4 ) {
    return 'Unknown'
  }
  const today = new Date()
  const thisYear = today.getFullYear()
  let age = thisYear - parseInt( year )
  // if floor set to false, include expression years.months (as decimal)
  if ( ! floor ) {
    age += ( today.getMonth() / 12 )
    age = age.toFixed( 1 )
  }
  if ( age === 1 ) {
    age = age.toString() + ' year old'
  } else {
    if ( age < 0 ) {
      age = 0
    }
    age = age.toString() + ' years old'
  }

  return age
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
