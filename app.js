
     
          'use strict';
          let times = [
              "6am",
              "7am",
              "8am",
              "9am",
              "10am",
              "11am",
              "12pm",
              "1pm",
              "2pm",
              "3pm",
              "4pm",
              "5pm",
              "6pm",
              "7pm"];
          let seattle = {
             Name: 'Seattle',
              minCust: 23,
              maxCust: 65,
              avgCust: 6.3,
    randomCust: [],
    
    sales: [],
    total: 0,
    
    randomNumber: function () {
        for (let hour = 0; hour < times.length; hour++) {
            this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
        }
    },
    salesCookies: function () {
        for (let i = 0; i < times.length; i++) {
            this.sales.push(Math.ceil(this.randomCust[i] * this.avgCust));
            this.total += this.sales[i];
        }
    },
    render: function () {
        let container = document.getElementById('ss');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.Name;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < times.length; hour++) {
          let liEl = document.createElement('li');
          ulEl.appendChild(liEl);
          liEl.textContent = `${times[hour]}:${this.sales[hour]} cookies`
      }
      let tot = document.createElement('li');
      ulEl.appendChild(tot);
      tot.textContent = `sum: ${this.total} cookies`

  }

}
seattle.randomNumber();
seattle.salesCookies();
seattle.render();

    

  
let tokyo = {
  Name: 'tokyo',
   minCust:3 ,
   maxCust:24,
   avgCust:1.2 ,
randomCust: [],

sales: [],
total: 0,

randomNumber: function () {
for (let hour = 0; hour < times.length; hour++) {
 this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
}
},
salesCookies: function () {
for (let i = 0; i < times.length; i++) {
 this.sales.push(Math.ceil(this.randomCust[i] * this.avgCust));
 this.total += this.sales[i];
}
},
render: function () {
let container = document.getElementById('ss');
let h2El = document.createElement('h2');
container.appendChild(h2El);
h2El.textContent = this.Name;
let ulEl = document.createElement('ul');
container.appendChild(ulEl);
for (let hour = 0; hour < times.length; hour++) {
let liEl = document.createElement('li');
ulEl.appendChild(liEl);
liEl.textContent = `${times[hour]}:${this.sales[hour]} cookies`
}
let tot = document.createElement('li');
ulEl.appendChild(tot);
tot.textContent = `sum: ${this.total} cookies`

}

}
tokyo.randomNumber();
tokyo.salesCookies();
tokyo.render();

  
  
let dubai = {
  Name: 'dubai',
   minCust:11,
   maxCust: 38,
   avgCust: 3.7,
randomCust: [],

sales: [],
total: 0,

randomNumber: function () {
for (let hour = 0; hour < times.length; hour++) {
 this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
}
},
salesCookies: function () {
for (let i = 0; i < times.length; i++) {
 this.sales.push(Math.ceil(this.randomCust[i] * this.avgCust));
 this.total += this.sales[i];
}
},
render: function () {
let container = document.getElementById('ss');
let h2El = document.createElement('h2');
container.appendChild(h2El);
h2El.textContent = this.Name;
let ulEl = document.createElement('ul');
container.appendChild(ulEl);
for (let hour = 0; hour < times.length; hour++) {
let liEl = document.createElement('li');
ulEl.appendChild(liEl);
liEl.textContent = `${times[hour]}:${this.sales[hour]} cookies`
}
let tot = document.createElement('li');
ulEl.appendChild(tot);
tot.textContent = `sum: ${this.total} cookies`

}

}
dubai.randomNumber();
dubai.salesCookies();
dubai.render();


let paris = {
  Name: 'paris',
   minCust:20 ,
   maxCust:38 ,
   avgCust: 2.3,
randomCust: [],

sales: [],
total: 0,

randomNumber: function () {
for (let hour = 0; hour < times.length; hour++) {
 this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
}
},
salesCookies: function () {
for (let i = 0; i < times.length; i++) {
 this.sales.push(Math.ceil(this.randomCust[i] * this.avgCust));
 this.total += this.sales[i];
}
},
render: function () {
let container = document.getElementById('ss');
let h2El = document.createElement('h2');
container.appendChild(h2El);
h2El.textContent = this.Name;
let ulEl = document.createElement('ul');
container.appendChild(ulEl);
for (let hour = 0; hour < times.length; hour++) {
let liEl = document.createElement('li');
ulEl.appendChild(liEl);
liEl.textContent = `${times[hour]}:${this.sales[hour]} cookies`
}
let tot = document.createElement('li');
ulEl.appendChild(tot);
tot.textContent = `sum: ${this.total} cookies`

}

}
paris.randomNumber();
paris.salesCookies();
paris.render();

let lima = {
  Name: 'lima',
   minCust:2 ,
   maxCust: 16,
   avgCust:4.6 ,
randomCust: [],

sales: [],
total: 0,

randomNumber: function () {
for (let hour = 0; hour < times.length; hour++) {
 this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
}
},
salesCookies: function () {
for (let i = 0; i < times.length; i++) {
 this.sales.push(Math.ceil(this.randomCust[i] * this.avgCust));
 this.total += this.sales[i];
}
},
render: function () {
let container = document.getElementById('ss');
let h2El = document.createElement('h2');
container.appendChild(h2El);
h2El.textContent = this.Name;
let ulEl = document.createElement('ul');
container.appendChild(ulEl);
for (let hour = 0; hour < times.length; hour++) {
let liEl = document.createElement('li');
ulEl.appendChild(liEl);
liEl.textContent = `${times[hour]}:${this.sales[hour]} cookies`
}
let tot = document.createElement('li');
ulEl.appendChild(tot);
tot.textContent = `sum: ${this.total} cookies`

}

}
lima.randomNumber();
lima.salesCookies();
lima.render();