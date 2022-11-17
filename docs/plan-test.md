# Test Plan 

## Unit testing

TC01 - Should return false if has less than 9 digits.

> Input: 502-65-898
> Result: False

TC02 - Should return false if has more than 2 hyphens.

> Input: 85-95-695-56
> Result: False

TC03 - Should return false if second part is less than 1.

> Input: 568-00-8965
> Result: False

TC04 - Should return true if its correct.

> Input: 568-52-8965
> Result: True

To run test use 
```
npm test  
```
