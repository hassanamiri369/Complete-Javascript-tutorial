// // Araay method : 
// // sum 
// let array = [1,2,3,4,5];

// let sum_num = array.reduce((sum , current) => sum + current , 0 );
// // console.log(sum_num) // 15 

// // درست کردن فاکتوریل : 

// let fcutorail = array.reduce((item , temp) => item * temp );
// // console.log(fcutorail) // 120 

// // iterables : 
// // خود ارایه ایتریبل هست یعنی میشه روش پیمایش کرد 
// // اما ابجکت ایتریبل نیست یعنی نمیشه روش پیمایش کرد 

// // حال چه طوری یه ابجکت رو  تبدیل کنیم به ایتریبل : 


// // symbol()

// // let obj = {
// //     0 : "ali",
// //     1 : "hassan",
// //     2 : "erfan",
// //     length : 3
// // };

// // let id = Symbol()
// // obj[id] = 10 ;
// // console.log()


// let obj = {
//     0 : "ali",
//     1 : "hassan",
//     2 : "erfan",
//     length : 3,

//     [Symbol.iterator](){
//         this.current = 0 ;
//         return this;
//     },

//     next(){
//         if(this.current < this.length){
//             return { done : false , value : this.current++ };
//         }else{
//             return { done : true};
//         }
//     }
// };

// for(let item of obj){
//     // console.log(item ,obj[item])

// }


// // let a = [1,2,3,3,3,6,6,5,5,4,8,9];
// // let b = a.forEach(item => new Set(item))
// // console.log(b)

let obje = {
    name : "ali ",
    lastName : "amiri",
    age : 22,
}

// let key = Object.keys(obje);
// let value = Object.values(obje)

// console.log(key)
// console.log(value)

// for(let key of Object.keys(obje))

// for(let value of Object.values(obje))

// for(let [key , value] of Object.entries(obje))


let time = new Date()
// alert(time)
// alert(time.getDay())
alert(time.getUTCFullYear())
