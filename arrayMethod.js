// filter
// map
// push
// pop
// splice
// sift
// reverse
// slice
// includes
// join
// forEach
// sort 
// every
// some
// unshift
// isArray
// reduce
// indexOf
// Array.from  
// find 
// findIndex
// flat

//////////////////////////////////////////////////////////////////////


// call back function 
// arrow function 



////////////////////////////////////////////////////////////////
// 1 : filter :

// const numbers = [1,2,3,4,5,6];

// 1 solotion: 

// const even = numbers.filter((value) => {
//     return value % 2 === 0 ;
// })

// console.log(even)

// 2 solution  زمانی که یه خط کد داری میتونی که 
// {}  و return
// رو برداری و کد رو توی یه خط بنویسی

// const even_arrow = numbers.filter(value => value % 2 === 0 );
// console.log(even_arrow)


// فیلتر در ابجکت ها : 


// let items = [
//     {name : "bike" , price : 100},
//     {name : "tv" , price : 200},
//     {name : "album" , price : 10},
//     {name : "book" , price : 5},
//     {name : "phone" , price : 500},
//     {name : "computer" , price : 1000},
//     {name : "keybord" , price : 25},
// ]
 
// filler ====> true / false 
// map    ====> new items

// items = items.filter((item) => item.price >= 100)
// console.log(items)


// console.log(items.map((a , b)=> a.price));

// console.log(items.filter(item => item.price >= 50))

// const nameSelector = items.filter((item) => {
//     // const obj = item.price;
//     // console.log(obj)
//     // console.log(item.name)
// })

// const people = [
//     {name : "hassan" , age : 22},
//     {name : "zahra" , age : 20},
//     {name : "ali" , age : 15},
//     {name : "hadi" , age : 17},

// ]; 

// const adult = people.filter(prson => prson.age >= 18)
// console.log(adult)




// مثال : حذف کردن عدد های تکراری

// const num = [1,2,3,2,1,3,3,5,4,6,98,100,101,101,78,60];

// const un_repit = num.filter((value , index , arr) =>{
//     return arr.indexOf(value) == index;
// })
// console.log(un_repit) // [ 1, 2, 3, 5, 4, 6 ]




// whit Array.from()  and new Set()

// const no_repit = Array.from(new Set(num))

// console.log(no_repit)  // [ 1, 2, 3, 5, 4, 6 ]





//  Array.from()    میاد و استرینگ رو تبدیل میکنه به ارایه و هم چنین اجزا رو از هم جدا میکنه 
 
// let str = "hassan";

// const removeRep = Array.from(str)

// console.log(removeRep) // [ 'h', 'a', 's', 's', 'a', 'n' ]
// console.log(typeof removeRep)     //object  ارایه در نهایت یه ابجکته 

////////////////////////////////////////////////////////////////


// 2 : map : 
// خروجی ش یه ارایه هست 
// به ارایه ی اولی دست نمی زنه 

// const numbers = [1,2,3,4,5,];

// const numbersdoible = numbers.map(double)

// function double(value ,index , arr){
//     return value  * 2 ;
// }

// console.log(numbersdoible)




// const totalProductValue = products.map(item => item.price * item.count);
// console.log(totalProductValue)

//  حالا باهاش یه ابجکت جدید بسازیم 

// const new_total_price = products.map(itmes => (
//     {
//     name : itmes.name ,
//     totalvalue : itmes.price * itmes.count,
//     }

// ));

// console.log(new_total_price)


// string  : تبدیل یه لیست از رشته های عددی به عدد های واقعی 
// const num_str = ["1" , "2" , "3" , "4"];

// const number = num_str.map(item => Number(item)) // [ 1, 2, 3, 4 ]
// const number = num_str.map(Number) // [ 1, 2, 3, 4 ]

// console.log(number)


/////////////////////////////////////////////////////////////////

// 3 : push : 
// هم یه ایتم هم بشتر از یه ایتم رو میتونه بگیره 
// و به ارایه همون اضافه کنه 
// همیشه هم از اخر اضافه میکنه 

