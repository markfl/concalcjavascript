import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Kilometer/Hour</option>\n';
    out += '<option value="2">Miles/Second</option>\n';
    out += '<option value="3">Miles/Hour</option>\n';
    out += '<option value="4">Feet/Minute</option>\n';
    out += '<option value="5">Feet/Second</option>\n';
    out += '<option value="6">Knot</option>\n';
    out += '<option value="7">Speed of Light</option>\n';
    out += '<option value="8">Speed of Sound(Air)</option>\n';
    out += '<option value="9">Speed of Sound(Water)</option>\n';
    return out;
}

export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {

            // Kilometer/Hour
            case '1':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 0.2777777778, 11);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 0.6213711922, 11);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 54.68066492, 11);
                        break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 0.9113444153, 11);
                        break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 0.5399568035, 11);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 0.0000000009265669311, 11);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0008093758094, 11);
                        break;
                    
                    // Speed of Sound(Water)
                    case '9':
                        num = utils.dropZeros(fromText, 0.000187181791, 11);
                        break;

                    default:
                        break;
                }

                break

            // Miles/Second
            case '2':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                         num = utils.dropZeros(fromText, 3.6);
                        break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 2.236936292, 11);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 196.8503937, 11);
                        break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 3.280839895, 11);
                        break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 1.943844492, 11);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 0.000000003335640952, 11);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 0.002913752914, 11);
                        break;
                    
                    // Speed of Sound(Water)
                    case '9':
                        num = utils.dropZeros(fromText, 0.0006738544474, 11);
                        break;

                    default:
                        break;
                }

                break;

            // Miles/Hour
            case '3':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                        num = utils.dropZeros(fromText, 1.609344, 11);
                        break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 0.44704, 9);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 88);
                        break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 1.466666667, 9);
                        break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 0.8689762419, 11);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 0.000000001491164931, 15);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 0.001302564103, 15);
                        break;
                    
                    // Speed of Sound(Water)
                    case '9':
                        num = utils.dropZeros(fromText, 0.0003012398922, 15);
                        break;

                    // Carat
                    case '10':
                        num = utils.dropZeros(fromText, 0.005);
                        break;

                    default:
                        break;

                }

                break;

            // Feet/Minute
            case '4':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                        num = utils.dropZeros(fromText, 0.018288, 11);
                        break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 0.00508, 11);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 0.01136363636, 12);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 0.01666666667, 11);
                        break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 0.009874730022, 11);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 0.00000000001694505604, 15);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000148018648, 15);
                        break;
                    
                    // Speed of Sound(Water)
                    case '9':
                        num = utils.dropZeros(fromText, 0.000003423180593, 15);
                        break;

                    default:
                        break;

                }

                break

            // Feet/Second
            case '5':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                        num = utils.dropZeros(fromText, 1.09728, 9);
                        break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 0.3048, 15);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 0.6818181818, 15);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 60);
                        break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 0.5924838013, 15);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 0.000000001016703362, 19);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0008881118881, 15);
                        break;
                    
                    // Speed of Sound(Water)
                    case '9':
                        num = utils.dropZeros(fromText, 0.0002053608356, 15);
                        break;

                    default:
                        break;
                }

                break;

            // Knot
            case '6':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                        num = utils.dropZeros(fromText, 1.852, 15);
                        break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 0.5144444444);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 1.150779448, 15);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 101.2685914, 15);
                        break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 1.687809857,15);
                        break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 0.000000001716001956, 19);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 0.001498963999, 15);
                        break;
                    
                    // Speed of Sound(Water)
                    case '9':
                        num = utils.dropZeros(fromText, 0.0003466606768, 15);
                        break;
                   
                    default:
                        break;

                }

                break;

            // Speed of Light
            case '7':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                         num = utils.dropZeros(fromText, 1079252849, 15);
                         break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 299792458, 15);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 670616629.4, 15);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 59014263390, 15);
                        break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 983571056.4, 15);
                        break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 582749918.4, 15);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 873521.148, 15);
                        break;
                    
                    // Speed of Sound(Water)
                    case '9':
                        num = utils.dropZeros(fromText, 202016.4811, 15);
                         break;
                    
                    default:
                        break;
    
                }

                break

            // Speed of Sound(Air)
            case '8':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                        num = utils.dropZeros(fromText, 1235.52);
                        console.log(num + " at 441");
                        break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 343.2);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 767.7165354, 11);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 67559.05512, 11);
                         break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 1125.984252, 11);
                         break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 667.1274298, 11);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 0.000001144791975, 15);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 1);
                         break;
                    
                    // Speed of Sound(Water)
                    case '9':
                        num = utils.dropZeros(fromText, 0.2312668464, 15);
                        break;

                    default:
                        break;

                }

                break;

            // Speed of Sound(Water)
            case '9':
                switch (to) {

                    // Kilometer/Hour
                    case '1':
                        num = utils.dropZeros(fromText, 5342.4, 11);
                        break;

                    // Miles/Second
                    case '2':
                        num = utils.dropZeros(fromText, 1484);
                        break;
                    
                    // Miles/Hour
                    case '3':
                        num = utils.dropZeros(fromText, 3319.613457, 11);
                        break;

                    // Feet/Minute
                    case '4':
                        num = utils.dropZeros(fromText, 292125.9843, 11);
                        break;
                        
                    // Feet/Second
                    case '5':
                        num = utils.dropZeros(fromText, 4868.766404, 11);
                        break;

                    // Knot
                    case '6':
                        num = utils.dropZeros(fromText, 2884.665227, 11);
                        break;
                    
                    // Speed of Light
                    case '7':
                        num = utils.dropZeros(fromText, 0.000004950091173, 11);
                        break;

                    // Speed of Sound(Air)
                    case '8':
                        num = utils.dropZeros(fromText, 4.324009324, 11);
                        break;
                    
                    // Speed of Sound(Water)
                    case '9':
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