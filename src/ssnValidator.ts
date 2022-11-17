export const ssnValidator = (ssn: string) => {
    const ssnRegex = new RegExp("[0-9]{3}-[0-9]{2}-[0-9]{4}");

    if(!ssnRegex.test(ssn)) return false;

    const parts = ssn.split('-');

    if(parts[0] == "000" || parts[0] == "666" || (parts[0] >= "900" && parts[0] <= "999")) return false;
    if(parts[1] == "00" || parts[1] > "99") return false;
    if(parts[2] == "0000" || parts[2].length !== 4) return false;

    return true;
}