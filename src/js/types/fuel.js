import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Miles/Gallon(US)</option>\n';
    out += '<option value="2">Miles/Gallon(UK)</option>\n';
    out += '<option value="3">Liters/100 km</option>\n';
    out += '<option value="4">Liters/km</option>\n';
    out += '<option value="5">Kilometers/Liter</option>\n';
    return out;
}


export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {
        
            // Miles/Gallon(US)
            case '1':
                switch (to) {

                    // Miles/Gallon(US)
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Miles/Gallon(UK)
                    case '2':
                        num = utils.dropZeros(fromText, 1.201065, 11);
                        break;
                    
                    // Liters/100 km
                    case '3':
                        num = utils.getPrecision(235.214583 / fromText, 11);
                        break;

                    // Liters/km
                    case '4':
                        num = utils.getPrecision(2.35214583 / fromText, 11);
                        break;

                    // Kilometers/Liter
                    case '5':
                        num = utils.getPrecision(fromText * 0.425099074, 9);
                        break;

                    default:
                        break;
                }
                break;

            // Miles/Gallon(UK)
            case '2':
                switch (to) {

                    // Miles/Gallon(US)
                    case '1':
                        num = utils.dropZeros(fromText, 0.8325978719, 11);
                        break;

                    // Miles/Gallon(UK)
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Liters/100 km
                    case '3':
                        num = utils.getPrecision(282.5364894 / fromText, 11);
                        break;

                    // Liters/km
                    case '4':
                        num = utils.getPrecision(2.825364894 / fromText, 11);
                        break;

                    // Kilometers/Liter
                    case '5':
                        num = utils.dropZeros(fromText, 0.3539365844, 9);
                        break;

                    default:
                        break;
                }
                break;
            
            // Liters/100 km
            case '3':
                switch (to) {

                    // Miles/Gallon(US)
                    case '1':
                        num = utils.getPrecision((235.2392798 / fromText), 11);
                        break;

                    // Miles/Gallon(UK)
                    case '2':
                        num = utils.getPrecision((282.5364894 / fromText));
                        break;
                    
                    // Liters/100 km
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Liters/km
                    case '4':
                        num = utils.dropZeros(fromText, 0.01);
                        break;

                    // Kilometers/Liter
                    case '5':
                        num = utils.getPrecision(100 / fromText);
                        break;

                    default:
                        break;
                }
                break;

            // LIters/km
            case '4':
                switch (to) {

                    // Miles/Gallon(US)
                    case '1':
                        // num = utils.dropZeros(fromText, 2.352145833);
                        num = utils.getPrecision((2.352392798 / fromText), 11);
                        break;

                    // Miles/Gallon(UK)
                    case '2':
                        // num = utils.dropZeros(fromText, 1.2009499255398, 11);
                        num = utils.getPrecision((2.825364894 / fromText));
                        break;
                    
                    // Liters/100 km
                    case '3':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Liters/km
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Kilometers/Liter
                    case '5':
                        num = utils.getPrecision(1 / fromText, 9);
                        break;

                    default:
                        break;
                }
                break;
            
            // Kilometers/Liter
            case '5':
                switch (to) {

                    // Miles/Gallon(US)
                    case '1':
                        num = utils.dropZeros(fromText, 2.352392798);
                        break;

                    // Miles/Gallon(UK)
                    case '2':
                        num = utils.dropZeros(fromText, 2.825364894, 11);
                        break;
                    
                    // Liters/100 km
                    case '3':
                        num = utils.getPrecision(100 / fromText, 11);
                        break;

                    // Liters/km
                    case '4':
                        num = utils.getPrecision(1 / fromText, 11);
                        break;

                    // Kilometers/Liter
                    case '5':
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