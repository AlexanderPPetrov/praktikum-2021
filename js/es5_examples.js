// ES5 Examples
var arrayExample = ['Alex', 'Ivan', 'Andrey'];

// Loop through the elements of an Array
arrayExample.forEach(function(element) {
    console.log(element)
})

var jsonExample = {
    name: "Alex",
    city: "Plovdiv",
    country: "Bulgaria",
    getName: function() {
        console.log(jsonExample.name);
    },
    interests: ['Sport', 'Books', 'Cooking'],
    information: {
        status: "married",
        wife: "Yoana",
        kid: {
            fname: "Alex",
            lname: "Petrov",
        }
    }
}

// Loop through keys in Object
for(key in jsonExample){
    console.log(key, jsonExample[key])
}


function getFullName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
}



var getFullNameInterval = setInterval(function(){
    var fullName = getFullName('Alexander', 'Petrov');
    console.log('Fullname: ', fullName);
}, 4000);

clearInterval(getFullNameInterval);


