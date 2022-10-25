console.log("Short hand charater classes");

// Short Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits. using this we come out of need of doing thing like [a-zA-Z0-9] here instead we will be using \w word character class, in this way these classes are used

let regex, result, string;

// Word char class

string = "Hey_991__ how are you";
regex = /\w+/;           // \w means any word character like 0-9, a-z, A-Z, and _, + means any  no  of word chars, "hey_991__" will get match
regex = /\w/;            // Only H will be matched.
regex = /[^\w]+/;       // Only non word character like " " space will get matched, since ^ carrot here is working as not operator
regex = /\W+/; // Only non word character like " " space will get matched, W stands for non word characters

// Digit char class
string = "This is my number 999 777-999";
regex = /\d/;           // \d means a digit from 0-9, so first 9 will be matched
regex = /\d+/;          // + after \d means any no of digits, so first 999 will get matched, since " " is there after 999, which is not a digit char
regex = /\D/;           // \D capital D means non digit chars, "T" will get matched.
regex = /\D+/;          // + after \D means any no of non digit chars, "This is my number " will get matched.

// Space char class
string = `I do consists of words and spaces`;
regex = /\s/;              // \s means a space or tab, so first space after I will get matched.
string = `I                   do consists of words and spaces`;
regex = /\s+/;            // + after \d means any no of spaces, so first sequence of spaces "                   " after I will get matched.
string = `I_do_consists_of_words and spaces`;
regex = /\S/;             // \S capital S means non space, "I" will get matched.
regex = /\S+/;           // \S capital S means any no. of non spaces, "I_do_consists_of_words" will get matched.

// Word boundary 
string = "Words and only %words will be matched"
regex = /\bWords/;       // \b matches a part of a word, that start will a non word character, words will be matched
regex = /\bWor/;       // Wor will be matched, since it doesn't start with a word character
regex = /\bords/;       // null will matched

result = regex.exec(string);
console.log(result);
