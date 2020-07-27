// const person = {
//     // name: 'Conor',
//     age: 26,
//     location : {
//         city: 'Oxford',
//         temp: 15
//     }
// };

// // const name = person.name;
// // const age = person.age;
// const {name:firstName  = 'Anon', age} = person; // default name value can be set here

// console.log(`${firstName} is ${age}`);

// // if (person.location.city && person.location.temp){
// //     console.log(`It's ${person.location.temp}C in ${person.location.city}`);
// // }

// const {city, temp: temperature} = person.location; // a: b get a and save as b

// if (city && temperature){
//     console.log(`It's ${temperature}C in ${city}`);
// }

// OBJECT DESTRUCTURING

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {title, author} = book;
// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING

//const address = [];
 const address = ['1299', 'South Street', 'New York', '10010'];

const [,street, city = 'New York'] = address;

console.log(`You are in ${street} ${city}`);

const item = ['coffee', '2.00', '2.50', '2.75'];
const [product,,mediumPrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}`);