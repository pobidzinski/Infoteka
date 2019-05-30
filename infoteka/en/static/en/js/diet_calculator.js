var selectedCurrency;
var selectedValue;
var partialRatio = 0;
var breakfastCount = 0;
var lunchCount = 0;
var dinnerCount = 0;
var dateFromValue, dateToValue;

// catch components
let dropdown = document.getElementById('dropCountry');
let dateFrom = document.getElementById('dateFrom');
let dateTo = document.getElementById('dateTo');
let fullDayDietField = document.getElementById('fullDayDiet');
let partialDayDietFiled = document.getElementById('partialDayDiet');

let breakfastNumberField = document.getElementById('breakfastNumber');
let breakfastsDietField = document.getElementById('breakfastsDiet');

let lunchNumberField = document.getElementById('lunchNumber');
let lunchDietField = document.getElementById('lunchDiet');

let dinnerNumberField = document.getElementById('dinnerNumber');
let dinnerDietField = document.getElementById('dinnerDiet');

let finalDietField = document.getElementById('finalDiet');

// Fill in Country Dropdown with data from JSON
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose country';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

var request = new XMLHttpRequest();
request.open('GET', json_url, false);
request.send(null);

const data = JSON.parse(request.responseText);
let option;

for (let i = 0; i < data.length; i++) {
  option = document.createElement('option');
  option.text = data[i].Country;
  option.value = data[i].ID;
  dropdown.add(option);
};


// Changing selected values on dropdown change
dropdown.onchange = function () {
  var selectedItemID = parseInt(dropdown.value);

  for (let i = 0; i < data.length; i++) {
    if (data[i].ID === selectedItemID) {
      selectedCurrency = data[i].Currency;
      selectedValue = data[i].Value;
    }
  };

  calculate();
};


// Changing from Dates
dateFrom.onchange = function(){
  dateFromValue = this.value;

  calculate();
}

// Changing to Dates
dateTo.onchange = function(){
  dateToValue = this.value;

  calculate();
}

breakfastNumberField.onchange = function(){
  breakfastCount = this.value;

  calculate();
}

lunchNumberField.onchange = function(){
  lunchCount = this.value;

  calculate();
}

dinnerNumberField.onchange = function(){
  dinnerCount = this.value;

  calculate();
}


// Calculating final diet
function calculate() {
  //alert(selectedCurrency + " " + selectedValue);

    if(dateFromValue && dateToValue && selectedValue) {
    var date1 = new Date(dateFromValue);
    var date2 = new Date(dateToValue);

    var delta = Math.abs(date2 - date1) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // FULL DATE DIET
    let fullDayDietValue = days * selectedValue;
    fullDayDietField.innerText = fullDayDietValue + " " + selectedCurrency;
    
    // PARTIAL DIET
    if (hours > 12) {
      partialRatio = 1; 
    } else if( hours > 8) {
      partialRatio = 0.5;
    } else {
      partialRatio = 0.3;
    }
    let partialDayDietValue = parseInt(partialRatio * selectedValue);
    partialDayDietFiled.innerText = partialDayDietValue + " " + selectedCurrency;

    // BREAKFAST DIET
    let breakfastDietValue = breakfastCount * parseInt(selectedValue * 0.25);
    breakfastDietValue *= -1;
    breakfastsDietField.innerText = breakfastDietValue + " " + selectedCurrency;

    // LUNCH DIET
    let lunchDietValue = lunchCount * parseInt(selectedValue * 0.5);
    lunchDietValue *= -1;
    lunchDietField.innerText = lunchDietValue + " " + selectedCurrency;

    // DINNER DIET
    let dinnerDietValue = dinnerCount * parseInt(selectedValue * 0.25);
    dinnerDietValue *= -1;
    dinnerDietField.innerText = dinnerDietValue + " " + selectedCurrency;

    finalDietField.innerText = (fullDayDietValue + partialDayDietValue + breakfastDietValue + lunchDietValue + dinnerDietValue) + " " + selectedCurrency;
  }
}