// const numbers = [1,2,3];
// numbers.push(4 , 5 , 6)
// console.log(numbers) // [ 1, 2, 3, 4, 5, 6 ]


///////////////////////////////////////////////////////////////////////////


// 4 : pop :

// همیشه یه ایتم از اخر حذف میکنه 

// const num = [1,2,3];

// num.pop();
// console.log(num)

// مورد حذف شده رو ریختیم توی یه متغیر 
 
// let lastelement = num.pop()
// console.log(lastelement)

///////////////////////////////////////////////////////////////

// 5 : splice()
// splice (اضافه کردن هر اتمی که میخوای , حذف کردن اون تعداد ایتم , از کدوم ایندکس شروع کنه )
// زیاد متد جالبی برای استفاده نیست 
// change 
// remove
// replace






/////////////////////////////////////////////////////////////

// const num = [1,2,3,4,5,6,7,8,9];

// از ایندکس شماره 2 شروع کن و سه تا ایتم بعدی رو حذف کن بره 

// num.splice(2,3);
// console.log(num) // [ 1, 2, 6, 7, 8, 9 ]


// این یعنی از ایتم 0 شروع کن و 0 ایتم رو حذف کن و 10  11 رو هم به اخرش اضافه کن
// num.splice(0 , 0 , 10 , 11);
// console.log(num.sort((a,b) => a-b))



//////////////////////////////////////////////////////

// 6 : shift()

// از ابتدای ارایه ایتم هارو حذف میکنه
//  بر خلاف متد پاپ که از اخر حذف میکنه 


// const num = [1,2,3,4];

// num.shift() //  // [ 2, 3, 4 ]
// num.shift() // [ 3, 4 ]
// console.log(num)

///////////////////////////////////////////////////////

// 7 : reverse()

// const num = [1,2,3,4,5];

// num.reverse()
// console.log(num)

// const newArr = [...num].reverse()
// console.log(num)
// console.log(newArr)


/// استرینگ ها متد ریورس ندارند 

// این هم روش معکوس کردن استرینگ ها 
// const str = "conding is fun";

// const res = str.split("").reverse().join("");
// console.log(res)  // nuf si gnidnoc


// split()   استرینگ رو به ارایه تبدیل میکنه 
// reverse()  معکوس میکنه 
// join()   ارایه رو به استرینگ تبدیل میکنه 



// هر کارکتر رو به یه المنت از ارایه تبدیل میکنه
 
// console.log(str.split("")) // ['c', 'o', 'n', 'd','i', 'n', 'g', ' ','i', 's', ' ', 'f','u', 'n']

// این ارایه از کاراکتر هارو معکوس میکنه 
// console.log(str.split("").reverse()) // ['n', 'u', 'f', ' ','s', 'i', ' ', 'g','n', 'i', 'd', 'n','o', 'c']


// متد جوین هم کارش اینه که یه ارایه از کارکتر هارو دوباره به استرینگ منسجم تبدیل کنه 
// console.log(str.split("").reverse().join(""))  // nuf si gnidnoc





/////////////////////////////////////////////////////////////////

// 8 : slice :

// const num = [1,2,3,4,5];


// slice(start[index] , end[index])

// const numbers2 = num.slice(0 , num.length)
// console.log(numbers2)  // [ 1, 2, 3, 4, 5 ]
// console.log(num.slice(-3)) // [ 3, 4, 5 ] از اخر تا سه اومده 

// const string_List = ["hassan" ,"ali" , "mohammad" , "hadi" , "zahra" ,"javad" ]

// const user = string_List.slice(0 , 3)
// console.log(user) // [ 'hassan', 'ali', 'mohammad' ]

//////////////////////////////////////////////////////


// 9 : includes :  return => true and false;


// const names = ["hassan" ,"ali" , "mohammad"]

// console.log(names.includes("hassan"))  // true



/////////////////////////////////////////////////////////////


// 10 : forEach( callback())
/// اینجا میتونه هم کالبک بگیره 
// ولی بهتره که ارو فانکشن بگیره

// const num = [1,2,3,4];



// callback function :

// const fliter = num.forEach(consoleItem)
// console.log(fliter)

