const lab1 = require("./lab1");

console.log(lab1.questionOne([2])); 
// returns and output: {'3': true} 
console.log(lab1.questionOne([5, 3, 10])); 
// returns and outputs: {'18': false, '2': true, '93': false}
console.log(lab1.questionOne([])); 
// returns and outputs: {}
console.log(lab1.questionOne()); 
// returns and outputs: {}
console.log(lab1.questionOne([3])); 
// returns and outputs: { ' 2': true } 
console.log(lab1.questionOne([4, 5, 6])); 
// returns and outputs: { ' 9': false, ' 18': false, ' 29': true } 
console.log(lab1.questionOne([7, 8, 9, 10])); 
// returns and outputs: { ' 42': false, ' 57': false, ' 74': false, ' 93': false } 
console.log(lab1.questionOne([11, 12, 13, 14, 15])); 
// returns and outputs: { ' 114': false,' 137': true,' 162': false,' 189': false,' 218': false}
console.log(lab1.questionOne([16, 17, 18, 19, 20, 21, 21])); 
// returns and outputs: {' 249': false,' 282': false,' 317': true,' 354': false,' 393': false,' 434': false} 

console.log(lab1.questionTwo([1, 2, 3, 2, 1])); 
//returns and output: [1, 2, 3] 
console.log(lab1.questionTwo([1, 1, 1, 1, 1, 1])); 
//returns and outputs: [1]
console.log(lab1.questionTwo([1, '1', 1, '1', 2])); 
// returns and outputs: [1, '1', 2] 
console.log(lab1.questionTwo([3, 'a', 'b', 3, '1'])); 
// returns and outputs: [3, 'a', 'b', '1']
console.log(lab1.questionTwo([])); 
//returns and outputs: []
console.log(lab1.questionTwo([5, 5, 5, 6, 7, 8])); 
// returns and outputs: [ 5, 6, 7, 8 ]
console.log(lab1.questionTwo(['a', 'a', 'b', 'a', 'c'])); 
// returns and outputs: [ 'a', 'b', 'c' ]
console.log(lab1.questionTwo(['d', 'e', 'f', 'g', 'h'])); 
// returns and outputs: [ 'd', 'e', 'f', 'g', 'h' ]
console.log(lab1.questionTwo([1, 2, 3, 4, 5])); 
// returns and outputs: [ 1, 2, 3, 4, 5 ]
console.log(lab1.questionTwo(['a', 'm', 'm', 'm', 'n'])); 
// returns and outputs: [ 'a', 'm', 'n' ]

console.log(lab1.questionThree(["bar", "car", "car", "arc"])); 
// should return and output: { acr: ["car", "arc"] }
console.log(lab1.questionThree(["cat", "act", "foo", "bar"])); 
// returns and outputs: { act: ["cat", "act"] }
console.log(lab1.questionThree(["race", "care", "foo", "foo", "foo"]));
// returns and outputs: { acer: ["race", "care"] } 
console.log(lab1.questionThree(["foo", "bar", "test", "Patrick", "Hill"]));
// returns and outputs: {}
console.log(lab1.questionThree([])); 
// returns and outputs: {}
console.log(lab1.questionThree(["foo", "off", "oof", "bar", "arb", "rab"]));
// returns and outputs: { foo: [ 'foo', 'oof' ], abr: [ 'arb', 'rab' ] }
console.log(lab1.questionThree(["abc", "bca", "cab", "abc", "abc"]));
// returns and outputs: { abc: [ 'bca', 'cab' ] }
console.log(lab1.questionThree(["def", "def", "def", "def", "def"]));
// returns and outputs: {}
console.log(lab1.questionThree(["ghi", "ghi", "ghi", "igh", "ghi"]));
// returns and outputs: { ghi: [ 'ghi', 'igh' ] }
console.log(lab1.questionThree(["act","bear","tac","cat"]));
// returns and outputs: { lmn: [ 'nml', 'mnl' ], mno: [ 'nmo', 'nom' ] }

console.log(lab1.questionFour(1, 3, 2)); 
//returns and output: 4
console.log(lab1.questionFour(2, 5, 6)); 
//returns and outputs: 194 
console.log(lab1.questionFour(1, 3, 6)); 
//returns and output: 218
console.log(lab1.questionFour(1, 7, 2)); 
//returns and output: 1512
console.log(lab1.questionFour(4, 9, 8))
//returns and outputs 57603
console.log(lab1.questionFour(3, 4, 5))
//returns and outputs 37
console.log(lab1.questionFour(4, 2, 3))
//returns and outputs 10