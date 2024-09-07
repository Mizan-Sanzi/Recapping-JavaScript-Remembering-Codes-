// ------------------------------------------comparison
console.log('code one', 5<10); //true
console.log('code two', 5>=10); //false

console.log('code three', 10 == 10); //true
console.log('code four', 10 =='10'); //true
console.log('code five', 10 === '10'); //false
console.log('code six', 10 != '10'); // false -though second '10' is string but it is being calculated as number and consider one thing,
console.log('code seven', 10 !== '10'); // true -though it is calculated as number but consider two things when compare

//structure of conditional codes
/*
if (condition) {
    statements....
}
else {
    statements....
}
 */

if (5<10){
    console.log('It is printing a result because 5 is less than 10') //if condition is true, statements of this part will print
}

if (17<10){
    console.log('This line will not be printed because the condition is false'); //here the statement of the next part will be printed!
}
else {
    console.log('We are seeing this output because 17 is not less than 10');
}

//--------------------------------------------multiple condition
const salary = 30000;
const isBCS = true;
const height = 67;

if (salary>25000 && isBCS == false){
    console.log('Agreed');
}
else {
    console.log('Search for another');
}

//----------------------------------------------multilevel condition
const price = 5000;

if (price>=5000){
    const discount = price*10/100;
    const pleasePay = price-discount;
    console.log(pleasePay); //this is the output
}
else {
    console.log('Please pay full price:', price);
}
//-----------------------------------------------------------------------------------
const totalPrice = 4000;

if (totalPrice>=5000){
    const discount = totalPrice*10/100;
    const pleasePay = totalPrice-discount;
    console.log(pleasePay);
}
else {
    console.log('Please pay full price:', totalPrice); //this is the output
}

// ----------------------------------------------------------------------------------
const grandTotal = 3000;

if (grandTotal>=5000){
    const discount = grandTotal*10/100;
    const pleasePay = grandTotal-discount;
    console.log(pleasePay);
}
else if (grandTotal<=3000) {
    const maxDiscount = grandTotal*5/100;
    const totalPay = grandTotal-maxDiscount;
    console.log('As your price is less than 3000, you have to pay:', totalPay); //this is the output
}
else {
    console.log('Please pay full price:', grandTotal);
}

//-------------------------------------------------------nested if else
const money = 50;

if (money>300){
    console.log('Bro, you are rich');
}
else {
    if(money>200){
        console.log('Bro, you are going to be rich');
    }
    else {
        if (money>50){
            console.log('at least you have some money to eat today\'s lunch');
        }
        else {
            console.log('Work hard so that you can earn more money');
        }
    }
}
