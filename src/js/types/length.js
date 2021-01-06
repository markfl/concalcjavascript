import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Kilometer</option>\n';
    out += '<option value="2">Meters</option>\n';
    out += '<option value="3">Decimeter</option>\n';
    out += '<option value="4">Centimeter</option>\n';
    out += '<option value="5">Millimeter</option>\n';
    out += '<option value="6">Mile</option>\n';
    out += '<option value="7">Yard</option>\n';
    out += '<option value="8">Feet</option>\n';
    out += '<option value="9">Inch</option>\n';
    out += '<option value="10">Nautical Mile</option>\n';
    out += '<option value="11">League</option>\n';
    out += '<option value="12">Furlong</option>\n';
    out += '<option value="13">Rod</option>\n';
    out += '<option value="14">Chain</option>\n';
    return out;
}

export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 
        
        switch (from) {

            // Kilometer
            case '1':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 1000);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 10000);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 100000);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 1000000);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.6213711922, 11);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 1093.613298, 11);
                        break;

                    // Feet
                    case '8':
                         num = utils.dropZeros(fromText, 3280.839895, 11);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 39370.07874, 11);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.5399568035, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.2071237307, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 4.970969538, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 198.8387815, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 49.70969538, 11);
                        break;

                    default:
                        break;
                }

                break

            // Meters
            case '2':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.001);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 10);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 100);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 1000);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.0006213711922, 11);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 1.093613298, 11);
                        break;

                    // Feet
                    case '8':
                         num = utils.dropZeros(fromText, 3.280839895, 11);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 39.37007874, 11);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.0005399568035, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.0002071237307, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.004970969538, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 0.1988387815, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 0.04970969538, 11);
                        break;

                    default:
                        break;
                }
                break;

            // Decimeter
            case '3':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.0001, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 0.1);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 10);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.00006213711922, 11);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 0.1093613298, 11);
                        break;

                    // Feet
                    case '8':
                         num = utils.dropZeros(fromText, 0.3280839895, 11);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 3.937007874, 11);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.00005399568035, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.00002071237307, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.0004970969538, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 0.01988387815, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 0.004970969538, 11);
                        break;

                    default:
                        break;

                }

                break;

            // Centimeter
            case '4':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.00001, 9);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 0.01);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 0.1);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 10);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.000006213711922, 11);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 0.01093613298, 11);
                        break;

                    // Feet
                    case '8':
                         num = utils.dropZeros(fromText, 0.03280839895, 11);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 0.3937007874, 11);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.000005399568035, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.000002071237307, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.00004970969538, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 0.001988387815, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 0.0004970969538, 11);
                        break;

                    default:
                        break;
                }

                break

            // Millimeter
            case '5':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.000001);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 0.001);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 0.01);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 0.1);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.0000006213711922, 11);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 0.001093613298, 11);
                        break;

                    // Feet
                    case '8':
                         num = utils.dropZeros(fromText, 0.003280839895, 11);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 0.03937007874, 11);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.0000005399568035, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.0000002071237307, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.000004970969538, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 0.0001988387815, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 0.00004970969538, 11);
                        break;

                    default:
                        break;

                }

                break;

            // Mile
            case '6':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 1.609344, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 1609.344, 11);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 16093.44, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 160934.4, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 1609344, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 1760);
                        break;

                    // Feet
                    case '8':
                         num = utils.dropZeros(fromText, 5280);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 63360);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.8689762419, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.3333333333, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 8);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 320);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 80);
                        break;

                    default:
                        break;
                }

                break;

            // Yard
            case '7':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.0009144, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 0.9144, 11);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 9.144, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 91.44, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 914.4, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.0005681818182, 11);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Feet
                    case '8':
                         num = utils.dropZeros(fromText, 3);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 36);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.0004937365011, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.0001893939394, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.004545454545, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 0.1818181818, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 0.0454545454545, 11);
                        break;

                    default:
                        break;

                }

                break

            // Feet
            case '8':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.0003048, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 0.3048, 11);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 3.048, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 30.48, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 304.8, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.0001893939394, 11);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 0.3333333333, 11);
                        break;

                    // Feet
                    case '8':
                         num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 12);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.0001645788337, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.00006313131313, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.001515151515, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 0.06060606061, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 0.01515151515, 11);
                        break;

                    default:
                        break;

                }

                break;

            // Inch
            case '9':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.0000254, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 0.0254, 11);
                        break;
                    
                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 0.254, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 2.54, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 25.4, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.00001578282828, 11);
                        break;
                    
                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 0.02777777778, 11);
                        break;

                    // Feet
                    case '8':
                            num = utils.dropZeros(fromText, 0.08333333333, 11);
                        break;
                    
                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.00001371490281, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.000005260942761, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.0001262626263, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 0.005050505051, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 0.001262626263, 11);
                        break;

                    default:
                        break;

                }

                break;

            // Nautical Mile
            case '10':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 1.852, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 1852, 11);
                        break;

                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 18520, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 185200, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 1852000, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 1.150779448, 11);
                        break;

                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 2025.371829, 11);
                        break;

                    // Feet
                    case '8':
                            num = utils.dropZeros(fromText, 6076.115486, 11);
                        break;

                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 72913.38583, 11);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.3835931493, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 9.206235584, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 368.2494234, 11);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 92.06235584, 11);
                        break;

                    default:
                        break;
                }

                break;

            // League
            case '11':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 4.828032, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 4828.032, 11);
                        break;

                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 48280.32, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 482803.2, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 4828032, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 3);
                        break;

                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 5280);
                        break;

                    // Feet
                    case '8':
                            num = utils.dropZeros(fromText, 15840);
                        break;

                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 190080);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 2.606928726, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 24);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 960);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 240);
                        break;

                    default:
                        break;
                    
                }

                break;

            // Furlong
            case '12':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.201168, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 201.168, 11);
                        break;

                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 2011.68, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 20116.8, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 201168, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.125, 11);
                        break;

                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 220);
                        break;

                    // Feet
                    case '8':
                            num = utils.dropZeros(fromText, 660);
                        break;

                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 7920);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.1086220302, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.04166666667, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 40);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 10);
                        break;

                    default:
                        break;
                    
                }

                break;

            // Rod
            case '13':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.0050292, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 5.0292, 11);
                        break;

                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 50.292, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 502.92, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 5029.2, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.003125, 11);
                        break;

                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 5.5, 11);
                        break;

                    // Feet
                    case '8':
                            num = utils.dropZeros(fromText, 16.5, 11);
                        break;

                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 198);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.002715550756, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.001041666667, 11);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.025, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Chain
                    case '14':
                        num = utils.dropZeros(fromText, 0.25, 11);
                        break;

                    default:
                        break;                    
                }

                break;

            // Chain
            case '14':
                switch (to) {

                    // Kilometer
                    case '1':
                        num = utils.dropZeros(fromText, 0.0201168, 11);
                        break;

                    // Meters
                    case '2':
                        num = utils.dropZeros(fromText, 20.1168, 11);
                        break;

                    // Decimeter
                    case '3':
                        num = utils.dropZeros(fromText, 201.168, 11);
                        break;

                    // Centimeter
                    case '4':
                        num = utils.dropZeros(fromText, 2011.68, 11);
                        break;
                        
                    // Millimeter
                    case '5':
                        num = utils.dropZeros(fromText, 20116.8, 11);
                        break;

                    // Mile
                    case '6':
                        num = utils.dropZeros(fromText, 0.0125, 11);
                        break;

                    // Yard
                    case '7':
                        num = utils.dropZeros(fromText, 22);
                        break;

                    // Feet
                    case '8':
                            num = utils.dropZeros(fromText, 66);
                        break;

                    // Inch
                    case '9':
                        num = utils.dropZeros(fromText, 792);
                        break;

                    // Nautical Mile
                    case '10':
                        num = utils.dropZeros(fromText, 0.01086220302, 11);
                        break;

                    // League
                    case '11':
                        num = utils.dropZeros(fromText, 0.004166666667, 10);
                        break;

                    // Furlong
                    case '12':
                        num = utils.dropZeros(fromText, 0.1, 11);
                        break;

                    // Rod
                    case '13':
                        num = utils.dropZeros(fromText, 4);
                        break;

                    // Chain
                    case '14':
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