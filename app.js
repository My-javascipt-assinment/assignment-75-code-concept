/*==================================== Question No 1 =========================================


======================================= Answer =====================================*/
// const calculateSalary = (from,to,pay)=>{
//     const workingDays = ['Monday','Wednesday','Friday'];
//     const fromDate = new Date(from);
//     const toDate = new Date(to);
//     const eachDayPay = Number(pay);
//     let totalPay = 0;
//     for(let i = fromDate;i <= toDate;i.setDate(i.getDate()+1)){
//         const fullDays = i.toLocaleDateString('en-US',{weekday : 'long'})
//         if(workingDays.includes(fullDays)){
//             totalPay = totalPay + eachDayPay
//         }
//     }
//     console.log('total pay ',totalPay)
// }
// calculateSalary('2026-03-21','2026-04-20','500')






/*==================================== Question No 2 =========================================


======================================= Answer =====================================*/

// function calculateSalary(from, to, pay) {

//     // Monday, Wednesday, Friday
//     let workingDays = [1, 3, 5];

//     let start = new Date(from);
//     let end = new Date(to);

//     let total = 0;

//     for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {

//         let day = d.getDay(); // number of day

//         if (workingDays.includes(day)) {
//             total += pay;
//         }
//     }

//     console.log(total);
// }

// calculateSalary('2026-03-21', '2026-12-20', 500);

// const calculateSalary = (from,to,pay)=>{
//     let workingDays = [1,3,5];
//     let start = new Date(from);
//     let end = new Date(to);
//     // console.log(start)
//     let total = 0;
//     for(let i = start;i <=end;i.setDate(i.getDate()+1))
//     {
//         // console.log(i)
//         let day = i.getDay()
//         console.log(day)
//         if(workingDays.includes(day))
//         {
//             total = total + pay
//         }
//     }
//     console.log(total)

// }
// calculateSalary('2026-03-21','2026-3-31',500)
/*==================================== Question No 3 =========================================
DOM related
======================================= Answer =====================================*/
// let main = document.getElementById('parent');
// console.log(main)
// let child = main.children;
// console.log(child)
// console.log(main.childNodes)

/*==================================== Question No 4 =========================================
document.createElement 
we can create an html element by this
.createTextNode
 we can create any text in any html element by js

======================================= Answer =====================================*/
// let div = document.getElementById('div');

// let heading = document.createElement('h1');
// let headingContent = document.createTextNode('i am heading');

// heading.appendChild(headingContent);
// div.appendChild(heading);

/*==================================== Question No 5 =========================================
white space removal
======================================= Answer =====================================*/
// let str = ' hello what is your name ';
// // console.log(str.length)
// // let newStr = str.trim();
// // console.log(newStr)
// // console.log(newStr.length)
// console.log(str.length);
// let newStr = str.replace(/\s+/g,'');
// console.log(newStr.length)
/*==================================== Question No 6 =========================================
.flat()
remove nested array by default 1 and if we give it 2 than 
it remove nested array till 2, if we give it infintiy it removes all nested array

======================================= Answer =====================================*/
// let arr = [1,2,3,[4,5,[6,7,[8,9,[10]]]]]
// console.log(arr.flat(Infinity))

/*==================================== Question No 7 =========================================
falsy value 
0,undefined,null,'',NaN,false

======================================= Answer =====================================*/
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(null));
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(false))
// if({}){
//     console.log('ok')
// }
// else{
//     console.log('it is falsy value')
// }
/*==================================== Question No 8 =========================================
promise

======================================= Answer =====================================*/
// let input = 8
// let num = new Promise((resolve,reject)=>{
//     if(input % 2 == 0){resolve('resolved successfully')}
//     else{ reject('rejected')}
// })

// .then((ans)=>{console.log(ans)})
// .catch((error)=>{console.log(error)})
/*==================================== Question No 9 =========================================


======================================= Answer =====================================*/
//  let testing = async()=>{
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     let data = await fetch(url);
//     let jsonData = await data.json();
//     console.log(jsonData)
//     // console.log(data)
// }
// testing()

