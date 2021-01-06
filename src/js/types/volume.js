import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Cubic Meter</option>\n';
    out += '<option value="2">Liter(Cubic dm)</option>\n';
    out += '<option value="3">Deciliter</option>\n';
    out += '<option value="4">Centiliter</option>\n';
    out += '<option value="5">Milliliter(cc)</option>\n';
    out += '<option value="6">Cubic Millimeter</option>\n';
    out += '<option value="7">Tablespoon(net)</option>\n';
    out += '<option value="8">Teaspoon(net)</option>\n';
    out += '<option value="9">Cubic Yard</option>\n';
    out += '<option value="10">Cubic Foot</option>\n';
    out += '<option value="11">Cubic Inch</option>\n';
    out += '<option value="12">US Bushel</option>\n';
    out += '<option value="13">US Barrel</option>\n';
    out += '<option value="14">US Liquid Gallon</option>\n';
    out += '<option value="15">US Dry Gallon</option></option>\n';
    out += '<option value="16">US Fluid Ounce</option></option>\n';
    out += '<option value="17">US Pint</option></option>\n';
    out += '<option value="18">US Quart</option></option>\n';
    out += '<option value="19">US Tablespoon</option></option>\n';
    out += '<option value="20">US Teaspoon</option></option>\n';
    out += '<option value="21">US Cup</option></option>\n';
    out += '<option value="22">UK Barrel</option></option>\n';
    out += '<option value="23">UK Gallon</option></option>\n';
    out += '<option value="24">UK Fluid Once</option></option>\n';
    out += '<option value="25">UK Pint</option></option>\n';
    out += '<option value="26">UK Quart</option></option>\n';
    return out;
}

