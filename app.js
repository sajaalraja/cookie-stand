'use strict';

let seattle = {
  mincustomer: 23,
  maxcustomer: 65,
  avgCookie: 6.3,
  cookiesum: 0,
  render: function(){
    let time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    for (let i = 0; i < time.length; i++){

       let seattleCustomers = Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
       let cookieNumber = seattleCustomers * this.avgCookie;
      let  cookiesb = Math.ceil(cookieNumber);
      this.cookiesum = this.cookiesum + cookiesb; 
      let ule1 = document.getElementById('seattle');
      let liii= document.createElement('li');
     liii.textContent = ` ${time[i]} ${cookiesb} cookies`;
     ule1.appendChild(liii);
    
    }
    document.getElementById('seattleTot').innerHTML = ` ${this.cookiesum} cookies `;
    
}
   
};
seattle.render();



let tokyo = {
    mincustomer: 3,
    maxcustomer: 24,
    avgCookie: 1.2,
    cookiesum: 0,
    render: function(){
      let time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      for (let  i = 0; i < time.length; i++){
       let  tokyoCustomers = Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer
       let  cookieNumbers = tokyoCustomers * this.avgCookie;
       let cookiesBa = Math.ceil(cookieNumbers);
        this.cookiesum = this.cookiesum + cookiesBa; 
        let ule2 = document.getElementById('tokyo');
        let lii2 = document.createElement('li');
        lii2.textContent = ` ${time[i]}  ${cookiesBa} cookies`;
       ule2.appendChild(lii2);
      }
     
    
      document.getElementById('tokyoTot').innerHTML = ` ${this.cookiesum} cookies `;
    
    }
  };
  tokyo.render();

  let  dubai = {
    mincustomer: 11,
    maxcustomer: 38,
    avgCookie: 3.7,
    cookiesum: 0,
    render: function(){
     let time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      for (let i = 0; i < time.length; i++){
        let dubaiCustomers = Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
        let cookieNumberees = dubaiCustomers * this.avgCookie;
        let  cookiesBaa= Math.ceil(cookieNumberees);
        this.cookiesum = this.cookiesum + cookiesBaa 
        let ule3= document.getElementById('dubai');
        let  lii3 = document.createElement('li');
        lii3.textContent = ` ${time[i]}  ${cookiesBaa} cookies`;
        ule3.appendChild(lii3);
      }
      document.getElementById('dubaiTot').innerHTML = ` ${this.cookiesum} cookies `;
    }
  };
  dubai.render();

 
  let  paris = {
    mincustomer: 20,
    maxcustomer: 38,
    avgCookie: 2.3,
    cookiesum: 0,
    render: function(){
     let time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      for (let i = 0; i < time.length; i++){
        let parisCustomers = Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
        let cookieNumberees = parisCustomers * this.avgCookie;
        let  cookiesBaa= Math.ceil(cookieNumberees);
        this.cookiesum = this.cookiesum + cookiesBaa 
        let ule4= document.getElementById('paris');
        let  lii4= document.createElement('li');
        lii4.textContent = ` ${time[i]} ${cookiesBaa} cookies`;
        ule4.appendChild(lii4);
      }
      document.getElementById('parisTot').innerHTML = ` ${this.cookiesum} cookies `;
    }
  };
  paris.render();

  let  lima = {
    mincustomer: 2,
    maxcustomer: 16,
    avgCookie: 4.6,
    cookiesum: 0,
    render: function(){
     let time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      for (let i = 0; i < time.length; i++){
        let limaCustomers = Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
        let cookieNumberees = limaCustomers * this.avgCookie;
        let  cookiesBaa= Math.ceil(cookieNumberees);
        this.cookiesum = this.cookiesum + cookiesBaa 
        let ule5= document.getElementById('lima');
        let  lii5 = document.createElement('li');
        lii5.textContent = ` ${time[i]}  ${cookiesBaa} cookies`;
        ule5.appendChild(lii5);
      }
      document.getElementById('limaTot').innerHTML = ` ${this.cookiesum} cookies `;
    }
  };
  lima.render();

 
   

 
   
   