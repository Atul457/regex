console.log("Quantifiers, grouping and sets in regex");

// Start of Sets

// Sets specifies a set of symbols or alphanumeric characters from which one or more characters, that can be there in the string, set is defined using a set of square brackets. (-) hyphen is used to specify a range from which any alphanumeric chars or symbols can be there in the string.

let regex = /[a-zA-Z]+/; // here are squence of chars from a to z, or A-Z can be there
let string = "atul singh"; // atul will get matched, since " " is there, which is not specified to be there in the set.
let result;

// string = "atulsingh"; // now "atulsingh" which is the whole string will get matched since now, we have removed the " " space from the string.
// result = regex.exec(string);
// console.log(result);

// regex = /[a-z A-Z]+/; // now "atul singh" which is the whole string will get matched since now, we also have specified " " space, in the set
// result = regex.exec(string);
// console.log(result);

// End of Sets

// Start of Grouping

// Grouping specifies a group, it can be of anything like of sets, usually grouping is used with quantifiers and sets

// regex = /^([a-zA-z_0-9-])+@([a-zA-z\.])+\.([a-zA-z])+$/; // Here first group is saying that first sequence should start and contain chars either from (a to z, or A to Z, or _ or _ or digits from 0-9)
// string = "atul@mailinator.com";
// result = regex.exec(string);
// console.log(result); // The whole email will get matched, output will be "atul@mailinator.com"

// End of Grouping

// Start of Quantifiers

// Quantifier specifies the quantity, that how much charactes, symbols are groups can be there

// In the above example any email of any length will get matched, which is we dont want, so here quantifiers come into picture

regex = /^([a-zA-z_0-9-]){2,5}@([a-zA-z\.]{2,10})\.([a-zA-z]{2,6})$/; // Here first group is saying that first sequence should start and contain chars either from (a to z, or A to Z, or _ or _ or digits from 0-9)
// string = "atul@mailinator.com";
// result = regex.exec(string);
// console.log(result); // The whole email will get matched, output will be "atul@mailinator.com"

string = "atul999@mailinator.com";
result = regex.exec(string);
console.log(result); // The email will not get matched, output will be null since we have specified that first sequence should contain (a-z, or A-Z, or 0-9) any of them, which is correct as per our string, but the quantifier is saying that the sequence should only be of (2 to 5) in length but our first string is of 7 in length, that why email is not matched.

// End of Quantifiers