// let testing = async()=>{
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     let data = await fetch(url);
//     let jsonData = await data.json()
//     console.log(jsonData)
//     show(jsonData)
// }
// testing()
// function show(d){
//     let ul = document.getElementById('ul');
//     if(Array.isArray(d) && d.length >0){
//         ul.innerHTML = d.map((item)=>{
//             return `<li>${item.id} ${item.name}</li>`
//         }).join('')
//     }

// }
/*==================================== Question No 10 =========================================

Math.pow( ) is used to know the power of any number 
it takes two things in parameter one number and another the required power thant we want to know
======================================= Answer =====================================*/
// let num = 2;
// let ans = Math.pow(num,3)
// console.log(ans)
/*==================================== Question No 11 =========================================

** exponentiation operator is advance of math.pow()
======================================= Answer =====================================*/
// let num = 2;
// let ans = num **3;
// console.log(ans)

/*==================================== Question No 12 =========================================
when our js file is compiled all the variable and funciton that we have defined in page 
auto go to the top of the page  and if we access them before initialization 

======================================= Answer =====================================*/
// console.log(a)
// // var a = 4
// // let a =4;
// const a = 4
// hello()
// function hello(){
//     console.log('ok')
// }

// fn()
// let fn = ()=>{
//     console.log('ok')
// }
/*==================================== Question No 13 =========================================
variable scoping

======================================= Answer =====================================*/
// let a = 23;
// function abc(){
//     console.log(a)
//     let b = 87;
//     console.log(b)
// }
// abc()
// console.log('global scope ',a)
// console.log(b)
//   {
//     var a = 34
//     // let b = 22
//     const c = 'hello'
//   }
//   console.log(a)
// //   console.log(b)
// console.log(c)
/*==================================== Question No 14 =========================================
closure function 
closure function remember the scope of it parent functin even parent function is 
finished after executing one time

======================================= Answer =====================================*/
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }
// let ans = counter();
// ans()
// ans()


/*==================================== Question No 15 =========================================
difference /var/let const

======================================= Answer =====================================*/
// var a = 5;
// var a = 6;
// console.log(a)

// let b = 2;
//  b = 3;
// console.log(b)

// const c = 99;
    //  console.log(c)

/*==================================== Question No 16 =========================================
array destructuring

======================================= Answer =====================================*/
// let fruits = ['apple','banana','mango']
// // console.log(fruits[1])
// // let [one,two,three] = fruits;
// // console.log(one)
// // console.log(three);
// // console.log(two)
// let [one,...two] =fruits
// console.log(two)
/*==================================== Question No 17 =========================================
object destructuring

======================================= Answer =====================================*/
// let obj = {
//     name : 'aziz',
//     age : 30,
//     designation : 'developer'
// }
// console.log(obj.name)
// let {name,age,designation} =obj
// console.log(age)
// console.log(designation)
/*==================================== Question No 18 =========================================
enhanced object literals

======================================= Answer =====================================*/
// let name = 'ali';
// let age = 32;
// let designation = 'develoerp'
// let obj = {
//     name,
//     age,
//     designation
// }
// console.log(obj)
/*==================================== Question No 19 =========================================
itrator for/in

======================================= Answer =====================================*/
// let fruits = ['apple','banana','mango','grapes']
// for(let k of fruits){
//     console.log(k)
// }


// let obj = {
//     name :'azzi',
//     age : 32,
//     designation : 'developer'
// }

// for(let k in obj){
//     console.log(`${k}  ${obj[k]}`)
// }
/*==================================== Question No 20 =========================================
accessing of key in such object that is not existed throw an error , we handle it 
by optional chainging ?.

======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     age : 33,
//     info : {
//         city :'karachi',
//         designation: 'develoerp'
//     }
// }
// console.log(obj.name)
// console.log(obj.c)
// console.log(obj?.infos?.citys)

/*==================================== Question No 21 =========================================
normal function we declare is called function declaration and the function we store in 
variable is called funciton expression 
it may be anonymous function , and have name also and can be 
arrow function also

======================================= Answer =====================================*/
// function abc(){
//     console.log('i am function declaration')
// }
// abc()

