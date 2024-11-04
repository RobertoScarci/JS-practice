
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
//  The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.



function duplicateCount(text){
    var nText = text.toLowerCase(); //this changes every character to lower case 
      var myObj = {}; // Declaring an empty object
      var counter = 0;
      for (var i = 0; i < nText.length; i++) {
      // assigning character as property and giving value 1 
          if (!myObj[nText[i]]){
              myObj[nText[i]] = 1;
          }//checking if character already added
          else if (myObj[nText[i]] < 2) {
              myObj[nText[i]] += 1;
              counter++;
          }
      }
      return counter;
  }