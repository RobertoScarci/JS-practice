// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    var newStr = str.split(/(\W+)/); // ['Pig', ' ', 'latin', ',- ',..]
 
   var changed = newStr.map(function(input) {
     if (!/\w/.test(input)) return input // keep non word elements as is
     
     return input.substring(1) + input.charAt(0) + "ay";
   });
 
   return changed.join("");
 }
 
 console.log(pigIt('Pig latin is cool'));