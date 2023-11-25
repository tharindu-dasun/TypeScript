console.log("Type Script")
//
// function sum(num1: number , num2: number){
//     return num1 + num2;
// }
//
// let n1 = '10';
// let n2 = 20;
//
// let value1 = sum(+n1 , +n2);
// console.log(value1);
//
// let value2 = sum(+n1 , +n2);
// console.log(value2);

//---------------------------------Primitives---------------------------------------------

// function sendSum(num1: number , num2: number , name:string , isWithName:boolean) {
//     let result = isWithName ? `Hi  ${name}, Sum is ${num1 + num2}` : `Sum is ${isWithName}`;
//     return result;
// }
//
// let  num1: number= 10;
// let  num2: number= 20;
// let myName: string= "Tharindu";
// let isWithName: boolean= true;
//
// let result1 =  sendSum(10 , 20 , "Tharindu" , true);
// console.log(result1);
//
// let result2 =  sendSum(10 , 20 , "Tharindu" , false);
// console.log(result2);

//---------------------------------------

function sum(num1:number, num2:number): number{  // reture type eka number kiyala denawa
    return num1 + num2;
}

function sumString(num1:number, num2:number): string{  // reture type eka number kiyala denawa
    return `sum is : ${num1 + num2}`;
}

function findSum(num1:number | string , num2:number | string):number {
    if (typeof num1=="string" || typeof num2=="string"){   //type guard
        return +num1 + +num2;
    }else{
        return num1 + num2;
    }
}

let results4 = findSum('10000000 ', 20);
console.log("Result is : " + results4);

let results = sum(10, 20);
console.log(`result : `, results);

function findSum2(num1:number, num2:number): number | string {
    if (typeof num1=="string" || typeof num2=="string"){
        return +num1 + +num2;
    }else{
        return num1 + num2;
    }
}

let result5 = findSum2(10 , 12 );
console.log("Result is : " + result5);