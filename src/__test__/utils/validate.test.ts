const { validateNumber } = require('@/utils');

describe('validateNumber test', () => {
  // Case true
  test('', () => {
    const result = validateNumber('');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('0');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('1');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('1000');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('12345678901234567890');
    expect(result).toBeTruthy();
  });
  test('1e18', () => {
    const result = validateNumber('1000000000000000000');
    expect(result).toBeTruthy();
  });
  test('1e19', () => {
    const result = validateNumber('10000000000000000000');
    expect(result).toBeTruthy();
  });
  test('2^256', () => {
    const result = validateNumber(
      '115792089237316200000000000000000000000000000000000000000000000000000000000000'
    );
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('0.1');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('0.0000001');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('0.00000001');
    expect(result).toBeTruthy();
  });
  test('1e-18', () => {
    const result = validateNumber('0.000000000000000001');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('1.');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('.1');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('123.456789012345678901');
    expect(result).toBeTruthy();
  });

  // Case false
  test('', () => {
    const result = validateNumber(' ');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('  ');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber(' 123.45 ');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber(null);
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber(undefined);
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('test');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1e8');
    expect(result).toBeFalsy();
  });
  test('2^256 + 1', () => {
    const result = validateNumber(
      '115792089237316200000000000000000000000000000000000000000000000000000000000001'
    );
    expect(result).toBeFalsy();
  });
  test('1e-19', () => {
    const result = validateNumber('0.0000000000000000001');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+1000');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+1,000');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('-1000');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('-1,000');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1e18');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1e-18');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1e5');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('-');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('0.0.1');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1.1.1');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123.45.67');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123.45.67.89');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('12A3.45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123.45A');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1.23e5');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('test.1');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1.test');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('.');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123+45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123-45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+123.45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+-123.45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1@23 45');
    expect(result).toBeFalsy();
  });
});