// function consoleItem(item , index , arr){
//     console.log(item)
// }





// Arrow function :

// num.forEach((item , index , arr) => {
//     console.log("a [" + index +"] = " + item)
// })




// let sum = 0;
// num.forEach((item , index , arr) => {
//     sum += item
// })

// console.log(sum) // 10 

// عجب مثال کاری یه این حتما یادداشتش کن 
// تعداد تکرار های هر حرف رو میگه 

// const letters = ["a" , "b" , "c" , "d" , "d" ,"a" , "a" , "c"];   

// var count = {};

// letters.forEach((item) =>{
//    // solotion 1 

//     // if(count[item]){
//     //     count[item]++;
//     // }else{
//     //     count[item] = 1;
//     // }


// });

// console.log(count)

// به روش عبارات شرطی تعداد تکرار های داخل یه ابجکت رو شماردم 

// letters.forEach((item) => {
//     (count[item]) ? count[item]++ : count[item] =1;
// })

// console.log(count)


// example ; 

// const items = [
//     {name : "bike" , price : 100},
//     {name : "tv" , price : 200},
//     {name : "album" , price : 10},
//     {name : "book" , price : 5},
//     {name : "phone" , price : 500},
//     {name : "computer" , price : 1000},
//     {name : "keybord" , price : 25},
// ]

// const ite = items.forEach((item) => {
//     console.log(item.name)  // bike tv album book phone computer keybord
    
// })
// console.log(ite)






///////////////////////////////////////////////////////////////

// 11 : sort() :

// example 1 : 
const number = [2,5,100,101,1000,8,4,1,3,78,10,25,45];


// console.log(number.sort((a ,b) => a - b)) // [1,   2,    3,  4,  5,8,  10,   25, 45, 78,0, 101, 1000]

// console.log(number.sort((a,b) => {
//     // console.log(a , b)
//     return a - b

// }))





/// این متد رو هیج وقت برای سورت کردن از یاد نبر : 
// names.sort((a,b) => a - b)   به سبک ارو فانکشن 

// const names = ["html" ,"css" , "python" , "javascript" , "jquery"];

// console.log(names.sort())

// const number = [2,5,8,4,1,3,78,10,25,45];

// این شکلی بنویسی درست سورت نمیکنه 
// console.log(number.sort())   // [1, 10, 2, 25, 3,4, 45, 5, 78, 8] 

// باید از ارو فانکش استفاده کنی 
// console.log(number.sort((a ,b) => a - b) ) // [1,  2,  3,  4,  5 ,8, 10, 25, 45, 78]


// توی سورت کردن مهم اینه که بدونی داخل ارایه ی تو چه نوع تایپی 
// وجود داره

// سورت کردن در ابجکت ها :

// این ابجکت هارو بر اساس پارامتر هاشون باید سورت کرد 
// یعنی میخوام بر اساس سن  سورت کنم یا بر اساس اسم که در واقغ حروف  الفبا میشه 

// const objects = [
//     {name : "hassan" , age : 22},
//     {name : "ali" , age : 12 },
//     {name : "zahra" , age : 20 },
//     {name : "mona" , age : 17}
// ];

// const user = objects.sort((a ,b) => {
//     return a.age - b.age ; // سورت صعودی
//     // return b.age - a.age ; // سورت نزولی 
// })

// console.log(user)



//////////////////////////////////////////////////////////

// 12 : every()

// const num = [1,2,3,4,5];
// const num2 = [-1 ,1,2,3,4,5];


// const res = num.every(isPositive)
// const res2 = num2.every(isPositive)

// function isPositive(item){
//     return item > 0;
// }

// console.log(res)  // true 
// console.log(res2) // false 

// یعنی اگر یه مورد مخالف پیدا کنه سریع فالس برمی گردونه 

// const persons = [
//     {name : "hassan" },
//     {name : "zahra"},
//     {name : "ali"},
//     {name : "javad"}
// ]

// const result = persons.every(person => person.name !== undefined);
// console.log(result) // true;   // یعین هیج مورد اندفی وجود نداره 


// const list = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     {name : "hassan"}
// ]

