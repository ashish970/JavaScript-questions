/*Write a program to demonstrate the results of comparison operators. Note that both the truth and false
condition for each operator must be specified. */

/*
1.Equal
2.Not Equal
3.Strictly Equal
4.Strictly not Equal
5.Greator than
6.Greator than or equal to
7.Lesser than
8.Lesser than  or equals to
*/

//equal
let num1 = 45
let num2 = 45
console.log(num1 == num2);             //true

let num3 = 56
let num4 = 65
console.log(num3 == num4);            //false


//not equal
let num5 = 44
let num6 = 44
console.log(num5 !== num6);                     //false


let num7 = 32
let num8 = 67
console.log(num7 !== num8);                        //true




//strictly equal
let num9 = 56
let num10 = 87
console.log(num9 ===num10);                        //false


let num11 = 66
let num12 = 66
console.log(num11 === num12);                      //true



//strictly not equal
let num13 = 44
let num14 = 44
console.log(num13 !== num14);             //false

let num15 = 78
let num16 = 34
console.log(num15 !== num16);               //true


//grater than
let num17 = 81
let num18 = 23
console.log(num17 > num18);                 //true

let num19 = 45
let num20 = 56
console.log(num19 > num20);                   //false



//greator than or equal to
let num21 = 40
let num22 = 90
console.log(num21 >= num22);                   //false

let num23 = 78
let num24 = 23
console.log(num23 >= num24);                      //true



//lesser than
let num25 = 39
let num26 = 98
console.log(num25 < num26);                        //true

let num27 = 90
let num28 = 44
console.log(num27 < num28);                        //false