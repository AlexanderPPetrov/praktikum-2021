// import {getFullName, settings} from "./utilities";
// import Math from "./math";

// Math.sum(2,3);

const getName = name => `Your name is: ${name}`;
console.log(getName("Peter"));

// Spread operator for Objects
const firstName = "Peter";

const personalData = {
    firstName,
    lastName: "Petrov",
}

const addressData = {
    city: "Plovdiv",
    country: "Bulgaria"
}

// const allData = Object.assign({}, personalData, addressData);

const allData = {...personalData, ...addressData};

// Spread operator for Arrays
const testData = [1,2,3,10,15,20];
const anotherTestData = [4,5,6];

console.log([...testData, ...anotherTestData]);

//Array.map, filter, reduce

const objectValues = testData.map(element => element + 7)


const users = [
    {
        firstName: "Peter",
        city: "Plovdiv",
    },
    {
        firstName: "Ivan",
        city: "Sofia",
    },
    {
        firstName: "Ivan",
        city: "Pleven",
    },
    {
        firstName: "Dragan",
        city: "Plovdiv",
    },
    {
        firstName: "Dragan",
        city: "Plovdiv",
    }
]

const usersFromPlovdiv = users.filter(element => element.city === "Plovdiv");

const plovdivNames = usersFromPlovdiv.map(user => user.firstName);

// const testData = [1,2,3,10,15,20];
const sum = testData.reduce((acc, curr) => {
    return acc + curr;
}, 0);

// Generate dummy Object
const objectWithReduce = testData.reduce((acc, curr) => {
    return {...acc, ...{[curr]: 'Test'}};
}, {});


/*
const uniqueCities = [];

users.forEach(user => {
    if(!uniqueCities.includes(user.city)){
        uniqueCities.push(user.city)
    }
})

*/

const uniqueCities = users.reduce((acc, curr) => {
    return !acc.includes(curr.city) ? [...acc, curr.city] : acc;
}, []);


//Object.keys, values, entries

const dataObject = {
    name: "Peter",
    city: "Plovdiv",
    contact: {
        phone: "12039091239",
        email: "peter@abv.bg",
    }
}

Object.keys(dataObject).forEach(key => {
    console.log(key);
})


async function getData() {
    // Do a request
    // wait for response
    return 'response';
}

async function getAnotherData() {
    // Do a request
    // wait for response
    return 'another_response';
}

const data = await getData();
const data2 = await getAnotherData();

//...
//....

//Callback
function doSomething(callback){
    // wait for something async 
    console.log('loading something');
    // then do something else
    if(callback){
        callback();
    }
}

function afterSomethingIsLoaded() {
    console.log('Loaded and do something');
}
doSomething(afterSomethingIsLoaded);