// // چون توش یه مورد غیر  ارایه پیدا کرده در نتیجه فالس برمیگردونه 


// const res = list.every(arr => Array.isArray(arr));
// console.log(res)  // false


/////////////////////////////////////////////////////////


// 13 : some()

// این بر خلاف قبلی یه مورد موافق پیدا کنه ترو برمیگردونه 

// const numbers = [1,2,3,4,5,6];

// const res = numbers.some(item => item > 4)
// console.log(res)  //  true

// حتما یادداشت برداری بشه 

// const obj = [
//     {name : "hassan" ,age : 22},
//     {name : "ali " , age : 21} ,
//     {name : "zahra" , age : 18}
// ]

// const result = obj.some(item => item.age > 21);
// console.log(result)   // true ==> 22



/////////////////////////////////////////////////////

// 14 : unshift()

// متد 
// push()
// همیشه یکی از اخر اضافه میکنه 
// متد 
// unshift()
// یه دونه از اول اضافه میکنه همیشه 


// const num = [1,2,3,4];

// num.unshift(...item : number[])

// num.unshift(-1)
// console.log(num)


// num.unshift(...[0,2,3,5,7,8])
// console.log(num)  // [0, 2, 3, 5, 7,8, 1, 2, 3, 4]

// این یعنی به صورت ایتم های چن تاییی هم میتونی اضافه کنی 


/////////////////////////////////////////////////////////////


// 15 : reduce() // خوب یادنگرفتم 
// الان میخوام که جمع تمام اعداد داخل این ارایه رو حساب کنم 

// const myArray = [1,2,3,4,5];

// const somNumber = myArray.reduce((a,b) => {
//     return a +b
// })
// console.log(somNumber)

// a 
// اینجا همون مقدار اولیه س یعنی مقدار یک
// میتونه هم بهش مقدار اولیه بدی 

// const somNumber = myArray.reduce((a,b)=>  a + b , 0)
// console.log(somNumber)



//اولش هم میتونی //callback // arrow function 
// بزنی 


// متغیر ای مقدار رو نگه میداره 
// و متغیر بی هر دفعه میشه یکی از ایتم های داخل لیست ما 
// در نهایت همش با ای جمع میشه و نتیجه ی نهایی داده میشه 


// const number = [1,2,3,4,5];

// const sum = number.reduce((accumulator , currentvalue ) => {
//     return accumulator + currentvalue;
// },0);
// console.log(sum)





// نوشتن با کال بک فانکشن : 
// کابک فانکشن . فانکشنی یه که به عنوان خروجی به فانکشن برمی کردونه 
// در نتیجه ورودی ش هم یه فانکشن 

// const number = [1,2,3,4,5];

// const totals = number.reduce(sum);

// function sum(a , b) { 
//     return a + b;
// }

// console.log(totals)







// پیدا کردن بزرگترین ایتم یه ارایه 

// const array = [1,2,3,4];

// const result = array.reduce((a , b) => (a >b ) ? a :  b); 
// console.log(result)

// const maxNum = array.reduce((a , b) => a > b ? a : b)




// مثال برای ابجکت ها :
// خیلی مهمه این 

// const store = [
//     {dvise : "laptop" , value :1000 , count : 3 },
//     {dvise : "mobile" , value :2000 , count : 6 },
//     {dvise : "desktop" , value :1750 , count : 10 }
// ];

// // الان داره قیمت کل رو در میاره 
// const total = store.reduce((a , b) => a + b.value * b.count , 0);
// console.log(total)



// الان توی این ابجگت بیا و  گرون ترین محصول رو پیدا کن ؟ 
// const maxProduct = store.reduce((a,b) => a.count > b.count ? a : b)
// console.log(maxProduct)  // { dvise: 'desktop', value: 1750, count: 10 }  کل محصول رو برمی گردونه 



//////////////////////////////////////////////////////////////////

// 16  join()  :     ===> خروجی یه استرینگ هست 

// مهم ترین ویژگی ش اینه که ارایه رو تبدیل به استرینگ میکن 

// این سه تا حالتش هم مهه : 

