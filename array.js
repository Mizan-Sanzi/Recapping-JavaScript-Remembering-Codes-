const numbers = [23, 25, 27, 32, 32, 34, 36, 40]; //elements of the array is numbers;
let name = ['Mehedi', 'Afzal', 'Kamal', 'Noman', 'Ullash', 'Bindu']; //elements of the array is string;
const passed = [true, false, true, true, false]; //boolean elements of an array;
const mixedArray = [12, 'Abul', true, 'Kabul', 77]; //mixed elements of an array;

// length of array
const lengthofNumbers = numbers.length;
console.log('length of numbers', lengthofNumbers);

// index of array
let name2 = ['Mehedi', 'Afzal', 'Kamal', 'Noman', 'Ullash', 'Bindu']; //elements of the array is string;
console.log(name2[1], name2[0], passed[0]);

//set or update element value by index
name2[6] = 'Mizan';
console.log(name2.length);

//push, pop, shift, unshift etc... shift and unshift is oppositely similar to push and pop
name2.push('Elan');
console.log(name2);

name2.pop(); //removed last element [Elan]
console.log(name2);

// includes, indexOf, isArray, 
console.log(name2.includes('Elan'));
console.log(name2.includes('Afzal'));
console.log(name2.indexOf('Afzal'));
console.log(name2.indexOf('Mizan'));

console.log('isArray?:', Array.isArray(name2));

// vid - 20.5 of milestone 4 (JS array -more)
// Looping in Array 
// 'for' loop
// 'while' loop
// 'do while' loop
// 'for of' loop ---for array looping
// 'for in' loop ---for object looping
let name3 = ['Mehedi', 'Afzal', 'Kamal', 'Noman', 'Ullash', 'Bindu']; //elements of the array is string;
for (let serial of name3){
    console.log('serial of name3:', serial);
}
for (let i =0; i<name3.length; i++){
    // console.log(i);
    console.log(name3[i]);
}

let i =0;
while(i<name3.length){
    console.log('printed', name3[i]);
    i++;
}

// Reversing an array with or without reverse method
let newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// newNum.reverse();
console.log('printed in reverse', newNum.reverse());

let newNum2 = [10, 11, 12, 13, 14, 15, 16];
let revNum = [];
for(let newRev of newNum2){
    // console.log(newRev);
    revNum = newNum2.reverse();
    console.log(revNum);
}
// console.log(revNum);