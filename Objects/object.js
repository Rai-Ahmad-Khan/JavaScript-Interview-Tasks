
const ahmadarray= [
    1,
    2,
    'Ahmad',
    ['ahmad', 'rai'],                     //In Array we can not give any value a name
    5
];

//console.log ahmadarray(3);


// 

//Object is the most fudamental concept of j.s

// {} object literal syntax
//You can access it in unordered/unstructured data.

const ahmad= {
    //keys/property     :    value
    firstname : 'Rai Ahmmad',
    lastname : 'Khan',
    age : 2023 - 2000,
    job : 'developer',
    friends : ['usman', 'ahmad', 'sami', 'usama', 'haider', 'asghar']
};

////how to retrieve/change data from object by dot and braket notation.

//console.log(ahmad);

////here is the dot notation:

           //name.key
//console.log(ahmad.firstname);      //it is easier and clear


////here is the braket notation:


            //name['key']
//console.log(ahmad['lastname']);   // here we can use any expression that we would like 
                                   //so we don't need to explesitly write string here instead
                                   //we can compute it by some expression
 



//// imagen we had a variable in which we store the repeating part

const namekey = 'name';

// console.log(ahmad['first' + namekey]);
// console.log(ahmad['last' + namekey]);

// //same thing will work with dot notation
// // console.log(ahmad.'last' + namekey);  it will give an error



// //This will make the need for braket notation more clear.


// // When we have to get the info by user interface
// //prompt  .....its a builtin function in j.s
// //store it in a variable


const byuser = prompt('What do you want to know about Rai Ahmad Khan ? lets choose from firstname, age ,job and friends');

// // console.log(byuser);  
// console.log(ahmad.byuser); //wrong
console.log(ahmad[byuser]); //js will come here and replace the actual value of variable


// if user choose an undefined key

// if (ahmad[byuser]) {
//     console.log(ahmad[byuser]); 
// } else {
//     console.log('wrong value : lets choose from firstname, age ,job and friends'); 
// }


// how to use dot and braket notation to add new property in object

// ahmad.location = 'sharaqpur';
// ahmad['twitter'] = 'raiahmadkhan27';
// console.log(ahmad);
// console.log(ahmad['location']);


// how to use dot and braket notation to remove property in object.


// delete ahmad.age;
// delete ahmad['age'];
// console.log(ahmad);






//  loops in js


// for (let x in ahmad) {
//    console.log(x +";"+" "+ ahmad[x]);
//   };

  

// for (let i in ahmad) {
// console.log(i+";");
// console.log(ahmad[i]);
// };














