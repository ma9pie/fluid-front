import Big from 'big.js';

/**
 * 문자열 중략
 * ABCDEFG12345 => "ABCDE...12345"
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
 * 숫자를 문자열로 변환
 * 1e7 => "10000000"
 * 1e-7 => "0.0000001"
 */
export const numberToString = (num: number | string) => {
  if (!num || isNaN(Number(num))) {
    return '0';
  }
  return new Big(num).toFixed();
};

/**
 * 숫자 정수 부분의 0 값을 trim
 * "00000.012" -> "0.012"
 * "00.0120" -> "0.012"
 */
export const trimZero = (value: string) => {
  const regex = /^0*(\d+)(\.\d+)?0*$/;
  const result = value.replace(regex, '$1$2');
  if (!value) {
    return '';
  }
  return new Big(result).toFixed();
};

/**
 * 콤마 추가
 * 1000000 => "1,000,000"
 */
export const comma = (number: number | string, precision?: number) => {
  let value = numberToString(number).split('.');
  if (precision !== undefined && value[1]) {
    value[1] = value[1].substring(0, precision);
  }
  value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (Number(value[1]) !== 0 && value[1]) {
    return value.join('.');
  }
  return value[0];
};

/**
 * 콤마 제거
 * "1,000,000" => "1000000"
 */
export const decomma = (number: number | string) => {
  if (!number) return '0';
  return number.toString().replace(/,/g, '');
};

/**
 * 소수점 버림 처리
 * floor(0.1234,2) => "0.12"
 */
export const floor = (num: number | string, precision?: number) => {
  const value = numberToString(num);
  let [integer, digits] = value.split('.');
  if (precision === 0) return integer;
  digits = digits && precision ? digits.slice(0, precision) : digits;
  return digits === undefined ? integer : `${integer}.${digits}`;
};