// let a = ()=>{
//     console.log('i am function expression')
// }
// a()

// let b = function(){
//     console.log('i am also function expression')
// }
// b()
// let z = function m(){
//     console.log('i am also function expression')
// }
// z()
/*==================================== Question No 22 =========================================
default parameter

======================================= Answer =====================================*/
// function abc(a,b= 5){
//     console.log(a + b)
// }
// abc(10,3)
/*==================================== Question No 23 =========================================
rest parameter

======================================= Answer =====================================*/
// function abc(a,b,...c){
// console.log(a)
// console.log(b)
// console.log(c)
// }
// abc('ali','hamza','shoaid','zaid','firdos','umeari')

// let obj = {
//     name : 'ali',
//     age :20,
//     password : 1234,
//     city: 'karachi'
// }
// console.log(obj)
// let {password,...m} = obj
// console.log(m)
/*==================================== Question No 24 =========================================
.conact() is used for 
merging arrays
======================================= Answer =====================================*/
// let a = ['a','b'];
// let b = ['c','d'];
// let c = ['e','f']
// let ans = a.concat(b,c)
// console.log(ans)
/*==================================== Question No 25 =========================================
spread operator(merging arrays/object copying arrays/object/ adding data in arrays/objects)
======================================= Answer =====================================*/
// let one = ['mango'];
// let two = ['apple'];
// let three = [...one,...two];
// console.log(three)
// let copyArray = [...three];
// console.log('copy of array ',copyArray)
//  let arr = [...copyArray,'ahmed','mubin','afzal']
//  console.log(arr)

// let objOne = {
//     name : 'Ali'
// }
// let objTwo = {
//     age : 22
// }
// let objThree = {
//     designation : 'developer'
// }

// let obj = {...objOne,...objTwo,...objThree};
// console.log('original ',obj)
// let copy = {...obj,city : 'karachi',province : 'punjab'};
// console.log('copy ',copy)
/*==================================== Question No 26 =========================================
hof 
higher order function does not do any task , 
all task is done by the another function that we pass as an argument 
the function that takes a funciton as argument or return a new funciton or doinng
both tasks is called higher order funciton

======================================= Answer =====================================*/
// function add(a,b){
//     return a+b
// }
// function multiply(a,b){
//     return a*b
// }

// function main(m,n,task){
//     return task(m,n)
// }
// // let ans = main(2,3,add)
// // console.log(ans)
// let ans = main(10,20,multiply)
// console.log(ans)
/*==================================== Question No 27 =========================================
recursion funciton 
the function that calls itself again and again inside itself until 
a base condition fulfilled
======================================= Answer =====================================*/

// function abc(){
//     let input = prompt('enter name')
//     if(input == ''){
//         abc(input)
//     }
//     console.log(input)
// }
// abc()

// function a(n){
// if(n == 0){
//     console.log('done')
//     return
// }
// console.log(n)
// a(n - 1)
// }
// a(5)
/*==================================== Question No 28 =========================================
new Map()
we can store values in object by using new Map, 
map.set()
map.get()
map.has()
map.delete()
map.clear()
map.keys()
map.values()
map.entries()
map.size

======================================= Answer =====================================*/
// let map = new Map();
// map.set('name','Aziz')
// map.set('age',23);
// map.set('boolean','ok')
// map.set('false','it is boolean')
// map.set('()=>{}','arrow funciton') 
// console.log(map.has('ages'))
// map.delete('name')
// // map.clear()
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())
// console.log(map.size)
// console.log(map)
// for(let[key,values] of map){
//     console.log(key , values)
// }

