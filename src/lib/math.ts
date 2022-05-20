/**
   * Finds the location (as a percentage) of num in between the two numbers.
   * 
   * @param a The min/max range
   * @param b The min/max range.
   * 
   * @returns A percentage of how between the number is:
   * For example, if a is -10 and b is 10, and num is 5, this function will return 0.75 (75%).
   * If the num is 15, this function will return 1.25 (125%).
   * 
   * Special Case: If both a and b are the same, it will return undefined.
  */
export const location = (a: number, b: number, num: number): number | undefined => {
  if (a > b) return location(b, a, num);
  if (a == b) return undefined;

  return Math.abs(a - num) / Math.abs(a - b)
}

/**
 * Check if [num] is between [a] and [b].
 * 
 * Special cases:
 * If a is equal to b and num is equal to (a or b), its between.
 * If a is equal to b and num is NOT equal to (a or b), it's not.
 *  
 * @param a A number that specifies the between range
 * @param b A number that specifies the between range.
 * @param num The number to check if it's between a and b.
 */
export const between = (a: number, b: number, num: number): boolean => {
  if (a == b && num == a) return true;
  if (a == b && num !== a) return false;

  if (a > b) return between(b, a, num);

  return a <= num && b >= num;
}