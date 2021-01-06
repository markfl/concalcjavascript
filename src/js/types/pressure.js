import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Atmosphere</option>\n';
    out += '<option value="2">Bar</option>\n';
    out += '<option value="3">Millibar</option>\n';
    out += '<option value="4">Inch Water[4 C]</option>\n';
    out += '<option value="5">Inch Mercury</option>\n';
    out += '<option value="6">Millimeter Mercury</option>\n';
    out += '<option value="7">MegaPascal</option>\n';
    out += '<option value="8">Kilo Pascal</option>\n';
    out += '<option value="9">Pascal(N/m2)</option>\n';
    out += '<option value="10">Pound/Sq Foot</option>\n';
    out += '<option value="11">Pound/Sq Inch</option>\n';
    return out;
}


export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {
        
            // Atmosphere
            case '1':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 1.01325, 9);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 1013.25, 9);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 406.793852, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 29.92125984, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 760);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.101325, 11);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 101.325, 11);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 101325);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 2116.216624, 11);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 14.69594878, 11);
                        break;

                    default:
                        break;

                }
                break;

            // Bar
            case '2':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.9869232667);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 1000);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 401.4743173, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 29.52998751, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 750.0616827, 11);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.1);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 100);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 100000);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 2088.543423, 11);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 14.50377377, 11);
                        break;

                    default:
                        break;
                }
                break;

            // Millibar
            case '3':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.0009869232667, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 0.001, 11);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 0.4014743173, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 0.02952998751, 11)
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 0.7500616827, 11)
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.0001, 11)
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 0.1, 11);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 2.088543423, 11)
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.01450377377, 11)
                        break;
                
                    default:
                        break;
                }
                break;

            // Inch Water[4 C]
            case '4':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.002458247575, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 0.002490819355, 11);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 2.490819355, 11);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 0.07355386443, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 1.868268157, 11);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.0002490819355, 11);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 0.2490819355, 11);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 249.0819355, 11);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 5.202184383, 11);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.03612628043, 11);
                        break;

                    default:
                        break;
                }
                break;
            
            // Inch Mercury
            case '5':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.03342105263, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 0.03386388158, 11);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 33.86388158, 11);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 13.59547874, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 25.4);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.003386388158, 11);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 3.386388158, 11);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 3386.388158, 11);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 70.72618717, 11);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.4911540775, 11);
                        break;

                    default:
                        break;

                }
                break;

            // Millimeter Mercury
            case '6':
                switch (to) {
            
                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.001315789474, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 0.001333223684, 11);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 1.333223684, 11);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 0.5352550684, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 0.03937007874, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.0001333223684, 11);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 0.1333223684, 11);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 133.3223684, 11);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 2.784495557, 11);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.0193367747, 11);
                        break;

                    default:
                        break;

                }
                break;

            // MegaPascal
            case '7':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 9.869232667, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 10);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 10000);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 4014.743173, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 295.2998751, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 7500.616827, 11);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 1000);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 1000000);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 20885.43423, 11);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 145.0377377, 11);
                        break;

                    default:
                        break;

                }
                break;

            // Kilo Pascal
            case '8':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.009869232667, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 0.01, 11);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 10);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 4.014743173, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 0.2952998751, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 7.500616827, 11);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.001, 11);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 1000);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 20.88543423, 11);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.1450377377, 11);
                        break;
                
                    default:
                        break;
                }
                break;

            // Pascal(N/m2)
            case '9':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.000009869232667, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 0.00001, 11);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 0.01, 11);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 0.004014743173, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 0.0002952998751, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 0.007500616827, 11);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.000001, 11);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 0.001, 11);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.02088543423, 11);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.0001450377377, 11);
                        break;
                
                    default:
                        break;
                }
                break;

            // Pound/Sq Foot
            case '10':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.000472541416, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 0.0004788025898, 11);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 0.4788025898, 11);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 0.1922269429, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 0.01413903449, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 0.3591314762, 11);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.00004788025898, 11);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 0.04788025898, 11);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 47.88025898, 11);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Pound/Sq Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.006944444444, 11);
                        break;
                
                    default:
                        break;
                }
                break;
            
            // Pound/Sq Inch
            case '11':
                switch (to) {

                    // Atmosphere
                    case '1':
                        num = utils.dropZeros(fromText, 0.06804596391, 11);
                        break;

                    // Bar
                    case '2':
                        num = utils.dropZeros(fromText, 0.06894757293, 11);
                        break;
                    
                    // Millibar
                    case '3':
                        num = utils.dropZeros(fromText, 68.94757293, 11);
                        break;

                    // Inch Water[4 C]
                    case '4':
                        num = utils.dropZeros(fromText, 27.68067977, 11);
                        break;
                        
                    // Inch Mercury
                    case '5':
                        num = utils.dropZeros(fromText, 2.036020967, 11);
                        break;

                    // Millimeter Mercury
                    case '6':
                        num = utils.dropZeros(fromText, 51.71493257, 11);
                        break;
                    
                    // MegaPascal
                    case '7':
                        num = utils.dropZeros(fromText, 0.006894757293, 11);
                        break;

                    // Kilo Pascal
                    case '8':
                        num = utils.dropZeros(fromText, 6.894757293, 11);
                        break;
                    
                    // Pascal(N/m2)
                    case '9':
                        num = utils.dropZeros(fromText, 6894.757293, 11);
                        break;

                    // Pound/Sq Foot
                    case '10':
                        num = utils.dropZeros(fromText, 144);
                        break;

                    // Pound/Sq Inch
                    case '11':
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