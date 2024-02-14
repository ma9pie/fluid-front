const {
  ellipsis,
  numberToString,
  trimZero,
  comma,
  decomma,
  floor,
} = require('@/utils');

describe('ellipsis test', () => {
  test('', () => {
    const result = ellipsis('');
    expect(result).toEqual('');
  });
  test('', () => {
    const result = ellipsis(null);
    expect(result).toEqual('');
  });
  test('', () => {
    const result = ellipsis(undefined);
    expect(result).toEqual('');
  });
  test('', () => {
    const result = ellipsis('abc');
    expect(result).toEqual('abc');
  });
  test('', () => {
    const result = ellipsis('abcdef');
    expect(result).toEqual('abcdef');
  });
  test('', () => {
    const result = ellipsis('1234567890');
    expect(result).toEqual('1234567890');
  });
  test('', () => {
    const result = ellipsis('12345abc12345');
    expect(result).toEqual('12345...12345');
  });
  test('', () => {
    const result = ellipsis('011234567890abcd');
    expect(result).toEqual('01123...0abcd');
  });
  test('', () => {
    const result = ellipsis('0a1234567890abcd');
    expect(result).toEqual('0a123...0abcd');
  });
  test('', () => {
    const result = ellipsis('abcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual('abcde...vwxyz');
  });
  test('', () => {
    const result = ellipsis('0x1234567890abcd', 2, 3);
    expect(result).toEqual('0x...bcd');
  });
  test('', () => {
    const result = ellipsis('0x1234567890abcd', 2);
    expect(result).toEqual('0x...0abcd');
  });
  test('', () => {
    const result = ellipsis('0x1234567890abcd', 0, 0);
    expect(result).toEqual('0x1234567890abcd');
  });
  test('', () => {
    const result = ellipsis('0x1234567890abcd', 0, 0);
    expect(result).toEqual('0x1234567890abcd');
  });
  test('', () => {
    const result = ellipsis('abced', 20, 3);
    expect(result).toEqual('abced');
  });
  test('', () => {
    const result = ellipsis('ABCDEFG12345', 6, 6);
    expect(result).toEqual('ABCDEFG12345');
  });
});

describe('numberToString test', () => {
  test('', () => {
    const result = numberToString(0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(null);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(undefined);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString('test');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(123);
    expect(result).toEqual('123');
  });
  test('', () => {
    const result = numberToString(-123);
    expect(result).toEqual('-123');
  });
  test('', () => {
    const result = numberToString(1e-7);
    expect(result).toEqual('0.0000001');
  });
  test('', () => {
    const result = numberToString('1e-7');
    expect(result).toEqual('0.0000001');
  });
  test('', () => {
    const result = numberToString('1e-18');
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = numberToString(1e-10);
    expect(result).toEqual('0.0000000001');
  });
  test('', () => {
    const result = numberToString(1e-18);
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = numberToString('1e18');
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = numberToString(1e18);
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = numberToString('1e21');
    expect(result).toEqual('1000000000000000000000');
  });
  test('', () => {
    const result = numberToString(1e21);
    expect(result).toEqual('1000000000000000000000');
  });
  test('', () => {
    const result = numberToString(1.23e-5);
    expect(result).toEqual('0.0000123');
  });
  test('', () => {
    const result = numberToString(-1e20);
    expect(result).toEqual('-100000000000000000000');
  });
});

describe('trimZero test', () => {
  test('', () => {
    const result = trimZero('');
    expect(result).toEqual('');
  });
  test('', () => {
    const result = trimZero('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = trimZero('00');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = trimZero('000');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = trimZero('.0');
    expect(result).toEqual('.0');
  });
  test('', () => {
    const result = trimZero('.00');
    expect(result).toEqual('.00');
  });
  test('', () => {
    const result = trimZero('0.');
    expect(result).toEqual('0.');
  });
  test('', () => {
    const result = trimZero('0.0');
    expect(result).toEqual('0.0');
  });
  test('', () => {
    const result = trimZero('00000.000');
    expect(result).toEqual('0.000');
  });
  test('', () => {
    const result = trimZero('00000.100');
    expect(result).toEqual('0.100');
  });
  test('', () => {
    const result = trimZero('1000');
    expect(result).toEqual('1000');
  });
  test('', () => {
    const result = trimZero('0.001');
    expect(result).toEqual('0.001');
  });
  test('', () => {
    const result = trimZero('0.001000');
    expect(result).toEqual('0.001000');
  });
  test('', () => {
    const result = trimZero('00000.012');
    expect(result).toEqual('0.012');
  });
  test('', () => {
    const result = trimZero('00000.012000');
    expect(result).toEqual('0.012000');
  });
  test('', () => {
    const result = trimZero('987654.321');
    expect(result).toEqual('987654.321');
  });
  test('', () => {
    const result = trimZero('987654321');
    expect(result).toEqual('987654321');
  });
  test('', () => {
    const result = trimZero('456.00000');
    expect(result).toEqual('456.00000');
  });
});

describe('comma test', () => {
  test('', () => {
    const result = comma('1000');
    expect(result).toEqual('1,000');
  });
  test('', () => {
    const result = comma('1000.123');
    expect(result).toEqual('1,000.123');
  });
  test('', () => {
    const result = comma('1000.123', 0);
    expect(result).toEqual('1,000');
  });
  test('', () => {
    const result = comma('1000.123', 1);
    expect(result).toEqual('1,000.1');
  });
  test('', () => {
    const result = comma('-1000.123', 1);
    expect(result).toEqual('-1,000.1');
  });
  test('', () => {
    const result = comma('0.000123', 4);
    expect(result).toEqual('0.0001');
  });
  test('', () => {
    const result = comma('0.000123', 3);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma('0.0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma('1000000.0');
    expect(result).toEqual('1,000,000');
  });
  test('', () => {
    const result = comma(1e18);
    expect(result).toEqual('1,000,000,000,000,000,000');
  });
  test('', () => {
    const result = comma(1e18, 3);
    expect(result).toEqual('1,000,000,000,000,000,000');
  });
  test('', () => {
    const result = comma(1789.123456);
    expect(result).toEqual('1,789.123456');
  });
  test('', () => {
    const result = comma(1789.123456, 0);
    expect(result).toEqual('1,789');
  });
  test('', () => {
    const result = comma(1789.123456, 2);
    expect(result).toEqual('1,789.12');
  });
  test('', () => {
    const result = comma(0.0000001);
    expect(result).toEqual('0.0000001');
  });
  test('', () => {
    const result = comma(1e-18);
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = comma('', 2);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma('test', 2);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma(undefined, 2);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma(null, 2);
    expect(result).toEqual('0');
  });
});

describe('decomma test', () => {
  test('', () => {
    const result = decomma('');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma(0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma(null);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma(undefined);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma('test');
    expect(result).toEqual('0');
  });

  test('', () => {
    const result = decomma('1,000');
    expect(result).toEqual('1000');
  });
  test('', () => {
    const result = decomma('-2,500');
    expect(result).toEqual('-2500');
  });
  test('', () => {
    const result = decomma('3,456.789');
    expect(result).toEqual('3456.789');
  });
  test('', () => {
    const result = decomma('-1,234.567');
    expect(result).toEqual('-1234.567');
  });
  test('', () => {
    const result = decomma('1,000,000,000,000');
    expect(result).toEqual('1000000000000');
  });
  test('', () => {
    const result = decomma('0.0000000001');
    expect(result).toEqual('0.0000000001');
  });
  test('', () => {
    const result = decomma('1.23e-5');
    expect(result).toEqual('0.0000123');
  });
  test('', () => {
    const result = decomma(1.23e-5);
    expect(result).toEqual('0.0000123');
  });
  test('', () => {
    const result = decomma(4e3);
    expect(result).toEqual('4000');
  });
  test('', () => {
    const result = decomma('-1,000,000,000,000,000,000');
    expect(result).toEqual('-1000000000000000000');
  });
  test('', () => {
    const result = decomma(1e18);
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = decomma(1e-18);
    expect(result).toEqual('0.000000000000000001');
  });
});

describe('floor test', () => {
  test('', () => {
    const result = floor('123.123123123', 1);
    expect(result).toEqual('123.1');
  });
  test('', () => {
    const result = floor('123123123');
    expect(result).toEqual('123123123');
  });
  test('', () => {
    const result = floor('1e6');
    expect(result).toEqual('1000000');
  });
  test('', () => {
    const result = floor('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('0.11111', 6);
    expect(result).toEqual('0.11111');
  });
  test('', () => {
    const result = floor('0.11111', 3);
    expect(result).toEqual('0.111');
  });
  test('', () => {
    const result = floor('0.11111', 2);
    expect(result).toEqual('0.11');
  });
  test('', () => {
    const result = floor('0.11111', 1);
    expect(result).toEqual('0.1');
  });
  test('', () => {
    const result = floor('0.11111', 0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('test');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor(null, 0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor(undefined, 0);
    expect(result).toEqual('0');
  });
});
