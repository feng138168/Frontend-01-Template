function convertNumberToString(number, hex = 10) {
    let integer = Math.floor(number);
    let fraction = number - integer;
    let string = '';

    while (integer > 0) {
        string = integer % hex + string;
        integer = Math.floor(integer / hex);
    }

    if (fraction > 0) {
        string += '.';
    }


    while (fraction > 0) {
        let integer = Math.floor(fraction * hex);
        string += integer;
        fraction = fraction * hex - integer;
    }

    return string;
}