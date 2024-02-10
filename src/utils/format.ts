/**
 * 문자열 중략
 */
export const ellipsis = (
  address: string | null,
  head: number = 5,
  tail: number = 5
) => {
  if (!address || head < 0 || tail < 0) return '';
  if (head === 0 && tail === 0) return address;
  return address.slice(0, head) + '...' + address.slice(-tail);
};

/**
 * 숫자 정수 부분의 0 값을 trim
 * 00000.012 -> 0.012
 */
export const trimZero = (value: string) => {
  const regex = /^0*(\d+)(\.\d+)?0*$/;
  return value.replace(regex, '$1$2');
};

// 숫자 => 문자열
export const numberToString = (num: number | string) => {
  return Number(num)
    .toFixed(18)
    .replace(/\.?0+$/, '');
};

// 콤마 추가
export const comma = (
  number: number | string | undefined | null,
  precision?: number
) => {
  if (
    number === '' ||
    number === null ||
    number === undefined ||
    isNaN(Number(number))
  ) {
    return '0';
  }
  let splitVal = numberToString(number).split('.');
  if (precision !== undefined && splitVal[1]) {
    splitVal[1] = splitVal[1].substring(0, precision);
  }
  splitVal[0] = splitVal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (Number(splitVal[1]) !== 0 && splitVal[1]) {
    return splitVal.join('.');
  }
  return splitVal[0];
};

// 콤마 제거
export const decomma = (number: number | string | undefined) => {
  if (number === null || number === undefined) {
    return '0';
  }
  return number.toString().replace(/,/g, '');
};

// 소수점 버림 처리
export const floor = (num: number | string, precision?: number) => {
  if (!num) return '0';
  const _num = numberToString(num);
  let [integer, digits] = _num.split('.');
  if (precision === 0) return integer;
  digits = digits && precision ? digits.slice(0, precision) : digits;
  return digits === undefined ? integer : `${integer}.${digits}`;
};
