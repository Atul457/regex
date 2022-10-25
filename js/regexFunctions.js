console.log("Regex functions");

let regex = /regular/;
let string =
  "These functions are related to regular expresssions, regular expressions are too much easy, regular expressions are almost same in almost all the languages";
let result;

// Start of exec function

// Desc: This functions returns the details about the match of a regex to a string on match, else null

// result = regex.exec(string);
// console.log(result);

// Output: ['regular', index: 31, input: 'These functions are related to regular expresssion…sions are almost same in almost all the languages', groups: undefined]

// The exec function returns the index of next occurence of the regex if executed subsequently if not not it returns null

// regex = /regular/g;

// result = regex.exec(string);
// console.log(result);
// Output: ['regular', index: 31, input: 'These functions are related to regular expresssion…sions are almost same in almost all the languages', groups: undefined]

// result = regex.exec(string);
// console.log(result);
// Output: ['regular', index: 53, input: 'These functions are related to regular expresssion…sions are almost same in almost all the languages', groups: undefined]

// result = regex.exec(string);
// console.log(result);
// Output: ['regular', index: 92, input: 'These functions are related to regular expresssion…sions are almost same in almost all the languages', groups: undefined]

// result = regex.exec(string);
// console.log(result);
// Output: null

// Can be performed via loop to get all the occurences
// while (((result = regex.exec(string)) !== null)) {
//   console.log(
//     `Regex "${regex.source}" matches with the given string "${string}", at index ${result?.index}`
//   );
// }

// To get the start and end of the match found using exec use d flag
// regex = /regular/d;
// result = regex.exec(string);
// console.log(result);

// Output of indices property: [[31,38]]

// End of exec function

// Start of test function

// test() returns true if match is found else false
// result = regex.test(string);
// if(result) console.log(`Regex "${regex.source}" matches with the given string "${string}"`);
// else console.log(`Regex "${regex.source}" does not match with the given string "${string}"`);

// Output: Regex "regular" matches with the given string "These functions are related to regular expresssions, regular expressions are too much easy, regular expressions are almost same in almost all the languages"

// regex = /regex/;
// result = regex.test(string);
// if(result) console.log(`Regex "${regex.source}" matches with the given string "${string}"`);
// else console.log(`Regex "${regex.source}" does not match with the given string "${string}"`);

// Output: Regex "regex" does not match with the given string "These functions are related to regular expresssions, regular expressions are too much easy, regular expressions are almost same in almost all the languages"

// End of test function

// Start of seach function

// Desc: The index of the first match between the regular expression and the given string, or -1 if no match was found.

// The difference between above two and this on is that, this works on string instead of regex
// Example: regex.search(string) // Wrong
// Example: string.search(regex) // Right

// The /g global flag doesn't affects the output of the search method

// regex = /regular/g;
// result = string.search(regex)
// console.log(`Regex "${regex.source}" matches with the given string "${string}", at index ${result}`);

// Output: Regex "regular" matches with the given string "These functions are related to regular expresssions, regular expressions are too much easy, regular expressions are almost same in almost all the languages", at index 31

// End of seach function

// Start of match function

// Desc: Works same as of exec, difference is this works on string instead of regex, returns the details about the match found
// Example: regex.search(string) // Wrong
// Example: string.search(regex) // Right

// result = string.match(regex);
// console.log(result);

// Output: ['regular', index: 31, input: 'These functions are related to regular expresssion…sions are almost same in almost all the languages', groups: undefined]

// Returns array of the matches if /g global flag is specified

regex = /regular/g;
result = string.match(regex);
console.log(result);

Output: ['regular', 'regular', 'regular']

// End of match function
