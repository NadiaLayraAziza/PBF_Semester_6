let fname = 'Cristian';
let lname = 'Ronaldo';
let age = prompt("Masukkan umur Cristian Ronaldo!");

// Cara lama
// let result = fname + '' + lname + 'is' + age + 'years old';
// alert(result);

// Memakai templete strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);