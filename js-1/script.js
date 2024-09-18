// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    //your code here
    var evens = [];
    var odds = [];
    for (var i = 0; i < integers.length; i++) {
      if ((integers[i] % 2) == 0) {
        evens.push(integers[i]);
      } else {
        odds.push(integers[i]);
      }
    }
    
    var elen = evens.length;
    var olen = odds.length;
    
    if (elen > olen) {
      return odds[0];
    } else {
      return evens[0];
    }
  }