function myFunc() {
  console.log(this);
}

// Solution 1: Using bind
const boundFunc = myFunc.bind({ name: "my object" });
boundFunc(); // Output: { name: "my object" }

// Solution 2: Using an arrow function (this is lexically bound)
const arrowFunc = () => {
  console.log(this); // 'this' will inherit its value from its surrounding scope
};
arrowFunc(); // Output: window object in browser, or global object in Node.js

// Solution 3: Explicitly setting 'this' in the function call (using 'call' or 'apply')
myFunc.call({ name: "another object" }); // Output: { name: "another object" }

// Solution 4: Using a class and method
class MyClass {
  myMethod() {
    console.log(this);
  }
}
const myInstance = new MyClass();
myInstance.myMethod(); // Output: MyClass instance