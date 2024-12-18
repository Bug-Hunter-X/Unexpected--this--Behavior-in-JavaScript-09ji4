function myFunc() {
  console.log(this);
}

myFunc(); // Output: undefined (in strict mode) or the global object (in non-strict mode)