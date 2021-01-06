import * as utils from './../util/utils'

export const fillSelections = () => {
    let out = '<option value="1">Millennium</option>\n';
    out += '<option value="2">Century</option>\n';
    out += '<option value="3">Decade</option>\n';
    out += '<option value="4">Calendar Year</option>\n';
    out += '<option value="5">Month</option>\n';
    out += '<option value="6">Week</option>\n';
    out += '<option value="7">Day</option>\n';
    out += '<option value="8">Hour</option>\n';
    out += '<option value="9">Minute</option>\n';
    out += '<option value="10">Second</option>\n';
    out += '<option value="11">Millesecond</option>\n';
    return out;
}


export const getSelection = (from, to, fromText) => {

    let num = 0.0;

    if (fromText !== "") { 

        switch (from) {
        
            // Millennium
            case '1':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 10);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 100);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 1000);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 12000);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 52142.85714);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 365000);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 8760000);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 525600000);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 31536000000);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 31536000000000);
                        break;

                    default:
                        break;

                }
                break;

            // Century
            case '2':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.1);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 10);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 100);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 1200);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 5214.285714);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 36500);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 876000);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 52560000);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 3153600000);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 3153600000000);
                        break;

                    default:
                        break;
                }
                break;

            // Century
            case '3':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.01, 15);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.1);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 10);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 120);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 521.42857147, 11);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 3650);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 87600);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 5256000);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 315360000);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 315360000000);
                        break;
                
                    default:
                        break;
                }
                break;

            // Calendar Year
            case '4':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.001, 11);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.01, 11);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 0.1, 11);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 1);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 12);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 52.14285714);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 365);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 8760);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 525600);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 31536000);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 31536000000);
                        break;

                    default:
                        break;
                }
                break;
            
            // Month
            case '5':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.00008333333333, 11);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.0008333333333, 11);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 0.008333333333, 11);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 0.08333333333, 11);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 4.345238095, 11);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 30.41666667, 11);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 730);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 43800);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 2628000);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 2628000000);
                        break;

                    default:
                        break;

                }
                break;

            // Week
            case '6':
                switch (to) {
            
                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.00001917808219, 15);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.0001917808219, 15);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 0.001917808219, 15);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 0.01917808219, 15);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 0.2301369863, 15);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 7);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 168);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 10080);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 604800);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 604800000);
                        break;

                    default:
                        break;

                }
                break;

            // Day
            case '7':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.000002739726027, 15);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.00002739726027, 15);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 0.0002739726027, 15);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText,0.002739726027, 15);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 0.03287671233, 15);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 0.1428571429, 15);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 24);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 1440);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 86400);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 86400000);
                        break;

                    default:
                        break;

                }
                break;

            // Hour
            case '8':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.0000001141552511, 15);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.000001141552511, 15);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 0.00001141552511, 15);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 0.0001141552511, 15);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 0.001369863014, 15);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 0.005952380952, 15);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 0.04166666667, 15);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 1);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 60);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 3600);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 3600000);
                        break;
                
                    default:
                        break;
                }
                break;

            // Minute
            case '9':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.000000001902587519, 15);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.00000001902587519, 15);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 0.0000001902587519, 15);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 0.000001902587519, 15);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 0.00002283105023, 15);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 0.00009920634921, 15);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 0.0006944444444, 15);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 0.01666666667, 15);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 60);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 60000);
                        break;
                
                    default:
                        break;
                }
                break;

            // Second
            case '10':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.00000000003170979198, 15);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.0000000003170979198, 15);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 0.000000003170979198, 15);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 0.00000003170979198, 15);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 0.0000003805175038, 15);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 0.000001653439153, 15);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 0.00001157407407, 15);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 0.0002777777778, 11);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 0.01666666667, 15);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 1);
                        break;

                    // Millesecond
                    case '11':
                        num = utils.dropZeros(fromText, 1000);
                        break;
                
                    default:
                        break;
                }
                break;
            
            // Millesecond
            case '11':
                switch (to) {

                    // Millennium
                    case '1':
                        num = utils.dropZeros(fromText, 0.00000000000003170979198, 15);
                        break;

                    // Century
                    case '2':
                        num = utils.dropZeros(fromText, 0.0000000000003170979198, 15);
                        break;
                    
                    // Decade
                    case '3':
                        num = utils.dropZeros(fromText, 0.000000000003170979198, 15);
                        break;

                    // Calendar Year
                    case '4':
                        num = utils.dropZeros(fromText, 0.00000000003170979198, 15);
                        break;
                        
                    // Month
                    case '5':
                        num = utils.dropZeros(fromText, 0.0000000003805175038, 15);
                        break;

                    // Week
                    case '6':
                        num = utils.dropZeros(fromText, 0.000000001653439153, 15);
                        break;
                    
                    // Day
                    case '7':
                        num = utils.dropZeros(fromText, 0.00000001157407407, 15);
                        break;

                    // Hour
                    case '8':
                        num = utils.dropZeros(fromText, 0.0000002777777778, 11);
                        break;
                    
                    // Minute
                    case '9':
                        num = utils.dropZeros(fromText, 0.00001666666667, 15);
                        break;

                    // Second
                    case '10':
                        num = utils.dropZeros(fromText, 0.001);
                        break;

                    // Millesecond
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