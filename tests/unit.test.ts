import { ssnValidator } from '../src/ssnValidator';

describe("SSN Validator", () => {
    it("should return false if has less than 9 digits", () => {
        expect(ssnValidator("502-65-898")).toBeFalsy();
    });

    it("should return false if has more than 2 hyphens", () => {
        expect(ssnValidator("85-95-695-56")).toBeFalsy();
    })

    it("should return false if second part is less than 1", () => {
        expect(ssnValidator("568-00-8965")).toBeFalsy();
    })

    it("should return true if its correct", () => {
        expect(ssnValidator("568-52-8965")).toBeTruthy();
    })
})