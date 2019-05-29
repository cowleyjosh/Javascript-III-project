/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window 
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Bindng
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function favShow(show) {
    console.log(this);
    return show;
}
favShow("Rick and Morty");

// Principle 2

// code example for Implicit Binding

const myObj = {
    show: 'My Favorite',
    favShow: function(show) {
      console.log(`${this.show} show is ${show}!`);
      console.log(this);
    }
  };
  myObj.favShow('Rick and Morty');

// Principle 3

// code example for New Binding

function Show(obj){
this.name = obj.name;
this.network = obj.network;
this.bestShow = function(){
    console.log(this);
    return `My favorite show is ${this.name} and it airs on ${this.network}!`;

    }   
}

const rm = new Show ({name: 'Rick and Morty', network: 'Adult Swim'});
const got = new Show ({name: 'Game of Thrones', network: 'HBO'});

rm.bestShow();
got.bestShow();

// Principle 4

// code example for Explicit Binding

rm.bestShow.call(got);
got.bestShow.apply(rm);