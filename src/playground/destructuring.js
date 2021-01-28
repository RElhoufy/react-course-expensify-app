//Object destructuring

// const person = {
//     name: 'Ramy',
//     age: 22,
//     location: {
//         city: 'Montreal',
//         temp: 4
//     }
// };

// const { name, age } = person;  //es6 object destructuring. Creates two variables name and age and sets them to person.name and person.age

// console.log(`${name} is ${age}`);

// const { city = 'defaultValue', temp: temperature = 'defaultTempValue'} = person.location;    //using default values and renaming the variables

// if (city && temperature) {
//     console.log(`its ${temperature} in ${city}`);
// };


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;


// console.log(publisherName);


//Array Destructuring

// const address = ['1299 S Juniper Street', 'Philly', 'Pensilvenia', '191274'];

// const [, city = 'defaultValue', state = 'defualtValue', ] = address;   //array destructuring. Leave empty variables for things we dont want to destructure. same way to set default value 

// console.log(`You are in ${city} ${state}.`);

// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// const [product, ,mediumPrice] = item;

// console.log(`A medium ${product} costs ${mediumPrice}`);