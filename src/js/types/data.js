import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Bit</option>\n';
    out += '<option value="2">Byte</option>\n';
    out += '<option value="3">Kilybyte</option>\n';
    out += '<option value="4">Megabyte</option>\n';
    out += '<option value="5">Gigabyte</option>\n';
    out += '<option value="6">Terabyte</option>\n';
    return out;
}

export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {
        
            // Bit
            case '1':
                switch (to) {

                    // Bit
                    case '1':
                        console.log('from data');
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Byte
                    case '2':
                        console.log('from data');
                        num = utils.dropZeros(fromText, 0.125);
                        break;
                    
                    // Kilobyte
                    case '3':
                        num = utils.dropZeros(fromText, 0.0001220703125);
                        break;

                    // Megabyte
                    case '4':
                        num = utils.dropZeros(fromText, 0.0000001192092896);
                        break;
                        
                    // Gigabyt5e
                    case '5':
                        num = utils.dropZeros(fromText, 0.0000000001164153218);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 0.0000000000001136868377);
                        break;
                    
                    default:
                        break;

                }
                break;

            // Byte
            case '2':
                switch (to) {

                    // Bit
                    case '1':
                        num = utils.dropZeros(fromText, 8);
                        break;

                    // Byte
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Kilobyte
                    case '3':
                        num = utils.dropZeros(fromText, 0.0009765625, 11);
                        break;

                    // Megabyte
                    case '4':
                        num = utils.dropZeros(fromText, 0.0000009536743164, 9);
                        break;
                        
                    // Gigabyt5e
                    case '5':
                        num = utils.dropZeros(fromText, 0.0000000009313225746, 9);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 0.0000000000009094947018);
                        break;
                    
                    default:
                        break;

                }
                break;

            // Kilobyte
            case '3':
                switch (to) {

                    // Bit
                    case '1':
                        num = utils.dropZeros(fromText, 8192);
                        break;

                    // Byte
                    case '2':
                        num = utils.dropZeros(fromText, 1024);
                        break;
                    
                    // Kilobyte
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Megabyte
                    case '4':
                        num = utils.dropZeros(fromText, 0.0009765625);
                        break;
                        
                    // Gigabyt5e
                    case '5':
                        num = utils.dropZeros(fromText, 0.0000009536743164);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 0.0000000009313225746);
                        break;
                    
                    default:
                        break;

                }
                break;

            // Gigabyte
            case '4':
                switch (to) {

                    // Bit
                    case '1':
                        num = utils.dropZeros(fromText, 8388608);
                        break;

                    // Byte
                    case '2':
                        num = utils.dropZeros(fromText, 1048576);
                        break;
                    
                    // Kilobyte
                    case '3':
                        num = utils.dropZeros(fromText, 1024);
                        break;

                    // Megabyte
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;
                        
                    // Gigabyt5e
                    case '5':
                        num = utils.dropZeros(fromText, 0.0009765625, 9);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 0.0000009536743164, 11);
                        break;
                    
                    default:
                        break;

                }
                break;
            
            // Gigabyte
            case '5':
                switch (to) {

                    // Bit
                    case '1':
                        num = utils.dropZeros(fromText, 8589934592);
                        break;

                    // Byte
                    case '2':
                        num = utils.dropZeros(fromText, 1073741824);
                        break;
                    
                    // Kilobyte
                    case '3':
                        num = utils.dropZeros(fromText, 1048576);
                        break;

                    // Megabyte
                    case '4':
                        num = utils.dropZeros(fromText, 1024);
                        break;
                        
                    // Gigabyt5e
                    case '5':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 0.0009765625);
                        break;
                    
                    default:
                        break;

                }
                break;

            // Terabyte
            case '6':
                switch (to) {

                    // Bit
                    case '1':
                        num = utils.dropZeros(fromText, 8796093022000);
                        break;

                    // Byte
                    case '2':
                        num = utils.dropZeros(fromText, 1099511628000);
                        break;
                    
                    // Kilobyte
                    case '3':
                        num = utils.dropZeros(fromText, 1073741824);
                        break;

                    // Megabyte
                    case '4':
                        num = utils.dropZeros(fromText, 1048576);
                        break;
                        
                    // Gigabyt5e
                    case '5':
                        num = utils.dropZeros(fromText, 1024);
                        break;

                    // Square Centimeter
                    case '6':
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