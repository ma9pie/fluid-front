import { math } from '@/utils';

/**
 * input의 value가 유효한 값인지 확인
 * @param value : 입력값
 * @param maxDecimal : 최대 소수점
 * @returns boolean
 */
export function validateNumber(value: string, maxDecimal = 18) {
  if (value === null || value === undefined) return false;

  const max = 2 ** 256;
  const numRegex: RegExp = /^\d+$/;
  const invalidStringRegex: RegExp = /\+|\-|e/;
  const valueArr = value.split('.');

  // 초기값 ''
  if (value === '') {
    return true;
  }
  // 공백 포함 시
  if (value !== value.trim()) {
    return false;
  }
  // . 만 입력 시
  if (isNaN(Number(value))) {
    return false;
  }
  // +,-,e 포함 시
  if (invalidStringRegex.test(value)) {
    return false;
  }
  // x.x.x과 같은 입력 시
  if (valueArr.length > 2) {
    return false;
  }
  // 정수 부분이 숫자가 아닐 경우
  if (Number.isNaN(Number(valueArr[0]))) {
    return false;
  }
  // x.x과 같은 입력 시
  if (valueArr.length === 2) {
    // 소수점 입력 안 했을 때 '3.'
    if (valueArr[1] === '') {
      return true;
    }
    // 소수 부분이 숫자가 아닐 경우
    if (!numRegex.test(valueArr[1])) {
      return false;
    }
  }
  // 소수 부분이 maxDecimal 보다 클 경우
  if (valueArr[1] && valueArr[1].length > maxDecimal) {
    return false;
  }
  // max 값 보다 클 경우
  if (math(value).gt(max)) {
    return false;
  }

  return true;
}
