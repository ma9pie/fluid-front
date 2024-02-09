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
