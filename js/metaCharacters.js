console.log("Metacharacters in regex");

let regex = /the/;
let string = "The quick brown fox just over the lazy dog";
let result;

// Start of carrot(^) meta character
// ^ carrot(^) specifies starts with, used to know whether a string starts with the regex or not

// regex = /^The/;
// result = regex.test(string); // Output: true

// regex = /^the/;
// result = regex.test(string); // Output: false
// false because case doesn't matches

// regex = /^the/i;
// result = regex.test(string); // Output: true
// true because case insensitive flag is specified
// console.log(result);

// End of carrot(^) meta character

// Start of dollar($) meta character
// $ dollar($) specifies ends with, used to know whether a string ends with the regex or not

// regex = /dog$/;
// result = regex.test(string); // Output: true

// regex = /Dog$/;
// result = regex.test(string); // Output: false
// false because case doesn't matches

// regex = /Dog$/i;
// result = regex.test(string); // Output: true
// true because case insensitive flag is specified
// console.log(result);

// End of dollar($) meta character

// Start of dot(.) meta character
// Allows any single character to be there at place of dot(.)

// regex = /qu.ck/
// result = regex.test(string); // Output: true

// string = "The quiick brown fox just over the lazy dog"
// result = regex.test(string); // Output: false

// regex = /qu..ck/
// result = regex.test(string); // Output: true

// console.log(result);

// End of dot(.) meta character

// Start of asterisk(*) meta character
// Allows any no of characters to be there at place of asterisk(*)

// string = "Tanishk is tanishk";
// regex = /tani?shk/g;
// result = string.match(regex); // Output: true

// string = "The quiick brown fox just over the lazy dog"
// result = regex.test(string); // Output: false

// regex = /qu..ck/
// result = regex.test(string); // Output: true

// console.log(result);

// End of asterisk(*) meta character

// Start of plus(+) meta character
// Allows any no of characters of the same type after which you have placed the plus(+) symbol

// string = "helloooooooood";
// regex = /hello+/g;
// result = regex.exec(string); // Output: hellooooooooo will be matched but d will not match since + here is specifying that o can be any times.
// console.log(result);

// string = "hey howareyouhowareyouhowareyouhowareyou fine";
// regex = /hey (howareyou)+/g;
// result = regex.exec(string); // Output: hey howareyouhowareyouhowareyouhowareyou will be matched but " fine" will not match since + here is specifying that "howareyou" string can be any times.
// console.log(result);

// End of pipe/or(|) meta character

// Start of pipe/or(|) meta character
// Says either this or that can be there from the specified ones using pipe/or(|) symbol, none of other character can be there at that particular place

// string = "cat";
// regex = /(c|b)at/g;
// result = regex.exec(string); // Output: "cat" will be matched, since in the regex there can be eithar c or b, at first place.
// console.log(result);

// string = "hey how are you";
// regex = /(n|d)re/;
// result = regex.exec(string); // Output: null, since regex specifies that first character should be n or d, there is not word in the string like nre, or dre.
// console.log(result);

// End of pipe/or(|) meta character

// Start of questionmark/optional(?) meta character
// Says that the optional charcter can be there, or can not be

// string = "scout";
// regex = /scou?t/;
// result = regex.exec(string); // Output: "cat" will be matched, since in the regex "u" is optional, means that there can be scout, or scot both will be matched if given.
// console.log(result);

// string = "scoot";
// result = regex.exec(string); // Output: null, since regex specifies that after sco there can be u or can not be, but there can not be any other character at its place.
// console.log(result);

string = "scoot";
regex = /scou?/;
result = regex.exec(string); // Output: "sco" will get matched, since regex specifies that after sco there can be u or can not be.
console.log(result);

// End of questionmark/optional(?) meta character
