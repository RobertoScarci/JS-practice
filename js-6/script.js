// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    var result = n.toString(2).match(/1/g) != null ? n.toString(2).match(/1/g).length : 0;
    return result;
  };
  
  console.log(countBits('a'))