/*==================================== Question No 29 =========================================
firtst pillar of oop is object

======================================= Answer =====================================*/
// let obj = {
//     name : 'ali',
//     age : 22,
//     greet : function(){
//         return `hello ${this.name} , your age is ${this.age}`
//     }
// }
// let an = obj;
// console.log(an.greet())
/*==================================== Question No 30 =========================================
class in oop

======================================= Answer =====================================*/
// class User {
    
//     constructor(name,designation){
//         this.name = name;
//         this.designation = designation

//     }

//     info(){
//         console.log(`My name is ${this.name} and my designation is ${this.designation}`)
//     }
// }
// let ans = new User('ali','developer')
// ans.info()
/*==================================== Question No 31 =========================================
inheritence in oop

======================================= Answer =====================================*/
// class User {
    
//     constructor(name,designation){
//         this.name = name;
//         this.designation = designation

//     }

//     info(){
//         console.log(`My name is ${this.name} and my designation is ${this.designation}`)
//     }
// }
//  new User('ali','developer')

//  class NewUser extends User {
//     constructor(name,designation,city,province){
//         super(name,designation)
//         this.city = city;
//         this.province = province
//     }
//     method(){
//         console.log(`My name is ${this.name} , my designation is ${this.designation} 
//             and my city is ${this.city} and my province is ${this.province}`)
//     }
//  }
// let b = new NewUser('Ikram','developer','karachi','punjabb')
// b.method()
// class User {
//     constructor(name){
//         this.name = name
//     }
// }

// class UserTwo extends User {
//     constructor(name,age){
//         super(name);
//         this.age =age
//     }
//     info(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
//     }
// }
// let ans = new UserTwo('ali',400)
// ans.info()
/*==================================== Question No 32 =========================================
polymorphism 
different classes same funciton but different behaviour on calling it

======================================= Answer =====================================*/
// class Animals {
//     speak(){
//         console.log('animals are grazing')
//     }
// }
// class Cat extends Animals {
//     speak(){console.log('cats are drinking milk')}
// }
// class Dogs extends Animals {
//     speak(){
//         console.log('dogs are barking')
//     }
// }
// let a = new Animals()
// let b = new Cat()
// let c = new Dogs()
// a.speak()
// b.speak()
// c.speak()

/*==================================== Question No 33 =========================================
encapsulation 
hiding private data and accessing it only by specific methods is called 
encapsulation

======================================= Answer =====================================*/
 class BankAccount {
    #balance =100;

    deposit(amount){
        return this.#balance = this.#balance + amount
    }

    withDraw(amount){
        if(this.#balance >= amount){
         return   this.#balance = this.#balance -amount
        }
        else {
            alert('insufficient balanace')
        }
    }
    getBalance(){
        return this.#balance
    }
}
let ans = new BankAccount()
ans.deposit(200)
ans.withDraw(300)
console.log(ans.getBalance())

/*==================================== Question No 34 =========================================


======================================= Answer =====================================*/
// class Car {
//     startCar(){
//         this.#startEngine();
//         console.log('car started')
//     }
//     #startEngine(){
//         console.log('engine is starting')
//     }
// }
// let newCar = new Car();
// console.log(newCar.startCar())


// myCar.#startEngine(); // Not allowed

// class Car {
//   start() {
//     this.#engineStart();   // hidden internal method
//     console.log("Car started");
//   }

//   #engineStart() {
//     console.log("Engine is starting...");
//   }
// }

// let myCar = new Car();
// myCar.start();

/*==================================== Question No 35 =========================================
object is a data type and we can store in it related information to a person 
or any required 
delete 
update 
length 
check existence 


======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     age : 20,
//     city: 'karachi'
// }
// // obj.name = 'ali'
// obj['city'] = 'isb'
// obj.designation = 'developer'
// delete obj.age
// console.log(obj.hasOwnProperty('names'))
// console.log(obj,typeof obj)
// console.log(Object.keys(obj).length)

/*==================================== Question No 36 =========================================
reduce give us after collecting all the elements of array

======================================= Answer =====================================*/
// let num = [1,2,3,4]
// let ans = num.reduce((prev,next)=>{
//     return prev + next
// })
// console.log(ans)
/*==================================== Question No 37 =========================================
fileter gives us all values that satisfy our condition if any value 
is not existed according to our condition it gives us empyt array

======================================= Answer =====================================*/
// let num = [1,21,3,41,5,61];
// let ans = num.filter((k)=>{
//     return k % 2 == 0
// })
// console.log(ans)

