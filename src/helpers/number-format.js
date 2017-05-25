export const humanNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// @TODO: pass currency code
export const currency = ( num ) => {
  num = humanNumber( num )
  return `$${num}`
}
