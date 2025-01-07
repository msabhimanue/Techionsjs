// Variable naming in camelCase
let userName = "Abhimanue";
let userAge = 22;

// Function naming in camelCase
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

// Object naming in camelCase
let userProfile = {
  firstName: "Abhimanue",
  lastName: "M S",
  age: 22,
  greet: function() {
    console.log("Hello, " + this.firstName + "!");
  }
};

// Calling the function and using the object
greetUser(userName);  
userProfile.greet();  
