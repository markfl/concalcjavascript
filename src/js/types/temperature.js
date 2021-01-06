import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Celsius</option>\n';
    out += '<option value="2">Fahrenheit</option>\n';
    out += '<option value="3">Kelvin</option>\n';
    out += '<option value="4">Rankine</option>\n';
    return out;
}


export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {
        
            // Celsius
            case '1':
                switch (to) {

                    // Celsius
                    case '1':
                        console.log('from temp');
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Fahrenheit
                    case '2':
                        console.log('from temp');
                        num = utils.getPrecision((fromText * 1.8) + 32);
                        break;
                    
                    // Kelvin
                    case '3':
                        num = utils.getPrecision((fromText * 1) + 273.15);
                        break;

                    // Rankine
                    case '4':
                        num = utils.getPrecision(((fromText * 1.8) + 491.67), 9);
                        break;

                    default:
                        break;

                }
                break;

            // Fahrenheit
            case '2':
                switch (to) {

                    // Celsius
                    case '1':
                        num = utils.getPrecision(((fromText - 32 ) / 1.8),11);
                        break;

                    // Fahrenheit
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Kelvin
                    case '3':
                        num = utils.getPrecision((((fromText * 1) + 459.67) * 0.555555556),11);
                        break;

                    // Rankine
                    case '4':
                        num = utils.getPrecision(((fromText * 1) + 459.67), 11);
                        break;

                    default:
                        break;

                }
                break;

            // Kelvin
            case '3':
                switch (to) {

                    // Celsius
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Fahrenheit
                    case '2':
                        num = utils.getPrecision(((((fromText * 1) - 273.15) * 1.8) + 32),11);
                        break;
                    
                    // Kelvin
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Rankine
                    case '4':
                        num = utils.dropZeros(fromText, 1.8);
                        break;

                    default:
                        break;

                }
                break;

            // Rankine
            case '4':
                switch (to) {

                    // Celsius
                    case '1':
                        num = utils.getPrecision((fromText - 491.67) * 0.555555556);
                        break;

                    // Fahrenheit
                    case '2':
                        num = utils.getPrecision(fromText - 459.67);
                        break;
                    
                    // Kelvin
                    case '3':
                        num = (fromText * 1) * 0.555555556;
                        console.log(num);
                        num = utils.getPrecision(fromText * 0.555555556);
                        break;

                    // Rankine
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    default:
                        break;

                }
                break;
                        
            default:
                break
        }
    }
    
    // Det the answer
    document.getElementById('answer').value = num;
}