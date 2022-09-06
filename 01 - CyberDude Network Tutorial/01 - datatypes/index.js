let firstName   =   "Dhinesh"   //  String
let age         =   24;         //  Integer/Number
let isYoung     =   true;       //  Boolean
let lastName    =   undefined;  //  Undefined
let last                        //  Undefined
let trophy      =   null;       //  null

/*--------------Objects--------------------------*/

// let user_name = "Dhinesh";
// let user_age = 24;
// let user_gender = "Male";
// let user_address = "Salem, Tamil Nadu, India";

let person = {
    user_name:"Dhinesh",
    user_age:24,
    user_gender:"Male",
    user_address:"Salem, Tamil Nadu, India",
    siblings:{
        brother:"Dhanush",
        sister:"Anu Rekha"
    }
};
// Object
console.log(person);

// Dot Notation => Mostly Used
console.log(person.user_name);
console.log(person.siblings.sister);

// // Bracket Notation
// console.log(person[user_name]);

/*--------------Arrays---------------------------*/

let array       = [];     // Empty Array
let favColors   = ["red", "green", "yellow", "white"];

console.log(array);
console.log(favColors);
console.log(favColors[0]);  // Display the value in 0 element

favColors[5] = "black";     // Add the value to 5th element of the Array
console.log(favColors);
console.log(favColors.length);  // No. of elements present in the array