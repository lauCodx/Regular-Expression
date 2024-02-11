# Regular-Expression

## Credit Card Number Validation

1. Visa card `(^4[0-9]{12}(?:[0-9]{3})?$)`: It starts with a 4 and are either 13 or 16 digits long.  `^4` makes sure the card number starts with 4. `[0-9]{12}` checks for 12 digits after the 4. `(?:[0-9]{3})` is an optional group that checks for an additional 3 digits, That can take 16 digit card number.
   
2. MasterCard `(^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|720[0-9]{12}))$)`: It starts with numbers 51-55 or between 2221 and 2720 and are 16 digits long. The pattern checks for these starting numbers.
   
3. Verve `(^(506099[0-9]{10,13}|5061[0-9]{12,15}|5062[0-9]{12,15}|5063[0-9]{12,15}|65003[0-9]{10,13})$)`: It starts with 506099, 5061, 5062, 5063, or 65003 and are 16, 17, 18, or 19 digits long. 