// 1. Write a function `sum` that computes the sum of the numbers in an array.


// let mylist = [1,3,6];

// function sum_number(lists) { 
//     let sum = 0;
//     for(let i= 0 ; i < lists.length ; i++){
//         sum += lists[i]
//     }
//     return sum
//  }

// console.log(sum_number(mylist))





// 2. Write a function `max` that accepts an array of numbers and returns the
//   *largest* number in the array.

// let mylist = [1,3,6,7,5,9];

// function largest(lists){
//     let sum = 0;
//     for(let i=0 ; i < lists.length ;i++){
//         if(lists[i] >= sum){
//             sum = lists[i];
//         }
//     }return sum
// }


// console.log(largest(mylist))





// 3. Try the following at a console:

//   ```js
//   "the quick brown fox jumped over the lazy dog".split(" ");
//   "Hello, world!".split("")
//   "1,2,3,4,5,6".split(",")
//   ```

//   What is returned by `split` (You can read more about it
//   [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)),
//   and how does it work?

//   Use `split` to write a function `longestWord` that takes a string as an
//   argument and returns the longest word.

// let a = "Hello world !";
// console.log(a.split(""))
// console.log("...............................")
// console.log(a.split(","))
// console.log("...............................")
// console.log(a.split(" "))



// ................................................................................................................



// // creat object for : factury fcuntion(return and :) and cunstractor functions(this and =  and new ) :
// function cearataddress(street , home , city , car){
//     return{
//         street : street,
//         home : home,
//         city : city,
//         savari : car,
//     }
// };

// let address = cearataddress("navab" , "amirihome" , "qom" , "peraid");
// // console.log(address)
// // console.log(typeof(address))



// function  CreateAddress(home , street , city ){
//     this.street = street,
//     this.home = home,
//     this.city = city
// }


// let new_address = new CreateAddress("amiri home" , "navab" , "qom")
// console.log(new_address);


// let post = {
//     home : "amiri house" ,
//     city : "qom" ,
//     street : "nvab",
//     coment: [{another : "a" , auther : "b"} , {author:"c" , body: "d"}],
//     islive : true,

// };

// console.log(post)



// function Post(title , body ,auther , comments){
//     this.title = title;
//     this.body = body;
//     this.auther = auther;
//     this.views = 0;
//     this.comments = [];
//     this.islive = false;
// }

// let post = new Post("a" , "b" ,"c" ,"hassan" , "ali");
// console.log(post);


// array method in js : 

// const number = [3,4];
// number.push(5,6)   // add end  list  ==> [3,4,5,6]
// number.unshift(1,2) // add first list ==>[1,2,3,4,5,6]
// number.splice(3,0,"a" , "b") // یعنی از ایندکس 3 به بعد بایا a , b  رو اضافه کن 
// این یعنی بیا از ایندکس شماره 3 شروع کن و هیچی رو حذف نکن و جرف های آ و ب رو اضافه کن  به ارایه 
// console.log(number)
// console.log(number.indexOf(4)) 
// console.log(number.lastIndexOf(4))

// console.log(number.indexOf("a") !== -1)

// const couresr =[
//     {id : 1 , name : "a"},
//     {id : 2 , name : "b"}
// ];
// findIndex :  شماره ی ایندکس اون رفرنس تایپ داخل ارایه رو برمیگردونه  0  
// find() : میاد و اون عضو رو برمگردونه  //{id : 1 , name : "a"}
// const cours = couresr.find(function (cours) { 
//     return cours.name === "a"
//  })

// console.log(cours)

// Arrow function : 
// const cors = couresr.find(cors => cors.name === "b");
// console.log(cors)

// let sum = (a , b) => a + b ;

// console.log(sum(5,6))

// let sum = function(a, b){
//     return a+b
// };
// console.log(sum(5,6))


// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ? () => alert('Hello') : () => alert("Greetings!");

// welcome(); 



////  اضافه کردن به یه استرینگ 

// let n = 1.2356;

// console.log(n.toFixed(1))  // 1.2

// let num = Number("123")
// console.log(num)
// console.log(typeof(num)) // number

// let str = "Hello";

// let name = ` ${str} hassan`
// let family = str + " " +"kakavand"
// console.log(family)
// console.log(name)


// let billion = 1e9;
// let billion_2 = 7.3e9;


// // متد ها نامبر :

// Math.floor()
// Math.ceil()
// Math.round()
// Math.trunc()


// 