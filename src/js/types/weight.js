import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Gram</option>\n';
    out += '<option value="2">Kilogram</option>\n';
    out += '<option value="3">Milligram</option>\n';
    out += '<option value="4">Ounce</option>\n';
    out += '<option value="5">Pound</option>\n';
    out += '<option value="6">Stone</option>\n';
    out += '<option value="7">Short Ton(US)</option>\n';
    out += '<option value="8">Long Ton(UK)</option>\n';
    out += '<option value="9">Metric Ton</option>\n';
    out += '<option value="10">Caret</option>\n';
    return out;
}

export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {

            // Gram
            case '1':
                switch (to) {

                    // Gram
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 0.001, 7);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 0.03527396195, 9);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 0.002204622622, 9);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 0.0001574730444, 9);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 0.000001102311311, 10);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000009842065276, 10);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 0.000001, 7);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 5);
                        break;

                    default:
                        break;
                }

                break

            // KiloGram
            case '2':
                switch (to) {

                    // Gram
                    case '1':
                         num = utils.dropZeros(fromText, 1000);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 1000000);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 35.27396195, 11);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 2.204622622, 11);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 0.1574730444, 11);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 0.001102311311, 11);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0009842065276, 11);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 0.001);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 5000);
                        break;

                    default:
                        break;
                }

                break;

            // MilloGram
            case '3':
                switch (to) {

                    // Gram
                    case '1':
                        num = utils.dropZeros(fromText, 0.001);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 0.000001, 9);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 0.00003527396195, 9);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 0.000002204622622, 9);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 0.000000157473044, 9);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 0.000000001102311311, 9);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000000009842065276, 15);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 0.000000001, 15);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 0.005);
                        break;

                    default:
                        break;

                }

                break;

            // Ounce
            case '4':
                switch (to) {

                    // Gram
                    case '1':
                        num = utils.dropZeros(fromText, 28.34952312, 11);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 0.02834952312, 11);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 28349.52312, 12);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 0.0625);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 0.004464285714);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 0.00003125);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.00002790178571);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 0.00002834952313);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 141.7476156);
                        break;

                    default:
                        break;

                }

                break

            // Pound
            case '5':
                switch (to) {

                    // Gram
                    case '1':
                        num = utils.dropZeros(fromText, 453.59237);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 0.45359237);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 453592.37);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 16);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 0.07142857143);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 0.0005);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0004464285714);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 0.00045359237);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 2267.96185);
                        break;
                
                    default:
                        break;
                }

                break;

            // Stone
            case '6':
                switch (to) {

                    // Gram
                    case '1':
                        num = utils.dropZeros(fromText, 6350.29318);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 6.35029318);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 63501293.18);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 224);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 14);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = fromText * 0.007;
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.00625);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 0.00635029318);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 31751.4659);
                        break;
                    
                    default:
                        break;

                }

                break;

            // Short Ton(US)
            case '7':
                switch (to) {

                    // Gram
                    case '1':
                         num = utils.dropZeros(fromText, 907184.74);
                         break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 907.18474);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 907184740);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 32000);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 2000);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 142.8571428);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.8928571428);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 0.90718474);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 4535923.7);
                        break;
                    
                    default:
                        break;
    
                }

                break

            // Long Ton(UK)
            case '8':
                switch (to) {

                    // Gram
                    case '1':
                        num = utils.dropZeros(fromText, 1016046.909);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 1016.046909);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 1016046909);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 35840);
                         break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 2240);
                         break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 160);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 1.12, 10);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 1.016046909);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 5080234.544);
                        break;

                    default:
                        break;

                }

                break;

            // Metric Ton
            case '9':
                switch (to) {

                    // Gram
                    case '1':
                        num = utils.dropZeros(fromText, 1000000);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 1000);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 1000000000);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 35273.96194);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 2204.622621);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 157.4730444);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 1.10231131);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.9842065276);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 5000000);
                        break;

                    default:
                        break;

                }

                break;

            // Carat
            case '10':
                switch (to) {

                    // Gram
                    case '1':
                        num = utils.dropZeros(fromText, 0.2, 4);
                        break;

                    // KiloGram
                    case '2':
                        num = utils.dropZeros(fromText, 0.0002, 4);
                        break;
                    
                    // MilliGram
                    case '3':
                        num = utils.dropZeros(fromText, 200);
                        break;

                    // Ounce
                    case '4':
                        num = utils.dropZeros(fromText, 0.00705479, 7);
                        break;
                        
                    // Pound
                    case '5':
                        num = utils.dropZeros(fromText, 0.000440925, 7);
                        break;

                    // Stone
                    case '6':
                        num = utils.dropZeros(fromText, 0.00003149460888, 9);
                        break;
                    
                    // Short Ton(US)
                    case '7':
                        num = utils.dropZeros(fromText, 0.0000002204622622, 15);
                        break;

                    // Long Ton(UK)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000001968413055, 15);
                        break;
                    
                    // Metric Ton
                    case '9':
                        num = utils.dropZeros(fromText, 0.0000002, 8);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    default:
                        break;

                }

                break;
        }
    }

    // Det the answer
    document.getElementById('answer').value = num;
}