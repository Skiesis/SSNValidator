import { ssnValidator } from "./src/ssnValidator";

const value = process.argv.slice(2)[0];

const result = ssnValidator(value);

console.log(`Your SSN is: ${result ? 'valid' : 'not valid'}`);
