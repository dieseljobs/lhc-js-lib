import * as crypto from './crypto'
import * as dateFormat from './date-format'
import * as numberFormat from './number-format'

export default {
  ...crypto,
  ...dateFormat,
  ...numberFormat
}