// join("")
// join(" ")     ================>> string is a output !!!!!!
// join(",")   


// const container = ["hassan" , "ali" , "zahra"];

// const result = container.join("") // hassanalizahra

// const result = container.join(" ")  // hassan ali zahra


// const result = container.join(", ")  // hassan, ali, zahra

// console.log(result)


// console.log("I am visit " + container.join(" ,"))  // I am visit hassan ,ali ,zahra


////////////////////////////////////////////////////////////////////



// 17 :  isArray()    ==> true / false

// برسی میکنه ببینه اون ولیویی که بهش دادیم ایا ارایه هست یا نه 


// حتما هم باید این شکلی بنویسی  : Array.isArray(prametr)


// const names = ["haassa", "ali"];

// const str = "hello world";

// const number = 12;

// console.log(Array.isArray(names)) // true

// console.log(Array.isArray(str))  // false

// console.log(Array.isArray(number))  // false


////////////////////////////////////////////////////////////

// 18 :  indexOf()  and    lastIndexOf() ; 


// const names = ["hassan" , "ali" , "zahra" , "hassan"];


// console.log(names.lastIndexOf("zahra"))
// این طوری شماره ایندکس رو برمیگردونه 

// console.log(names.indexOf("ali")) // 1

// ترفند عوض کردن یه ایندکس با یه چیز جدید

// const index = names.indexOf("zahra");

// names[index] = "javad"

// console.log(names) // [ 'hassan', 'ali', 'javad' ]


// اگر من توی ارایه ی خودم چند تا مثلا حسن داشته باشم این متد 
// indexOf()
// فقط ایندکس اولین حسنی رو که پیدا کنه رو برمی گردونه 

// در نتیجه پارامتر دومی ک این متد میگیره میگه که از ایندکس 
// چندم شروع کن به گشتن 

// console.log(names.indexOf("hassan" , 1)) // 3 
// شماره ایندکس حسن جنده و بیا از ایندکس شماره ی 3 شروع کن به گشتن 

//////////////////////////////////////////////



// 19 : Array.from()  

// const str = "hassan amiri";

//   سوال : بیا برسی کن ببین توی این رشته از هر عدد چن تا دونه هست ؟ 

// const num = "11111122223345666789";
// const count = {}

// const array = Array.from(num )   // ===> اول باید تبدیلش کنیم به یه ارایه 
// array.forEach((value, index, arr) => {
//     return count[value] ? count[value]++ : count[value] =1
// })
// console.log(count)


  
// const number = 12 ;

// console.log(Array.from(str))  // ['h', 'a', 's', 's','a', 'n', ' ', 'a','m', 'i', 'r', 'i']
// console.log(Array.from(num))  // ['1', '2', '3','4', '5', '6','7', '8', '9']


// console.log(str.split(""))  // ['h', 'a', 's', 's','a', 'n', ' ', 'a','m', 'i', 'r', 'i']

// console.log(typeof(number.toString()))  //  string
// console.log(number.toString()) // "12"

// برای پارامتر دوم یه فانکشن میگیره 
// حالا میتونه ارو فانکشن باشه یا نه 

//  این خیلی مهمه ها 

// تبدیل کردن به یه ارایه :  خیلی مهمه این 

// const res = Array.from(num ,  x => Number(x))
// // این همون بالایی هست 
// // const res = Array.from(num , Number)
// console.log(res) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9]




// نحوه ی تبدیل کردن یه استرینگ به ارایه بدون استفاده از متد 
// Array.from()

// const is_array = num.split("")
// const array = is_array.map(item => Number(item));
// console.log(array)   // [1, 2, 3, 4, 5,6, 7, 8, 9]



// تمرین حذف کردن اعداد تکراری :

// const dublenumbers = [1,2,3,3,2,1,4,4,3,2,1,5];

// let new_set = new Set(dublenumbers)  //  { 1, 2, 3, 4, 5 }  // خروجی یه ابجکت خواهد بود 
// console.log(new_set)


// let new_set2 = Array.from(new Set(dublenumbers)) // [ 1, 2, 3, 4, 5 ] // حالا یه ارایه برگردوند 
// console.log(new_set2) 


