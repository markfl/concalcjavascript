import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">BTU/h</option>\n';
    out += '<option value="2">Horse Power</option>\n';
    out += '<option value="3">Kilowatt</option>\n';
    out += '<option value="4">Watt</option>\n';
    out += '<option value="5">Ton of Refrigeration</option>\n';
    return out;
}


export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {
        
            // BTU/h
            case '1':
                switch (to) {

                    // BTU/h
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Horse Power
                    case '2':
                        num = utils.dropZeros(fromText, 0.0003984656256, 11);
                        break;
                    
                    // Kilowatt
                    case '3':
                        num = utils.dropZeros(fromText, 0.0002930710703, 11);
                        break;

                    // Watt
                    case '4':
                        num = utils.dropZeros(fromText, 0.2930710703, 11);
                        break;

                    // Ton of Refrigeration
                    case '5':
                        num = utils.dropZeros(fromText, 0.00008333333336, 11);
                        break;

                    default:
                        break;
                }
                break;

            // Horse Power
            case '2':
                switch (to) {

                    // BTU/h
                    case '1':
                        num = utils.dropZeros(fromText, 2509.626768, 11);
                        break;

                    // Horse Power
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Kilowatt
                    case '3':
                        num = utils.dropZeros(fromText, 0.7354990028, 11);
                        break;

                    // Watt
                    case '4':
                        num = utils.dropZeros(fromText, 735.4990028, 11);
                        break;

                    // Ton of Refrigeration
                    case '5':
                        num = utils.dropZeros(fromText, 0.2091355641, 11);
                        break;

                    default:
                        break;
                }
                break;
            
            // Kilowatt
            case '3':
                switch (to) {

                    // BTU/h
                    case '1':
                        num = utils.dropZeros(fromText, 3412.141632);
                        break;

                    // Horse Power
                    case '2':
                        num = utils.dropZeros(fromText, 1.35962115);
                        break;
                    
                    // Kilowatt
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Watt
                    case '4':
                        num = utils.dropZeros(fromText, 1000);
                        break;

                    // Ton of Refrigeration
                    case '5':
                        num = utils.dropZeros(fromText, 0.2843451361, 11);
                        break;

                    default:
                        break;
                }
                break;

            // Watt
            case '4':
                switch (to) {

                    // BTU/h
                    case '1':
                        num = utils.dropZeros(fromText, 3.412141632, 11);
                        break;

                    // Horse Power
                    case '2':
                        num = utils.dropZeros(fromText, 0.00135962115, 11);
                        break;
                    
                    // Kilowatt
                    case '3':
                        num = utils.dropZeros(fromText, 0.001);
                        break;

                    // Watt
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Ton of Refrigeration
                    case '5':
                        num = utils.dropZeros(fromText, 0.0002843451361, 11);
                        break;

                    default:
                        break;
                }
                break;
            
            // Ton of Refrigeration
            case '5':
                switch (to) {

                    // BTU/h
                    case '1':
                        if ((fromText * 1) === 1) {
                            num = utils.dropZeros(fromText, 12000);
                        } else {
                            num = utils.dropZeros(fromText, 11999.999995, 11);;
                        }
                        
                        break;

                    // Horse Power
                    case '2':
                        num = utils.dropZeros(fromText, 4.781587506, 11);
                        break;
                    
                    // Kilowatt
                    case '3':
                        num = utils.dropZeros(fromText, 3.516852842, 11);
                        break;

                    // Watt
                    case '4':
                        num = utils.dropZeros(fromText, 3516.852842, 11);
                        break;

                    // Ton of Refrigeration
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