/*==================================== Question No 38 =========================================
find give us first element that matches our condition 
if not existed gives undefined

======================================= Answer =====================================*/
// let num = [1,21,3,41,5]
// let ans = num.find((k)=>  k %2 == 0)
// console.log(ans)

/*==================================== Question No 39 =========================================
some only check that if any element in array satisfy our condition 
if satisfy gives true else false

======================================= Answer =====================================*/
// let num = [1,21,3,4,5]
// let ans = num.some((item)=> item % 2 == 0)
// console.log(ans)

/*==================================== Question No 40 =========================================
for each can modify original array 
it is used to show data on dom or console

======================================= Answer =====================================*/
// let num = [100,200,300]
// console.log(num)
// let n = []
// num.forEach((item)=> n.push(item + 10))
// console.log(num)
// console.log(n)

// let fruits = ['mango','apples','banana']
// let display = document.getElementById('ul')
// fruits.forEach((item)=>{
//     display.innerHTML = display.innerHTML + `<li>${item}</li>`
// })
/*==================================== Question No 41 =========================================
every checks that our condition is satisfied by all the elements of an array

======================================= Answer =====================================*/
// let num = [12,2,4,6,8]
// let ans = num.every((item)=> item % 2 == 0)
// console.log(ans)
/*==================================== Question No 42 =========================================
findIndex give us index number of any object thats id we given 

======================================= Answer =====================================*/
// let obj = [
//     {
//         id:1,
//         name :'Ali'
//     },
//     {
//         id:2,
//         name :'Owais'
//     },
//     {
//         id:3,
//         name :'Ijaz'
//     },
//     {
//         id:4,
//         name :'Kamran'
//     },
// ]
// console.log(obj)
// let required = obj.findIndex((need)=> need.id == 2);
// console.log(required)
// let requiredObj = obj.find((item)=> item.id == required)
//     requiredObj.name = 'lucky man'
// console.log(requiredObj)
// let ans = obj.splice(required,1,requiredObj)
// console.log(ans)
// console.log(obj)

/*==================================== Question No 43 =========================================
object.groupBy()

======================================= Answer =====================================*/
// let num = [1,2,3,4,5,6]
// let ans = Object.groupBy(num,(seperate)=>{
//     return seperate % 2 == 0
// })
// console.log(ans)

// let products = [
//     {name :'mobile', price : 20000},
//     {name :'laptop', price : 10000},
//     {name :'mobile', price : 14000},
//     {name :'laptop', price : 8000},
//     {name :'mobile', price : 20000},
// ]
// // let ans = Object.groupBy(products,(item)=> item.name == 'mobile')
// // console.log(ans)
// let ans = {
//     mobileData : [],
//     laptopData :[]
// }
// for(let i = 0;i < products.length;i++){
//     if(products[i].name == 'mobile'){
//         ans.mobileData.push(products[i])
//     }
//     else{
//         ans.laptopData.push(products[i])
//     }
// }
// console.log(ans)
/*==================================== Question No 44 =========================================
Object.keys, object.values, and object.entries

======================================= Answer =====================================*/
// let obj = {
//     name : 'aziz',
//     age :32,
//     designation : 'developer'
// }
// let k = Object.keys(obj)
// console.log(k)
// let val = Object.values(obj)
// console.log(val)
// let ent = Object.entries(obj)
// console.log(ent)
/*==================================== Question No 45 =========================================
object.freeze 
we can not delete, add or update any key of object when we 
apply Object.freeze

======================================= Answer =====================================*/
// let obj = {
//     name : 'aziz',
//     age :32,
//     designation : 'developer'
// }
// obj = Object.freeze(obj)
// delete obj.name;
// obj.age = 4
// console.log(obj)

