function convertStringToNumber(string, hex = 10) {
    const chars = string.split('');
    let number = 0;

    let i = 0;
    while (i < chars.length && chars[i] !== '.') {
        number = number * hex;
        number += chars[i].codePointAt(0) - '0'.codePointAt(0);
        i++;
    }

    if (chars[i] === '.') {
        i++;
    }

    let fraction = 1;
    while (i < chars.length) {
        fraction = fraction / hex;
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
        i++;
    }

    return number;
}