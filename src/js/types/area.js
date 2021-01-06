import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Hectare</option>\n';
    out += '<option value="2">Are</option>\n';
    out += '<option value="3">Square Kilometer</option>\n';
    out += '<option value="4">Square Meter</option>\n';
    out += '<option value="5">Square Decimeter</option>\n';
    out += '<option value="6">Square Centimeter</option>\n';
    out += '<option value="7">Square Millimeter</option>\n';
    out += '<option value="8">Square Mile</option>\n';
    out += '<option value="9">Acre</option>\n';
    out += '<option value="10">Square Yard</option>\n';
    out += '<option value="11">Square Feet</option>\n';
    out += '<option value="12">Square Inch</option>\n';
    return out;
}


export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {
        
            // Hectare
            case '1':
                switch (to) {

                    // Hectare
                    case '1':
                        console.log('from area');
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Are
                    case '2':
                        console.log('from area');
                        num = utils.dropZeros(fromText, 100);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.01);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 10000);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 1000000);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 100000000);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 10000000000);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.003861021585, 10);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 2.47140153815);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 11959.90046);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 107639.1042);
                        break;

                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 15500031);
                        break;

                    default:
                        break;

                }
                break;

            // Are
            case '2':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.01);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.0001, 6);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 100);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 10000);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 1000000);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 1000000000);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.00003861021585, 15);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 0.0247140153815, 15);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 119.5990046);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 1076.391042);
                        break;
                
                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 155000.31);
                        break;

                    default:
                        break;
                }
                break;

            // Are
            case '3':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 10000);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 1000000);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 100000000);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 10000000000);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 1000000000000);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.3861021585, 10);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 247.1053815);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 1195990.046);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 10763910.42);
                        break;
                
                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 1550003100);
                        break;

                    default:
                        break;
                }
                break;

            // Square Meter
            case '4':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.0001, 9);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 0.01);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.000001, 11);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 10000);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 1000000);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000003861021585, 15);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 0.0002471053815);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 1.195990046);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 10.76391042);
                        break;
                
                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 1550.0031);
                        break;

                    default:
                        break;
                }
                break;
            
            // Square Decimeter
            case '5':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.000001, 11);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 0.0001, 11);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.00000001);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 0.01);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 100);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 10000);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.000000003861021585, 10);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 0.00000247140153815);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 0.01195990046);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 0.1076391042);
                        break;

                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 15.500031);
                        break;

                    default:
                        break;

                }
                break;

            // Square Centimeter
            case '6':
                switch (to) {
            
                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.00000001);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 0.000001, 11);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.0000000001, 11);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 0.0001, 11);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 0.01);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.00000000003861021585, 10);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 0.0000000247140153815);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 0.0001195990046);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 0.001076391042);
                        break;

                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 0.15500031);
                        break;

                    default:
                        break;

                }
                break;

            // Square millimeter
            case '7':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.0000000001);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 0.00000001);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.000000000001);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 0.000001);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 0.0001);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 0.01);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000000000003861021585, 10);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 0.000000000247140153815);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 0.000001195990046);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 0.00001076391042);
                        break;

                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 0.0015500031);
                        break;

                    default:
                        break;

                }
                break;

            // Square Mile
            case '8':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 258.998811);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 25899.8811);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 2.58998811, 11);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 2589988.11);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 258998811);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 25899881100);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 2589988110000);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 640);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 3097600);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 27878400);
                        break;
                
                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 4014489600);
                        break;

                    default:
                        break;
                }
                break;

            // Acre
            case '9':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.4046856422);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 40.46856422);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.004046856422);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 4046.856422);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 404685.6422);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 40468564.22);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 4046856422);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.0015625, 10);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 4840);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 43560);
                        break;
                
                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 6272640);
                        break;

                    default:
                        break;
                }
                break;

            // Square Yard
            case '10':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.000083612736);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 0.0083612736);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.00000083612736, 11);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 0.83612736);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 83.612736);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 8361.2736);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 836127.36);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000003228305785, 11);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 0.0002066115702);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 9);
                        break;
                
                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 1296);
                        break;

                    default:
                        break;
                }
                break;
            
            // Square Feet
            case '11':
                switch (to) {

                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.000009290304, 11);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 0.0009290304, 11);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.00000009290304, 11);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 0.09290304);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 9.290304);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 929.0304);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 92903.04);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.00000003587006428, 10);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 0.00002295684114);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 0.1111111111, 11);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Square Inch
                    case '12':
                        num = utils.dropZeros(fromText, 144);
                        break;

                    default:
                        break;

                }
                break;

            // Square Inch
            case '12':
                switch (to) {
            
                    // Hectare
                    case '1':
                        num = utils.dropZeros(fromText, 0.000000064516);
                        break;

                    // Are
                    case '2':
                        num = utils.dropZeros(fromText, 0.0000064516, 11);
                        break;
                    
                    // Square Kilometer
                    case '3':
                        num = utils.dropZeros(fromText, 0.00000000064516, 11);
                        break;

                    // Square Meter
                    case '4':
                        num = utils.dropZeros(fromText, 0.00064516, 11);
                        break;
                        
                    // Square Decimeter
                    case '5':
                        num = utils.dropZeros(fromText, 0.064516);
                        break;

                    // Square Centimeter
                    case '6':
                        num = utils.dropZeros(fromText, 6.4516);
                        break;
                    
                    // Square Millimeter
                    case '7':
                        num = utils.dropZeros(fromText, 645.16);
                        break;

                    // Square Mile
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000000002490976686);
                        break;
                    
                    // Acre
                    case '9':
                        num = utils.dropZeros(fromText, 0.0000001594225079, 11);
                        break;

                    // Square Yard
                    case '10':
                        num = utils.dropZeros(fromText, 0.0007716049383);
                        break;

                    // Square Feet
                    case '11':
                        num = utils.dropZeros(fromText, 0.006944444444);
                        break;

                    // Square Inch
                    case '12':
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