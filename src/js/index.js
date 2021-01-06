import * as weight from './types/weight.js';
import * as area from './types/area';
import * as data from './types/data';
import * as fuel from './types/fuel';
import * as length from './types/length';
import * as power from './types/power';
import * as pressure from './types/pressure';
import * as speed from './types/speed';
import * as temperature from './types/temperature';
import * as time from './types/time';
import * as volume from './types/volume';
import * as currency from './types/currency';
import * as utils from './util/utils'

let activeButton='0';

function init() {
    console.log('Program Initialization');

    activeButton='11';
    const out = weight.fillSelections();
    document.getElementById('selFrom').innerHTML = out;
    document.getElementById('selTo').innerHTML = out;
    // document.getElementById('valueIn').value = 1234;
}

function getSelect () {
    const fromText = document.getElementById('valueIn').value;
    if (fromText !== "") {
        const fromConversion = document.getElementById('selFrom').value;
        const toConversion = document.getElementById('selTo').value;
        getSelection(fromConversion, toConversion, fromText)
    }
}

const elements = {
    sel1: document.querySelector(".selectFrom"),
    sel2: document.querySelector(".selectTo"),
    val1: document.querySelector(".inputVal"),
    weight: document.querySelector(".Weight"),
    area: document.querySelector(".Area"),
    data: document.querySelector(".Data"),
    fuel: document.querySelector(".Fuel"),
    length: document.querySelector(".Length"),
    power: document.querySelector(".Power"),
    pressure: document.querySelector(".Pressure"),
    speed: document.querySelector(".Speed"),
    temperature: document.querySelector(".Temperature"),
    time: document.querySelector(".Time"),
    volume: document.querySelector(".Volume"),
    currency: document.querySelector(".Currency"),
};

// program initialization
init();

elements.sel1.addEventListener("mouseout", function () {
    getSelect();
})

elements.sel1.addEventListener("change", function () {
    getSelect();
})

elements.sel2.addEventListener("mouseout", function () {
    getSelect();
})


elements.sel2.addEventListener("change", function () {
    getSelect();
})

elements.val1.addEventListener("input", function () {
    getSelect();
})

elements.weight.addEventListener("click", function() {
    activeButton='1';
    const out = weight.fillSelections();
    utils.clearDoc(out);
})

elements.area.addEventListener("click", function() {
    activeButton='2';
    const out = area.fillSelections();
    utils.clearDoc(out);
})

elements.data.addEventListener("click", function() {
    activeButton='3';
    const out = data.fillSelections();
    utils.clearDoc(out);
})

elements.fuel.addEventListener("click", function() {
    activeButton='4';
    const out = fuel.fillSelections();
    utils.clearDoc(out);
})

elements.length.addEventListener("click", function() {
    activeButton='5';
    const out = length.fillSelections();
    utils.clearDoc(out);
})

elements.power.addEventListener("click", function() {
    activeButton='6';
    const out = power.fillSelections();
    utils.clearDoc(out);
})

elements.pressure.addEventListener("click", function() {
    activeButton='7';
    const out = pressure.fillSelections();
    utils.clearDoc(out);
})

elements.speed.addEventListener("click", function() {
    activeButton='8';
    const out = speed.fillSelections();
    utils.clearDoc(out);
})

elements.temperature.addEventListener("click", function() {
    activeButton='9';
    const out = temperature.fillSelections();
    utils.clearDoc(out);
})

elements.time.addEventListener("click", function() {
    activeButton='10';
    const out = time.fillSelections();
    utils.clearDoc(out);
})

elements.volume.addEventListener("click", function() {
    activeButton='11';
    const out = volume.fillSelections();
    utils.clearDoc(out);
})
/*
elements.currency.addEventListener("click", function() {
    activeButton='12';
    const out = currency.fillSelections();
    utils.clearDoc(out);
})*/

const getSelection = (from, to, fromText) => {
    
    switch (activeButton) {
        
        // Weight
        case '1':
            weight.getSelection(from, to, fromText);
            break;
        
        // Area
        case '2':
            area.getSelection(from, to, fromText);
            break;
        
        // Data
        case '3':
            data.getSelection(from, to, fromText);
            break;

        // Fuel
        case '4':
            fuel.getSelection(from, to, fromText);
            break;
        
        // Length
        case '5':
            length.getSelection(from, to, fromText);
            break;

        // Power
        case '6':
            power.getSelection(from, to, fromText);
            break;
        
        // Pressure
        case '7':
            pressure.getSelection(from, to, fromText);
            break;

        // Speed
        case '8':
            speed.getSelection(from, to, fromText);
            break;

        // Temperature
        case '9':
            temperature.getSelection(from, to, fromText);
            break;

        // Time
        case '10':
            time.getSelection(from, to, fromText);
            break;
        
        // Volume
        case '11':
            volume.getSelection(from, to, fromText);
            break;
        
        // Currency
        case '12':
            currency.getSelection(from, to, fromText);
            break;

    }
}