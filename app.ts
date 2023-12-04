// console.log("Type Script")
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

// function calcDistance(location1: {lon: number; lat: number}, location2: {lon: number; lat: number}) {
//
//     let lon1 = location1.lon;
//     let lat1 = location1.lat;
//
//     let lon2 = location2.lon;
//     let lat2 = location2.lat;
//
//
//     // ---- calc distance  ----
//     const dLat = lat2 - lat1;
//     const dLon = lon2 - lon1;
//     const a =
//         Math.sin(dLat / 2) ** 2 +
//         Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//
//     // Radius of the Earth in kilometers (mean value)
//     const R = 6371;
//
//     // Calculate the distance
//     let distance = R * c;
// // ---- calc distance  ----
//
//     return distance;
//
// }
//
// let location_1 = { lon: 80.7718, lat: 7.8731 }; // sri lanka
// let location_2 = { lon: 133.7751, lat: 25.2744 }; // ausi
//
// let distance = calcDistance(location_1, location_2);
// console.log(`Distance: ${distance.toFixed(2)} KM`);


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

// let data: [string , number , string , boolean , number] = ['hello' , 12 , 'BAAAA' , true , 52];

//-------------------------------------- Fixed Deposit ----------------------------

// let ownerName_inputElement = document.getElementById('ownerName') as HTMLInputElement;
// let fixedAmount_inputElement = document.getElementById('fixedAmount') as HTMLInputElement;
// let newInterestRate_inputElement = document.getElementById('newInterestRate') as HTMLInputElement;
//
// let addFix_btn = document.getElementById('addFixBtn');
// let update_interest_rate_btn_element = document.getElementById('updateInterestBtn');
// let table_body = document.getElementById('fixedDepositTableBody');
//
// let rate = +12.5;
// let accounts:Account_Details [] = [];
//
// addFix_btn.addEventListener('click',() =>{
//     let ownerName =  ownerName_inputElement.value;
//     let fixedAmount = fixedAmount_inputElement.value;
//
//
//     let annual_interest = (+fixedAmount*12.5)/100;
//     let account =  new Account_Details(ownerName,+fixedAmount,rate,annual_interest);
//     accounts.push(account);
//     console.log(accounts);
//     updateTable();
// });
//
// function updateTable() {
//     table_body.innerHTML="";
//
//     accounts.map(r => {
//         let record_element = document.createElement('tr');
//         record_element.innerHTML = `<td>${r.owner_name}</td>
//                          <td>${r.fixed_amount}</td>
//                          <td>${r.interest_rate}</td>
//                          <td>${r.annual_interest}</td>`;
//         table_body.appendChild(record_element);
//     });
// }
//
// class Account_Details {
//     owner_name:string;
//     fixed_amount:number;
//     interest_rate:number;
//     annual_interest:number;
//
//     constructor(owner_name:string,fixed_amount:number,interest_rate:number,annual_interest:number) {
//         this.owner_name=owner_name;
//         this.fixed_amount=fixed_amount;
//         this.interest_rate=interest_rate;
//         this.annual_interest=annual_interest;
//     }
//
//     updateRate(rate: number): void{
//         this.interest_rate = rate;
//         this.annual_interest = (this.fixed_amount * rate)/100;
//     }
// }
//
// update_interest_rate_btn_element.addEventListener('click', () =>{
//     let new_Interest_rate = newInterestRate_inputElement.value;
//     rate = +new_Interest_rate;
//     let newAccounts: Account_Details[] = [];
//     accounts.map(r => {
//         newAccounts.push(r);
//         r.updateRate(rate);
//
//     });
//     accounts = newAccounts;
//     updateTable();
// });

//------------------------------------------------- Union ----------------------------------

// let array:(String | number | boolean)[] = ["Hello" , 25 , true];
//
// class Student{
//     id: number;
//     name: String;
//     college: String;
//     faculty: String;
// }
//
// class Teacher{
//     id: number;
//     name: String;
//     college: String;
//     faculty: String;
// }
//
// class Soldier{
//     id: number;
//     name: String;
//     college: String;
//     faculty: String;
// }

//---------------------------------------------- Roles ------------------------------------------

// enum Roles{
//     SUPER_ADMIN,
//     ADMIN,
//     MANAGER,
//     SELLER,
//     BUYER
// }
//
// let myRole: Roles = Roles.ADMIN;
//
// function sendMessage(role: Roles) {
//     switch (role){
//         case Roles.ADMIN:
//             console.log("Hello Admin !");
//             break;
//         case Roles.SUPER_ADMIN:
//             console.log("Hello Super Admin !");
//             break;
//         case Roles.MANAGER:
//             console.log("Hello Manager !");
//             break;
//         case Roles.SELLER:
//             console.log("Hello Seller !");
//             break;
//         case Roles.BUYER:
//             console.log("Hello Buyer !")
//     }
// }

//------------------------------------------- Heritage ------------------------------

// class Person{
//     name: string;
//     protected _nic: string;
//     age: number;
//
//
//     constructor(name: string, nic: string, age: number) {
//         this.name = name;
//         this._nic = nic;
//         this.age = age;
//     }
//
//     getNic(): string {
//         return this._nic;
//     }
// }
//
// class Teacher extends Person{
//     subject: string;
//     college: string;
//
//
//     constructor(name: string, nic: string, age: number, subject: string, college: string) {
//         super(name , nic , age);
//         this.subject = subject;
//         this.college = college;
//     }
//     getNic(): string {
//         return this._nic;
//     }
// }
//
// let teacher = new Teacher("Kasun" , "1256348" , 25 , "CS" , "IJSE") ;
//
// console.log(teacher.getNic());

//----------------------------------------------------- Abstract ---------------------------

// abstract class Animal{
//     abstract move(): void;
//     eat(): void{
//         console.log("Eat via mouth")
//     }
// }
//
// class Cat extends Animal{
//     move(): void {
//         console.log("Using Legs")
//     }
// }
//
// class Bird extends Animal{
//     move(): void {
//         console.log("Using feathers")
//     }
// }
//
// let animel1: Animal = new Cat();
// animel1.eat();
// animel1.move();
// let animel2: Animal = new Bird();
// animel2.eat();
// animel2.move();

//------------------------------------------- Generics --------------------------------------

class Student{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let array1: number[] = [1, 2, 3 , 4 , 5];
let array2: string[] = ["Hello" , "IJSE" , "GDSE"];
let array3: Student[] = [new Student("Kasun" , 25),
                            new Student("Pasun" , 22),
                            new Student("Dasun" , 24)];
let array4: boolean[] = [true, false, true, true, false];

function removeLastItem<T>(array: T[]): T[] {
    return array.slice(0, array.length -1);
}

let result1 = removeLastItem<number>(array1);
console.log(result1);
let result2 = removeLastItem<string>(array2);
console.log(result2);
let result3 = removeLastItem<Student>(array3);
console.log(result3);
let result4 = removeLastItem<boolean>(array4);
console.log(result4);

class SmartArray<T>{
    private array: T[];

    constructor(array: T[]) {
        this.array = array;
    }
}

new SmartArray<number>(array1);
new SmartArray<string>(array2);
// new SmartArray<string>(array2);
new SmartArray<Student>(array3);
new SmartArray<boolean>(array4);

