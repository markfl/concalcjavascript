export const dropZeros = (numberIn, calc, precision = null) => {
    let number = numberIn * calc
    if (precision === null) {
        number = getPrecision(number);
    } else {
        number = getPrecision(number, precision);
    }
    return number;
}

export const getPrecision = (numberIn, precision = null) => {
    let number = numberIn;
    if (precision === null) {
        precision = 11;
    }

    number = parseFloat(number.toPrecision(precision));
    if (number > 999) {
        number = new Intl.NumberFormat('en-US', { maximumSignificantDigits: precision }).format(number);;
    }
    return number;
}

export const clearDoc = (out) => {
    document.getElementById('selFrom').innerHTML = out;
    document.getElementById('selTo').innerHTML = out;
    document.getElementById('valueIn').value = '';
    document.getElementById('answer').value = '';
}