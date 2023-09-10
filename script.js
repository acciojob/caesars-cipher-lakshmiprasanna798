// Your Script here.
acciojob
First domain name: Symbolics.Com (1985).

Please wait for a while.
If this page keeps loading


Click Here
Hi, for getting live doubt zoom link, after selecting the 'Coding' button type 'video' or 'call'. The link will be shared in under 60 seconds.

Fact: For quick resolution, it is recommended to ask your doubts on chat. Typically, video call resolution may take 15-20 minutes.
doubt sir
Select the type of your doubt.
- To request a video call with your mentor, simply type 'call' or 'video' for the Zoom link.

- Video links are unavailable from 8-11 PM during live lectures.

- The common language of response is English, but you can specify a different language if desired (e.g., "Explain in Hindi").
english
I am not getting the logic of codes
send me the link of zoom
I understand that coding can be challenging at times. Could you please specify which part of the code you're having trouble with? It would be helpful if you could share the code or the concept you're struggling with. I'm here to help you understand it better.
sir
It seems, video links are not available right now, let's try to resolve this through chat only.
oo
// Your Script here.

for (let i = 0; i < encodedStr.length; i++) {
// Inside this loop, you can access each character using encodedStr[i]
}

let char = encodedStr[i];
let decodedChar = lookup[char];
decodedArr.push(decodedChar);

return decodedArr.join('');
const lookup = {
A: "N",
B: "O",
C: "P",
D: "Q",
E: "R",
F: "S",
G: "T",
H: "U",
I: "V",
J: "W",
K: "X",
L: "Y",
M: "Z",
N: "A",
O: "B",
P: "C",
Q: "D",
R: "E",
S: "F",
T: "G",
U: "H",
V: "I",
W: "J",
X: "K",
Y: "L",
Z: "M",
"?": "?",
",": ",",
};

function rot13(encodedStr) {
let decodedArr = []; // Your Result goes here
// Only change code below this line

return; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
Yes, how can I assist you further with your coding logic?
exaplain the code of question and code
Sure, I'd be happy to explain this code to you.

This code is implementing a famous cipher called ROT13 ("rotate by 13 places"). It's a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet. ROT13 is a special case of the Caesar cipher which was developed in ancient Rome.

Here's a breakdown of the code:

The lookup object is a dictionary that maps each letter of the alphabet to the letter 13 places ahead of it. For example, 'A' maps to 'N', 'B' maps to 'O', and so on. The '?' and ',' characters map to themselves.

The rot13 function is where the decoding happens. It takes an encoded string as input.

Inside the rot13 function, an empty array decodedArr is created to hold the decoded characters.

A for loop is used to iterate over each character in the input string. For each character, the corresponding decoded character is found in the lookup object and added to the decodedArr array.

After all characters have been decoded, the decodedArr array is joined into a string and returned as the result.

The console.log(rot13("SERR YBIR? NPPVBWBO")); line is used to test the function with the input string "SERR YBIR? NPPVBWBO".

I hope this helps! Let me know if you have any other questions.
I did'nt got it sir
I understand that this can be challenging. Let's break it down step by step. You're doing great!

The code you've shared is implementing a cipher called ROT13. A cipher is a way to encrypt a message so that it can't be understood unless you know the rules of the cipher. In the case of ROT13, the rule is to replace each letter with the letter 13 places ahead of it in the alphabet.

Let's break down the code:

lookup is an object that acts like a dictionary. It has all the letters of the alphabet as keys, and their ROT13 equivalents as values. For example, the key 'A' has the value 'N', because 'N' is 13 letters ahead of 'A' in the alphabet.

rot13 is a function that takes an encoded string as an argument. This string is encoded using the ROT13 cipher.

Inside the rot13 function, an empty array decodedArr is created. This will hold the decoded characters of the encoded string.

A for loop is used to go through each character in the encoded string. For each character, the loop does the following:
- It gets the decoded character from the lookup object. This is done using lookup[char], where char is the current character.
- It adds the decoded character to the decodedArr array using decodedArr.push(decodedChar).

After the loop has gone through all the characters, the decodedArr array is turned into a string using decodedArr.join(''). This string is the decoded message, and it's what the function returns.

The line console.log(rot13("SERR YBIR? NPPVBWBO")); is used to test the function. It prints the result of decoding the string "SERR YBIR? NPPVBWBO" using the rot13 function.

I hope this explanation is clearer. Let me know if you have any questions!
no sir send me a code sir
I'm sorry for the misunderstanding, but I can't provide you with the complete solution code. It's important to understand the logic and try to implement it yourself for better learning. However, I can guide you on how to approach this problem.

Here's a step-by-step guide on how you can implement the rot13 function:

Initialize an empty array decodedArr to store the decoded characters.

Use a for loop to iterate over each character in the encodedStr.

Inside the loop, get the current character and store it in a variable, say char.

Use the lookup object to get the decoded character for the current character. You can do this using lookup[char]. Store the result in a variable, say decodedChar.

Add decodedChar to the decodedArr array using the push method.

After the loop, use the join method to convert decodedArr into a string. This will be your decoded string.

Return the decoded string.

Remember, the key here is understanding how the ROT13 cipher works and how you can use a lookup object to map each character to its decoded equivalent. Try to implement the function using these steps and let me know if you face any issues.
// Your Script here.

for (let i = 0; i < encodedStr.length; i++) {
// Inside this loop, you can access each character using encodedStr[i]
encodedStr[i]=N",
B: "O",
C: "P",
D: "Q",
E: "R",
F: "S",
G: "T",
H: "U",
I: "V",
J: "W",
K: "X",
L: "Y",
M: "Z",
N: "A",
O: "B",
P: "C",
Q: "D",
R: "E",
S: "F",
T: "G",
U: "H",
V: "I",
W: "J",
X: "K",
Y: "L",
Z: "M",
"?": "?",
",": ",",
}

let char = encodedStr[i];
let decodedChar = lookup[char];
decodedArr.push(decodedChar);

return decodedArr.join('char');
const lookup = {
A: "N",
B: "O",
C: "P",
D: "Q",
E: "R",
F: "S",
G: "T",
H: "U",
I: "V",
J: "W",
K: "X",
L: "Y",
M: "Z",
N: "A",
O: "B",
P: "C",
Q: "D",
R: "E",
S: "F",
T: "G",
U: "H",
V: "I",
W: "J",
X: "K",
Y: "L",
Z: "M",
"?": "?",
",": ",",
};

function rot13(encodedStr) {
let decodedArr = []; // Your Result goes here
// Only change code below this line

return; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
I see that you're trying to implement the ROT13 cipher. However, there seems to be a misunderstanding in your code. You're trying to assign the lookup object inside the for loop, which is not correct.

Here's a corrected version of your code:

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
  for (let i = 0; i < encodedStr.length; i++) {
    let char = encodedStr[i];
    let decodedChar = lookup[char];
    decodedArr.push(decodedChar);
  }
  return decodedArr.join(''); //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;

In this code, the lookup object is defined outside the function, and then used inside the function to decode each character. The decoded characters are added to the decodedArr array, which is then joined into a string and returned.

I hope this helps! Let me know if you have any other questions.
