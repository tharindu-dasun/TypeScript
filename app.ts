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

//---------------------------------------Type Guard--------------------------------------

// function sum(num1:number, num2:number): number{  // reture type eka number kiyala denawa
//     return num1 + num2;
// }
//
// function sumString(num1:number, num2:number): string{  // reture type eka number kiyala denawa
//     return `sum is : ${num1 + num2}`;
// }
//
// function findSum(num1:number | string , num2:number | string):number {
//     if (typeof num1=="string" || typeof num2=="string"){   //type guard
//         return +num1 + +num2;
//     }else{
//         return num1 + num2;
//     }
// }
//
// let results4 = findSum('10000000 ', 20);
// console.log("Result is : " + results4);
//
// let results = sum(10, 20);
// console.log(`result : `, results);
//
// function findSum2(num1:number, num2:number): number | string {
//     if (typeof num1=="string" || typeof num2=="string"){
//         return +num1 + +num2;
//     }else{
//         return num1 + num2;
//     }
// }
//
// let result5 = findSum2(10 , 12 );
// console.log("Result is : " + result5);

//------------------------------------------------

// let student : {
//     id: number;
//     name: string;
//     age: number;
//     college: string;
// };
//
// student = {id: 1, name:'kasun', age:28 , college: "UOC"};

//------------------------Distance Calculate--------------------------

function calcDistance(location1: {lon: number; lat: number}, location2: {lon: number; lat: number}) {

    let lon1 = location1.lon;
    let lat1 = location1.lat;

    let lon2 = location2.lon;
    let lat2 = location2.lat;


    // ---- calc distance  ----
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Radius of the Earth in kilometers (mean value)
    const R = 6371;

    // Calculate the distance
    let distance = R * c;
// ---- calc distance  ----

    return distance;

}

let location_1 = { lon: 80.7718, lat: 7.8731 }; // sri lanka
let location_2 = { lon: 133.7751, lat: 25.2744 }; // ausi

let distance = calcDistance(location_1, location_2);
console.log(`Distance: ${distance.toFixed(2)} KM`);


//---------------------------------- Array ---------------------------------

// let  num_array: number[] = [10,20,30];
// let  string_array: string[] = ['hello' , 'abc' , 'cde'];
// let string_number_array: (string|number)[] = [1,2,'l','hello',7];
//
// let student1 = {id: 1 , name: 'kasun' , age: 25 , faculty: 'CSE'};
// let student2 = {id: 2 , name: 'dasun' , age: 26 , faculty: 'TONIC'};
// let student3 = {id: 3 , name: 'kamal' , age: 24 , faculty: 'TONIC' , uni: 'UOC'}; // uni is a optional value
//
// let students: {id: number , name: string , age: number , faculty: string , uni?: string}[] = []; // optional nisa ? danawa
//
// students.push(student1);
// students.push(student2);
// students.push(student3);

//-------------------------------------------------Types----------------------------------

// let  num_array: number[] = [10,20,30];
// let  string_array: string[] = ['hello' , 'abc' , 'cde'];
// let string_number_array: (string|number)[] = [1,2,'l','hello',7];
//
// let student1 = {id: 1 , name: 'kasun' , age: 25 , faculty: 'CSE'};
// let student2 = {id: 2 , name: 'dasun' , age: 26 , faculty: 'TONIC'};
// let student3 = {id: 3 , name: 'kamal' , age: 24 , faculty: 'TONIC' , uni: 'UOC'}; // uni is a optional value
//
// type Graduate = {id: number , name: string , age: number , faculty: string , uni?: string};
//
// let students: Graduate[] = [];
// let teachers: Graduate[] = [];
// let dogs: Graduate[] = [];
//
// students.push(student1);
// students.push(student2);
// students.push(student3);

//------------------------------------------ interface ---------------------------

// let  num_array: number[] = [10,20,30];
// let  string_array: string[] = ['hello' , 'abc' , 'cde'];
// let string_number_array: (string|number)[] = [1,2,'l','hello',7];
//
// type Graduate = {id: number , name: string , age: number , faculty: string , uni?: string};
//
// interface Graduate2 {
//     id: number;
//     name: string;
//     age: number;
//     faculty: string;
//     uni?: string;
// }
//
// let students: Graduate[] = [];
// let teachers: Graduate2[] = [];

//--------------------------------------------------Classes--------------------------

// class person{
//     name: string;
//     age: number;
//     readonly nic: string; // readonly keyword eka use kalama change k ba
//
//     constructor(name: string , age: number , nic: string) {
//         this.name = name;
//         this.age = age;
//         this.nic = nic;
//     }
// }
//
// let person1 = new person('kasun' , 25 , '1256355554');
// console.log(person1);
// person1.name = "Janith";
// // person1.nic = '586958658';  ----> nic is read only cannot change
// console.log(person1);

// ------------------------------------------- Private key word --------------------------

// class person{
//     public name: string;
//     public age: number;
//     private nic: string; // private key word
//
//     constructor(name: string , age: number , nic: string) {
//         this.name = name;
//         this.age = age;
//         this.nic = nic;
//     }
//
//     getNic(){
//         return this.nic;
//     }
// }
//
// let person1 = new person('kasun' , 25 , '1256355554');
// console.log(person1);
// person1.name = "Janith";
// console.log(person1.name)
// console.log(person1.getNic())

//----------------------------------------- Singleton ------------------------------------

// class DBConnection{
//     static connection: string;
//
//     private constructor(value:string) {
//         DBConnection.connection = value;
//     }
//
//     static getConnection(){
//         if (!DBConnection.connection){
//             new DBConnection('test-connection')
//         }
//         return DBConnection.connection;
//     }
// }
//
// let connection: string = DBConnection.getConnection();
// console.log("Connection : " + connection)

//------------------------------------------------Tuple-----------------------------

// tuple = piliwelakata hadapu change nowena collection ekak

let data: [string , number , string , boolean , number] = ['hello' , 12 , 'BAAAA' , true , 52];