// نحوه ی حذف کردن ایتم های استرینگی یه , یه ارایه : 
// const string = ["hassan " , "hassan" , "ali" , "ali" , "zahra"];

// const res = Array.from(new Set(string)) // [ 'hassan ', 'hassan', 'ali', 'zahra' ]
// console.log(res)


// استفاده از ارو فانکش : برای پامتر دوم : 
// const str = "123456789";

// const rest = Array.from(str ,(x) =>
//  {return Number(x)

// })
// console.log(rest)


// یادت باشه که این رو قشنگ یاد بگیری ، یهو میبینی همین بدجوری به کار میاد



////////////////////////////////////////////////////////////////////////////////////////////////////////

// 20 : findeIndex()   // اینو قشنگ نفهمیدم 


 // این برخلاف indexOf("hassan") => شماره ایندکس رو پیدا میکنه 

// میاد ارو فانکشن میگیره 


// const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

// const index = fruits.findIndex(fruit => fruit === "banana")

// console.log(index) // 1 
// console.log(fruits[index]) // banana

///////////////////////////////////////////////////////////////

// 21 : find()     بالایی یه انیدکس رو پیدا میکنه اما این یکی خودش رو از ارایه پیدا میکنه 


// Array : 
// const names = ["hassan" , "ali" , "javad"];

// const rest = names.find(itme => itme === "ali");
// console.log(rest) // ali 



// object : 
// const items = [
//     {id : 1 , name : "bike" , price : 100},
//     {id : 2 , name : "tv" , price : 200},
//     {id : 3 , name : "album" , price : 10},
//     {id : 4 , name : "book" , price : 5},
//     {id : 5 , name : "phone" , price : 500},
//     {id : 6 , name : "computer" , price : 1000},
//     {id : 7 , name : "keybord" , price : 25},
// ]


// یه اطلاعاتی از ابجکت رو میدی بهش مثلا ای دی : میره میگرده 
// اگر پیدا کرد میاد خود اون ابحکتی رو که ای دی شو داشت رو برمیگدونه 

// const find_obj = items.find((item) => item.name == "book")
// console.log(find_obj)      // { name: 'book', price: 5 }


// const findeById = items.find((item)=> item.id == 4)
// console.log(findeById)  //   {id : 4 , name : "book" , price : 5},



////////////////////////////////////////////////////////

// 22 :  flat ;

// برای بیرون کشیدن ارایه های تو در تو به کار میره :
// یا اینفینیتی میدی یا به تعداد ارایه های داخلی عدد میدی

// که اصولا  infinity میدن 

// const arr = [1,[2,[3,[4]]]];


// const  result = arr.flat(2) // [ 1, 2, 3, [ 4 ] ]

// const  result2 = arr.flat(3) // [ 1, 2, 3, 4 ]



// const arr2 = [1,[2,[3,[4,[5,[6,7]]]]]];

// const result3 = arr2.flat(Infinity)  // [1, 2, 3, 4,5, 6, 7]
// console.log(result3)



///////////////////////////////////////////////////////////////

// 23 : 


///////////////////////////////////////////////////////////////
// درست کردن زیپ با فور ایچ : 

// let list_num= [19,20,11,12];

// let list_name = [ "hassan" , "alireza" , "mahdi" , "javad"];
// let user2 = {};

// const userd = list_name.forEach((item , index)  => { 
//     user2[item] = list_num[index]
// })

// console.log(user2)


///////////////////////////////////////////////////////////////


// تمرین های ارایه ها و ابجکت ها از عرفان حسین پور : 


