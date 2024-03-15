import { IValidator } from '../IValidator';

/**
 * Validates if a string represents a valid credit card number using the Luhn algorithm.
 * @param {string} data The string to be validated, representing a credit card number.
 * @returns {boolean} True if the string represents a valid credit card number, otherwise false.
 * @example
 * // Returns true
 * const result1 = validateCreditCard('4242424242424242');
 *
 * // Returns true
 * const result2 = validateCreditCard('378734493671000');
 *
 * // Returns false
 * const result3 = validateCreditCard('111');
 */
export const validateCreditCard: IValidator<string> = (
  data: string
): boolean => {
  // Regular expression to match a string of 15 or 16 digits
  const regExp = /^[0-9]{15,16}$/;

  // Check if the input string matches the regular expression
  if (!regExp.test(data)) return false;

  // Initialize sum for the Luhn algorithm
  let sum = 0;

  // Iterate over each digit of the input string
  for (let i = 0; i < data.length; i++) {
    let digit = parseInt(data[i]);

    // Double every second digit starting from the right
    if ((data.length - i) % 2 === 0) {
      digit *= 2;

      // If the doubled digit is greater than 9, subtract 9 from it
      if (digit > 9) {
        digit -= 9;
      }
    }

    // Add the digit to the sum
    sum += digit;
  }

  // If the sum is divisible by 10, the credit card number is valid
  return sum % 10 === 0;
};
