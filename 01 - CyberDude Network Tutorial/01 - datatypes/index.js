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
console.log(person.siblings.brother);

// Bracket Notation
console.log(person[user_name]);