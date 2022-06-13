let greeting: string = "hello world";
const integerArray: number[] = [1,2,3,4,5];
const num: number = 10;
console.log(greeting, integerArray, num);

const addNumber = (n1: number, n2 : number): number =>{
    return n1 + n2;
}
console.log("addNumber",addNumber(2,3));

// there are data types
// number -> all type like integer and float
// string -> ""
// boolean -> true, false
// object 
// array
// enum 
// union 

const personName:string = "John";
const score: string = '1'; 
const score1:number = parseFloat(score)
const score2:number = 42.50
const sum = score1 + score2 
console.log("name "+personName) 
console.log("first score: "+ typeof score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)

// array
let alphas:string[]; 
const numArray: number[] = [1,2,3,4,5]
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(numArray[1]);

// tuple -> there might be a need to store a collection of values of varied types.
var mytuple = [10,"Hello"];
console.log(mytuple[0]) 
console.log(mytuple[1])

// union 
function disp(name:string|string[]):void { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 
 disp("mark") 
 console.log("Printing names array....") 
 disp(["Mark","Tom","Mary","John"])

//  interface 
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
const personObj:IPerson = { 
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHi: ()=>{ return "Hi"} 
 };

 //namespaces -> like we can write namespaces in a file a exported interface of class  to anywhere
//  into project
 namespace SomeNameSpaceName { 
    export interface ISomeInterfaceName {      }  
    export class SomeClassName {      }  
 } 