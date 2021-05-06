'use strict';

let times=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'];
let tablee = document.getElementById('tablefor');
let arrayTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totals = 0;


function randomumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); }


//constructer
function data(name, minCust, maxCust, avgcust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgcust = avgcust;
  this.randomcust = [];
  this.sales = [];
  this.total = 0;
}
     
         
 // prototype1
data.prototype.randomNumber = function () {
    for (let i = 0; i < times.length - 1; i++) {
      this.randomcust.push(randomumber(this.minCust, this.maxCust));
    }
  };
  
  // prototype2
  
  data.prototype.salescookies = function () {
    for (let i = 0; i < times.length - 1; i++) {
      this.sales.push(this.randomcust[i] * Math.floor(this.avgcust));
      this.total = this.total + this.sales[i];
      arrayTotals[i] = arrayTotals[i] + this.sales[i];
  
    }
    this.sales[this.sales.length] = this.total;
    totals += this.total;
  };
  
  // body table
  
  data.prototype.bodytable = function () {
    let tableRow = document.createElement('tr');
    tablee.appendChild(tableRow);
    let tdEl1 = document.createElement('td');
  
    tableRow.appendChild(tdEl1);
    tdEl1.textContent = this.name;
    let tdEl;
    for (let i = 0; i < this.sales.length; i++) {
      tdEl = document.createElement('td');
      tableRow.appendChild(tdEl);
      tdEl.textContent = this.sales[i];
    }
  };
  
  // head
  
  function headerr() {
    let thead = document.createElement('thead');
    tablee.appendChild(thead);
  
  
  
    let tableRow = document.createElement('tr');
    thead.appendChild(tableRow);
    let tdEl1 = document.createElement('td');
    tableRow.appendChild(tdEl1);
    tdEl1.textContent = 'dataa';
    let thEl;
    for (let i = 0; i <times.length; i++) {
      thEl = document.createElement('th');
      tableRow.appendChild(thEl);
      thEl.textContent = times[i];
    }
  }
  
  // footer
  function footerr() {
    let footer = document.createElement('tfoot');
    tablee.appendChild(footer);
    let tableRow = document.createElement('tr');
    footer.appendChild(tableRow);
    let tdEl1 = document.createElement('td');
    tableRow.appendChild(tdEl1);
    tdEl1.textContent = 'Total';
    let tdEl;
    for (let i = 0; i < times.length-1; i++) {
      tdEl = document.createElement('td');
      tableRow.appendChild(tdEl);
      tdEl.textContent = `${arrayTotals[i]}`;
    }
    tdEl = document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent = `${totals}`;
  }
  
  
  //calling
  headerr();
  
  
  let seattle = new data('Seattle', 23, 65, 6.3);
  seattle.randomNumber();
  seattle.salescookies();
  seattle.bodytable();
  
  let tokyo = new data('Tokyo', 3, 24, 1.2);
  tokyo.randomNumber();
  tokyo.salescookies();
  tokyo.bodytable();
  
  let dubai = new data('Dubai', 11, 38, 3.7);
  dubai.randomNumber();
  dubai.salescookies();
  dubai.bodytable();
  
  let paris = new data('Paris', 20, 38, 2.3);
  paris.randomNumber();
  paris.salescookies();
  paris.bodytable();
  
  let lima = new data('Lima', 2, 16, 4.6);
  lima.randomNumber();
  lima.salescookies();
  lima.bodytable();
  
  footerr();
  
  let countryform  = document.getElementById('countryform');
countryform.addEventListener('submit', addcountry);
function addcountry(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let mincust = event.target.mincust.value;
  let maxcust= event.target.maxcust.value;
  let avgcust=event.target.avgcust.value;

  let newcountry = new data(name, mincust, maxcust,avgcust)
  newcountry.randomNumber();
  newcountry.salescookies();
  newcountry.bodytable();
  
  
  
  
}