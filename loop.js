// Recapping Loop
// vid - 20.5.1 of milestone 4 (JS array -more)
// Looping in Array 
// 'for' loop
// 'while' loop
// 'do while' loop
// 'for of' loop ---for array looping
// 'for in' loop ---for object looping

let fruits = ['apple', 'banana', 'date', 'strawberry', 'orange'];
console.log('printed', fruits); //printed in an array because it is not looping...

// 'for loop'. milestone 4, module-19 

//vid-1: what is loop? explore 'for loop'.
for (let fruit of fruits){
    console.log('printed', fruit); //printed one by one because it is looping...
}

// milestone 4, module-19, vid -2, intro to 'while loop'
let number = 0; //loop variable
while(number<10){
    console.log('looping:', number);
    number = number+1;
}

// vid-3 problem solving with while loop
let num = 50;
while (num <100){
    console.log(num);
    num++; //num++ is same as the number+1 of above code!
}
// doing sum with while loop
let num2 = 1;
let sum = 0;
while(num2<=10){
    console.log(num2);
    sum = sum+num2;
    console.log('sum:', sum);
    num2++
}
//finding even number with while loop
let num3 = 1;
while(num3<=10){
    console.log(num3);
    if (num3 % 2 === 0){
        console.log('Even number:', num3)
    }
    num3++;
}

// vid-4