export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 
        
        switch (from) {

            // Cubic Meter
            case '1':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 1000);
                        break;
                    
                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 10000);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 100000);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 1000000);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 1000000000);
                        break;
                    
                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 66666.66667, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                         num = utils.dropZeros(fromText, 200000);
                        break;
                    
                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 1.307950619, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 35.31466672, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 61.02374409, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 28.37759326, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 6.28981077, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 264.1720524, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 227.0207461, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 33814.0227, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 2113.376419, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 1056.688209, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 67628.0454, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 202884.1362, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 4226.752838, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 6.110256897, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 219.9692483, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 35195.07973, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 1759.753986, 11);
                        break;

                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 879.8769932, 11);
                        break;

                    default:
                        break;
                }

                break

            // Liter(Cubic dm)
            case '2':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.001);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 10);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 100);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 1000);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 1000000);
                        break;
                    
                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 66.66666667, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                         num = utils.dropZeros(fromText, 200);
                        break;
                    
                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.001307950619, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.03531466672, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 61.02374409, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.02837759326, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.00628981077, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.2641720524, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.2270207461, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 33.8140227, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 2.113376419, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 1.056688209, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 67.6280454, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 202.8841362, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 4.226752838, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.006110256897, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.2199692483, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 35.19507973, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 1.759753986, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.8798769932, 11);
                        break;

                    default:
                        break;
                }
                break;

            // Deciliter
            case '3':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.0001, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.1);
                        break;
                    
                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 10);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 100000);
                        break;
                    
                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 6.666666667, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                         num = utils.dropZeros(fromText, 20);
                        break;
                    
                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.0001307950619, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.003531466672, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 6.102374409, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.002837759326, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.000628981077, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.02641720524, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.02270207461, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 3.38140227, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.2113376419, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.1056688209, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 6.76280454, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 20.28841362, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 0.4226752838, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.0006110256897, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.02199692483, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 3.519507973, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.1759753986, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.08798769932, 11);
                        break;

                    default:
                        break;

                }

                break;

            // Centiliter
            case '4':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.00001, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.01);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.1);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 10);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 10000);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 0.6666666667, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                        num = utils.dropZeros(fromText, 2);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.00001307950619, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.0003531466672, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.6102374409, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.0002837759326, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.0000628981077, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.002641720524, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.002270207461, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.338140227, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.02113376419, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.01056688209, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 0.676280454, 11);
                        break;

                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 2.028841362, 11);
                        break;

                    // US Cup
                    case '21':
                        num = utils.dropZeros(fromText, 0.04226752838, 11);
                        break;

                    // UK Barrel
                    case '22':
                        num = utils.dropZeros(fromText, 0.00006110256897, 11);
                        break;

                    // UK Gallon
                    case '23':
                        num = utils.dropZeros(fromText, 0.002199692483, 11);
                        break;

                    // UK Fluid Once
                    case '24':
                        num = utils.dropZeros(fromText, 0.3519507973, 11);
                        break;

                    // UK Pint
                    case '25':
                        num = utils.dropZeros(fromText, 0.01759753986, 11);
                        break;

                    // UK Quart
                    case '26':
                        num = utils.dropZeros(fromText, 0.008798769932, 11);
                        break;

                    default:
                        break;
                }

                break

            // Milliliter(cc)
            case '5':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.000001, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.001);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.01);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 0.1);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 1000);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 0.06666666667, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                        num = utils.dropZeros(fromText, 0.2);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.000001307950619, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.00003531466672, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.06102374409, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.00002837759326, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.00000628981077, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.0002641720524, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.0002270207461, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.0338140227, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.002113376419, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.001056688209, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 0.0676280454, 11);
                        break;

                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 0.2028841362, 11);
                        break;

                    // US Cup
                    case '21':
                        num = utils.dropZeros(fromText, 0.004226752838, 11);
                        break;

                    // UK Barrel
                    case '22':
                        num = utils.dropZeros(fromText, 0.000006110256897, 11);
                        break;

                    // UK Gallon
                    case '23':
                        num = utils.dropZeros(fromText, 0.0002199692483, 11);
                        break;

                    // UK Fluid Once
                    case '24':
                        num = utils.dropZeros(fromText, 0.03519507973, 11);
                        break;

                    // UK Pint
                    case '25':
                        num = utils.dropZeros(fromText, 0.001759753986, 11);
                        break;

                    // UK Quart
                    case '26':
                        num = utils.dropZeros(fromText, 0.0008798769932, 11);
                        break;

                    default:
                        break;

                }

                break;

            // Cubic Millimeter
            case '6':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.000000001, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.000001);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.00001);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 0.0001);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 0.001);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 0.00006666666667, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                        num = utils.dropZeros(fromText, 0.0002);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.000000001307950619, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.00000003531466672, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.00006102374409, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.00000002837759326, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.00000000628981077, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.0000002641720524, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.0000002270207461, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.0000338140227, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.000002113376419, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.000001056688209, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 0.0000676280454, 11);
                        break;

                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 0.0002028841362, 11);
                        break;

                    // US Cup
                    case '21':
                        num = utils.dropZeros(fromText, 0.000004226752838, 11);
                        break;

                    // UK Barrel
                    case '22':
                        num = utils.dropZeros(fromText, 0.000000006110256897, 11);
                        break;

                    // UK Gallon
                    case '23':
                        num = utils.dropZeros(fromText, 0.0000002199692483, 11);
                        break;

                    // UK Fluid Once
                    case '24':
                        num = utils.dropZeros(fromText, 0.00003519507973, 11);
                        break;

                    // UK Pint
                    case '25':
                        num = utils.dropZeros(fromText, 0.000001759753986, 11);
                        break;

                    // UK Quart
                    case '26':
                        num = utils.dropZeros(fromText, 0.0000008798769932, 11);
                        break;

                    default:
                        break;
                }

                break;

            // Tablespoon(net)
            case '7':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.000015, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.015, 11);
                        break;
                    
                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.15, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 1.5, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 15000);
                        break;
                    
                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Teaspoon(net)
                    case '8':
                         num = utils.dropZeros(fromText, 3);
                        break;
                    
                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.00001961925929, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.0005297200008, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.9153561614, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.0004256638989, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.00009434716156, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.003962580785, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.003405311191, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.5072103405, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.03170064628, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.01585032314, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 1.014420681, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 3.043262043, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 0.06340129257, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.00009165385346, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.003299538724, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 0.5279261959, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.0263963098, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.0131981549, 11);
                        break;

                    default:
                        break;

                }

                break

            // Teaspoon(net)
            case '8':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.000005, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.005, 11);
                        break;
                    
                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.05, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 0.5, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 5);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 5000);
                        break;
                    
                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 0.3333333333, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                         num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.000006539753096, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.0001765733336, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.3051187205, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.0001418879663, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.00003144905385, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.001320860262, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.00113510373, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.1690701135, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.01056688209, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.005283441047, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 0.338140227, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 1.014420681, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 0.02113376419, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.00003055128449, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.001099846241, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 0.1759753986, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.008798769932, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.004399384966, 11);
                        break;

                    default:
                        break;

                }

                break;

            // Cubic Yard
            case '9':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.764554858, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 764.554858, 11);
                        break;
                    
                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 7645.54858, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 76455.4858, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 764554.858, 11);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 764554858);
                        break;
                    
                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 50970.32387, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 152910.9716, 11);
                        break;
                    
                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 27);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 46656);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 21.69622678, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 4.80890538, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 201.974026, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 173.5698143, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 25852.67532, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 1615.792208, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 807.8961039, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 51705.35065, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 155116.0519, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 3231.584416, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 4.671626594, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 168.1785574, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 26908.56918, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 1345.428459, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 672.7142296, 11);
                        break;

                    default:
                        break;

                }

                break;

            // Cubic Foot
            case '10':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.02831684659, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 28.31684659, 11);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 283.1684659, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 2831.684659, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 28316.84659, 11);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 28316846.59, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 1887.789773, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 5663.369318, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.03703703704, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 1728);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.8035639549, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.1781076067, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 7.480519481, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 6.42851164, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 957.5064935, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 59.84415584, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 29.92207792, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 1915.012987, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 5745.038961, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 119.6883117, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.1730232072, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 6.228835459, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 996.6136735, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 49.83068367, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 24.91534184, 11);
                        break;

                    default:
                        break;
                }

                break;

            // Cubic Inch
            case '11':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.000016387064, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.016387064, 11);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.16387064, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 1.6387064, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 16.387064, 11);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 16387.064, 11);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 1.092470933, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 3.2774128, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.00002143347051, 15);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.0005787037037, 15);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.0004650254369, 15);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.0001030715316, 15);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.004329004329, 15);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.003720203495, 15);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.5541125541, 15);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.03463203463, 15);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.01731601732, 15);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 1.108225108, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 3.324675325, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 0.06926406926, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.0001001291708, 15);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.00360465015, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 0.576744024, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.0288372012, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.0144186006, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Bushel
            case '12':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.035239070178, 12);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 35.239070178, 12);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 352.39070178, 12);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 3523.9070178, 12);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 35239.070178, 12);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 35239070.178, 12);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 2349.271344, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 7047.814033, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.04609096365, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 1.244456019, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 2150.42, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.2216470831, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 9.309177489, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 8);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 1191.574719, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 74.47341991, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 37.23670996, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 2383.149437, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 7149.448312, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 148.9468398, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.2153197715, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 7.751511775, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 1240.241884, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 62.0120942, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 31.0060471, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Barrel
            case '13':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.1589872949, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 158.9872949, 11);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 1589.872949, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 15898.72949, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 158987.2949, 11);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 158987294.9, 11);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 10599.153, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 31797.45899, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.2079475309, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 5.614583333, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 9702);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 4.511676789, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 42);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 36.09341431, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 5376);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 336);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 168);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 10752);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 32256);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 672);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.9714532154, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 34.97231575, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 5595.570521, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 279.778526, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 139.889263, 11);
                        break;

                    default:
                        break;                    
                }

                break;

            // US Liquid Gallon
            case '14':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.003785411784, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 3.785411784, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 37.85411784, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 378.5411784, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 3785.411784, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 3785411.784, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 252.3607856, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 757.0823568, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.004951131687, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.1336805556, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 231);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.1074208759, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.02380952381);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.8593670074, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 128);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 8);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 4);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 256);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 768);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 16);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.02312983846, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.8326741846, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 133.2278695, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 6.661393477, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 3.330696739, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Dry Gallon
            case '15':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.004404883771, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 4.404883771, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 44.04883771, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 440.4883771, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 4404.883771, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 4404883.771, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 293.6589181, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 880.9767542, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.005761370456, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.1555570023, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 268.8025, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.125, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.02770588538, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 1.163647186, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 148.9468398, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 9.309177489, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 4.654588745, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 297.8936797, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 893.681039, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 18.61835498, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.02691497144, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.9689389719, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 155.0302355, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 7.751511775, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 3.875755888, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Fluid Once
            case '16':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.00002957352956, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.02957352956, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.2957352956, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 2.957352956, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 29.57352956, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 29573.52956, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 1.971568638, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 5.914705913, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.00003868071631, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.00104437934, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 1.8046875, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.0008392255931, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.0001860119048, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.0078125, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.006713804745, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.0625, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.03125, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 2);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 6);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 0.125, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.000180701863, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.006505267067, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 1.040842731, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.05204213654, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.02602106827, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Pint
            case '17':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.000473176473, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.473176473, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 4.73176473, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 47.3176473, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 473.176473, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 473176.473, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 31.5450982, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 94.6352946, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.0006188914609, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.01671006944, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 28.875, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.01342760949, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.002976190476, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.125, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.1074208759, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 16);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.5, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 32);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 96);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 2);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.002891229808, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.1040842731, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 16.65348369, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.8326741846, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.4163370923, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Quart
            case '18':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.000946352946, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.946352946, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 9.46352946, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 94.6352946, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 946.352946, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 946352.946, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 63.0901964, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 189.2705892, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.001237782922, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.03342013889, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 57.75, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.02685521898, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.005952380952, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.25, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.2148417518, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 32);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 2);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 64);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 192);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 4);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.005782459616, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.2081685462, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 33.30696739, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 1.665348369, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.8326741846, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Tablespoon
            case '19':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.00001478676478, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.01478676478, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.1478676478, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 1.478676478, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 14.78676478, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 14786.76478, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 0.9857843188, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 2.957352956, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.00001934035815, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.0005221896701, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.90234375, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.0004196127966, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.00009300595238, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.00390625, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.003356902373, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.5, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.03125, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.015625, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 3);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 0.0625, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.00009035093149, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.003252633534, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 0.5204213654, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.02602106827, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.01301053413, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Teaspoon
            case '20':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.000004928921594, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.004928921594, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.04928921594, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 0.4928921594, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 4.928921594, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 4928.921594, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 0.3285947729, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 0.9857843188, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.000006446786051, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.0001740632234, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 0.30078125, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.0001398709322, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.00003100198413, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.00130208333, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.001118967458, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.1666666667, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.01041666667, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText,0.005208333333, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 0.3333333333, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 1);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 0.02083333333, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.00003011697716, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.001084211178, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 0.1734737885, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.008673689423, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.004336844712, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // US Cup
            case '21':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.0002365882365, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText,  0.2365882365, 11);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 2.365882365, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 23.65882365, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 236.5882365, 11);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 236588.2365, 11);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 15.7725491, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 47.3176473, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.0003094457305, 15);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.008355034722, 15);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 14.4375, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.006713804745, 15);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.001488095238, 15);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.0625, 15);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.05371043796, 15);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 8);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.5, 15);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.25, 15);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 16);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 48);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 1);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.001445614904, 15);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.05204213654, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 8.326741846, 11);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.4163370923, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.2081685462, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // UK Barrel
            case '22':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.16365924, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 163.65924, 11);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 1636.5924, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 16365.924, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 163659.24, 11);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 163659240, 11);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 10910.616, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 32731.848, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.2140582043, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 5.779571516, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 9987.09958, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 4.644255346, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 1.02938565, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 43.23419732, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 37.15404277, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 5533.977257, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 345.8735785, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 172.9367893, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 11067.95451, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 33203.86354, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 691.7471571, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 1);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 36);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 5760);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 288);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 144);
                        break;

                    default:
                        break;
                    
                }

                break;

            // UK Gallon
            case '23':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.00454609, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 4.54609, 11);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 45.4609, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 454.609, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 4546.09, 11);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 4546090);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 303.0726667, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 909.218, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.005946061231, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.1605436532, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 277.4194328, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.1290070929, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.02859404585, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 1.200949925, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 1.032056743, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 153.7215905, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 9.607599404, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 4.803799702, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 307.4431809, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 922.3295428, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 19.21519881, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.02777777778, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 1);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 160);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 8);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 4);
                        break;

                    default:
                        break;                    
                }

                break;

            // UK Fluid Once
            case '24':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.0000284130625, 11);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.0284130625, 11);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 0.284130625, 11);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 2.84130625, 11);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 28.4130625, 11);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 28413.0625, 11);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 1.894204167, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 5.6826125, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.00003716288269, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.001003397833, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 1.733871456, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.0008062943308, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.0001787127865, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.007505937034, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.006450354647, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 0.9607599404, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 0.06004749627, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.03002374814, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 1.921519881, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 5.764559642, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 0.1200949925, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.0001736111111, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.00625, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 1);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 0.05, 11);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.025, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

            // UK Pint
            case '25':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.00056826125, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 0.56826125, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 5.6826125, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 56.826125, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 568.26125, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 568261.25, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 37.88408333, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 113.65225, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.0007432576539, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.02006795665, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 34.6774291, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.01612588662, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.003574255731, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.1501187407, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.1290070929, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 19.21519881, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 1.200949925, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 0.6004749627, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 38.43039762, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 115.2911928, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 2.401899851, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.003472222222, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.125, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 20);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 0.5, 11);
                        break;

                    default:
                        break;
                    
                }

                break;

             // UK Quart
            case '26':
                switch (to) {

                    // Cubic Meter
                    case '1':
                        num = utils.dropZeros(fromText, 0.0011365225, 15);
                        break;

                    // Liter(Cubic dm)
                    case '2':
                        num = utils.dropZeros(fromText, 1.1365225, 15);
                        break;

                    // Deciliter
                    case '3':
                        num = utils.dropZeros(fromText, 11.365225, 15);
                        break;

                    // Centiliter
                    case '4':
                        num = utils.dropZeros(fromText, 113.65225, 15);
                        break;
                        
                    // Milliliter(cc)
                    case '5':
                        num = utils.dropZeros(fromText, 1136.5225, 15);
                        break;

                    // Cubic Millimeter
                    case '6':
                        num = utils.dropZeros(fromText, 1136522.5, 15);
                        break;

                    // Tablespoon(net)
                    case '7':
                        num = utils.dropZeros(fromText, 75.76816667, 11);
                        break;

                    // Teaspoon(net)
                    case '8':
                            num = utils.dropZeros(fromText, 227.3045, 11);
                        break;

                    // Cubic Yard
                    case '9':
                        num = utils.dropZeros(fromText, 0.001486515308, 11);
                        break;

                    // Cubic Foot
                    case '10':
                        num = utils.dropZeros(fromText, 0.04013591331, 11);
                        break;

                    // Cubic Inch
                    case '11':
                        num = utils.dropZeros(fromText, 69.3548582, 11);
                        break;

                    // US Bushel
                    case '12':
                        num = utils.dropZeros(fromText, 0.03225177323, 11);
                        break;

                    // US Barrel
                    case '13':
                        num = utils.dropZeros(fromText, 0.007148511461, 11);
                        break;

                    // US Liquid Gallon
                    case '14':
                        num = utils.dropZeros(fromText, 0.3002374814, 11);
                        break;

                    // US Dry Gallon
                    case '15':
                        num = utils.dropZeros(fromText, 0.2580141859, 11);
                        break;

                    // US Fluid Once
                    case '16':
                        num = utils.dropZeros(fromText, 38.43039762, 11);
                        break;

                    // US Pint
                    case '17':
                        num = utils.dropZeros(fromText, 2.401899851, 11);
                        break;

                    // US Quart
                    case '18':
                        num = utils.dropZeros(fromText, 1.200949925, 11);
                        break;

                    // US Tablespoon
                    case '19':
                        num = utils.dropZeros(fromText, 76.86079523, 11);
                        break;
                    
                    // US Teaspoon
                    case '20':
                        num = utils.dropZeros(fromText, 230.5823857, 11);
                        break;

                     // US Cup
                     case '21':
                        num = utils.dropZeros(fromText, 4.803799702, 11);
                        break;

                     // UK Barrel
                     case '22':
                        num = utils.dropZeros(fromText, 0.006944444444, 11);
                        break;

                     // UK Gallon
                     case '23':
                        num = utils.dropZeros(fromText, 0.25, 11);
                        break;

                     // UK Fluid Once
                     case '24':
                        num = utils.dropZeros(fromText, 40);
                        break;

                     // UK Pint
                     case '25':
                        num = utils.dropZeros(fromText, 2);
                        break;
                    
                     // UK Quart
                     case '26':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    default:
                        break;
                    
                }

                break;                
            default:
                break;

        }
    }

    // Det the answer
    document.getElementById('answer').value = num;
}