// let user = [
//     {
//         id : 6,
//         name : "hossein",
//         lastName : "eshagian",
//         roles : ["students" , "admin"],
//         age : 18,
//         scorse : { english : 10 , math : 15 , physics : 18}
//     },
//     {
//         id : 1,
//         name : "milad",
//         lastName : "majd",
//         roles : ["students" ],
//         age : 23,
//         scorse : { english : 19 , math : 18 , physics : 20}
//     },
//     {
//         id : 4,
//         name : "zhara",
//         lastName : "kimia",
//         roles : ["students" , "admin"],
//         age : 21,
//         scorse : { english : 9 , math : 8 , physics : 10}
//     },
//     {
//         id : 3,
//         name : "mohsen",
//         lastName : "sadr",
//         roles : ["students" ],
//         age : 20,
//         scorse : { english : 15 , math : 15 , physics : 20}
//     },
//     {
//         id : 5,
//         name : "javad",
//         lastName : "bagery",
//         roles : ["students" , "admin"],
//         age : 17,
//         scorse : { english : 12 , math : 14 , physics : 17}
//     },
//     {
//         id : 2,
//         name : "ali",
//         lastName : "hamidi",
//         roles : ["students" ],
//         age : 22,
//         scorse : { english : 11 , math : 14 , physics : 19}
//     },
// ];





// add a new role in scorse : 

// const new_item = {...user[0].scorse , "zist" : 20}
// console.log(new_item)

// const addUserCourse = (key , value) =>({
//     ...user , scorse : {...user.scorse , [key] : value},
// });

// console.log(addUserCourse("zist" , 20))


// const addUserCourse = (key , value) => user[0].scorse = {...user.scorse , [key] : value}


// console.log(addUserCourse("zist" , 20))









// 1 / 1 : function to sort array from young to old . 

// solution 1 : with arrow function (anonymos functions )

// const sortWhitarrow = () => user.sort((a , b) => a.age - b.age);
// console.log(sortWhitarrow())

// sorting whit arrow function : 
// const sortArray = user.sort((a,b) => a.age - b.age);
// console.log(sortArray())




// 1 / 2 : function for detect the of user and return a list of user that have specific role (daynamic , array)
// fuction ("admin")

// با متد فیلتر

// این قسمت خیلی مهم بود که یادبگیری که چطوری فکر میکنه 

// const adminUser = [];
// const fliterRoles = user.filter((item) => item.roles.includes("admin") && adminUser.push(item) );
// // میگه اگر این ترو بود بیا این کارو بکن (پوش کن اون ایتم رو توی ارایه ی خالی )
// console.log(adminUser);

// functional : 

// const filteruserByrole = (role)=>{
//     let sepecifirol = [];
//     user.map((item) => item.roles.includes(role) && sepecifirol.push(item));
//     return sepecifirol
// }

// console.log(filteruserByrole("admin"))



// Fuanction for calculate avrage of each student and sort from top to bottom :

// const calcAvrage = user.map((item) => {
//         const Scores = Object.values(item.scorse)
//         // console.log(Scores)
        
//         const summary = Scores.reduce((sum , nexitem) => sum + nexitem) / Scores.length;
       
        
//         return{...item , avrage : summary}
//     }).sort((a , b) => a.avrage - b.avrage)
     


// console.log(calcAvrage)


// // Fucntion that return status of each student "passed" or "failed"


// const pass = calcAvrage.map((items) => {
    
//     const falidorpass = (items.summary > 13) ? "pass" : "failed"
//     return {...items , status : falidorpass}
// })

// console.log(pass)

// const addUserRole = (key , value) => {
//     return ({...user , [key] : value})
// }
// console.log(addUserRole("roles" , ["guest" , "students"]))



//////////////////////////////////////////////////////////////////////////
// soale 3 : 


// Question 3 - (lock function if user enter wrong username & password more than 3 times)


// const auth = [
//   { user: "ali", pass: "Komij" },
//   { user: "maktab", pass: "Sharif" },
// ];


// let loginValidation = (username, password) => {
//     let map = new Map(),
//     lock = false;
//     validate.time = 1;

//   function validate() {
//     if (!lock) {
//       const user = auth.find(
//         (item) => item.user === username && item.pass === password
//       );
//       if (!user) {
//         map.set("time", ++validate.time);
//       }
//       map.get("time") > 3 ? (lock = true) : null;
//       console.log("You logged in succussfully!");
//     } else
//       console.log(
//         "Too many tries, You entered more than 3 times wrong username & password"
//       );
//   }

//   return validate;
// };
// let login = loginValidation("aslasdasi", "Komij");
// login();
// login();
// login();
// login();