/*==================================== Question No 46 =========================================
Object.seal()
we can only update any key by using object.seal 


======================================= Answer =====================================*/
// let obj = {
//     name : 'aziz',
//     age :32,
//     designation : 'developer'
// }
// console.log(obj)
// obj = Object.seal(obj)
// delete obj.name;
// obj.city = 'kci'
// obj.designation = 'soldier'
// console.log(obj)

/*==================================== Question No 47 =========================================
Object.is() 
is alternative of strict equlity operator ===

======================================= Answer =====================================*/
// let a = 2;
// let b = 2
// let ans = Object.is(a,b)
// console.log(ans)

/*==================================== Question No 48 =========================================
currying function

======================================= Answer =====================================*/
// function curr(a){
    
//     return function(b){
//         return function(c){
//             return a + b +c 
//         }
//     }

// }
// let ans = curr(5)(10)(20)
// console.log(ans)
/*==================================== Question No 49 =========================================
eventBubbling 
from bottom to top
eventCapturing 
from top to bottom
event.stopPropagation

======================================= Answer =====================================*/
// function parentClick(){
//     alert('i am parent function')
// }
// function childClick(event){
//     alert('i am child funciton')
//     event.stopPropagation()
// }
/*==================================== Question No 50 =========================================
call()

======================================= Answer =====================================*/
// function abc(designation,city){
//     console.log(`My name is ${this.name}, my age is ${this.age} , 
//         my designation is ${designation} and my city is ${city}`)

// }
// let data = {
//     name :'Ali',
//     age : 30
// }

// abc.call(data,'develoerp','karachi')
/*==================================== Question No 51 =========================================
apply()

======================================= Answer =====================================*/
// let obj = {
//     name :'Ali',
//     age : 44
// }
// function abc(city,designation){
//     console.log(`My name is ${this.name}, my age is ${this.age} 
//        my city is ${city} and i am ${designation} `)

// }
// abc.apply(obj,['karachi','soldier'])
/*==================================== Question No 52 =========================================


======================================= Answer =====================================*/
// let obj = {
//     name :'Ali',
//     age: 44
// }
// function abc(city){
//     console.log(`My name is ${this.name} my age is ${this.age} and 
//         my city is ${city}`)
// }
// let ans = abc.bind(obj,'kci')
// ans()


/*==================================== Question No 53 =========================================
new set is an object method that stores only unique values , if you store 
same value again it does not allow us to store same value again it stores 
always unique values in array or object

======================================= Answer =====================================*/
// let basket =  new Set();
// basket.add('apple');
// basket.add('banana');
// basket.add('grapes');
// basket.add('apple')
// console.log(basket.has('apples'))
// console.log(basket.size)
// // basket.delete('apple')
// basket.clear()
// console.log(basket)

// let arr = [1,2,3,2,2,3,4,4,5]
// console.log(arr)
// let nArr = [... new Set(arr)]
// console.log(nArr)

// let products = [
//   { name: "Shirt", category: "Clothes" },
//   { name: "Pants", category: "Clothes" },
//   { name: "Phone", category: "Electronics" }
// ];
// console.log(products);
// let real = [...new Set(products.map((item)=>{
//     return item.category
// }))]
// console.log(real)

// let set =  new Set();
// set.add('apple');
// set.add('bnana')
// set.add('grapes');
// console.log(set)
// let display = document.getElementById('ul')
// set.forEach((item)=>{
//     console.log(item)
//     display.innerHTML += `<li>${item}</li>`
// })

// for(let i = 0;i < set.length;i++){
//     console.log(set[i])
// }

// for(let k  of set){
//     console.log(k)
// }

// let n = [...set]
// console.log(n)
/*==================================== Question No 54 =========================================
sort()

======================================= Answer =====================================*/
// let num = [1,1212,3,312,2,3,4,5,44];
// let ans = num.sort((a,b)=> b -a);

// console.log(ans)

