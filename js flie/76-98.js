// چطوری یه استرینگ ریورس کنیم و یا چطوری یه لیست از اعداد رو 
// سورت کنیم بدون متد 


// 76  join method
// define : The join() method creates and returns a new string by concatenating all of the elements in an array 
// separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.


// const number = [1,2,3];
// const joined = number.join(',')
// console.log(joined)
// console.log(typeof(joined))


// const elements = ["Fire" , "Air" , "Water"];
// console.log(elements.join()) // Fire,Air,Water

// const str = elements.join(' ');
// console.log(str) // Fire Air Water
// console.log(typeof(str)) // string

// console.log(elements.join("-")) // Fire-Air-Water






// 77 :  sorting array : 

// برای زمانی ک اعضای داخل ارایه یه ما همه پریمیتو باشند
// const numbers = [2 ,3,1,5,4,8,9,6,7,10,11,12,13];
// console.log(numbers.sort()); // [1,2,3]
// console.log(numbers.reverse())

// الان هیج کدوم از این متد های بالا درست کار نمیکنه تا اینکه : 
// بااستفاده از اروفانکش و یه کلک ریز اونو درست کنیم 

// console.log(numbers.sort((a ,b ) => a - b))
// console.log(numbers.reverse((a ,b ) => a - b))


// حالا اگر اعضای داخل ارایه ابجکت باشند باید مقایسه کنیم 

// courses = [
//     { id : 1 , name : "Node.js" },
//     { id : 2 , name : "Javascript"},
//     { id : 3 , name : "python"},
//     { id : 4 , name : "django"}
// ];

// console.log(courses)

//// 1 : 
// const obj = courses.sort((a , b) => {
//     return b.id - a.id
// });
// console.log(obj)


/// 2 :
// courses.sort(function(a , b) {
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// });
// console.log(courses)









// 78 : every()  and some()  metoth :

//  every : تمام المان هارو بررسی میکنه به اولین ضابطه ای که با شرط برقرار باشه برسه یه / true برمیگردونه و تمام . 
// some :  به اولین مورد مخالف شرط که برسه یه false  برمیگردونه 

// const number = [1 , -1 , 2 , 3];

// const atleastOnePositive = number.some(function(value){
//     return value >= 0;
// });
// console.log(atleastOnePositive); // true  چون یه دونه مخالف شرط داره 

// //   میخواهیم ببینیم  که ایا تمام اعضا مثبت هستند یا نه :

// const allpositive = number.every(function(item) {
//     return item >=0;
// })
// console.log(allpositive)  // false  چون یه دونه منفی داره توش 







// 79 :  filtering in array : 


//  فقط میخواهیم که اعداد مثبت رو برگردونیم : 

// const num = [1,-1 , 2 ,3,4,5,6];

// // to call back function : 

// const positiveNumber = num.filter(function(num){
//     return num  >= 0;
// })

// console.log(positiveNumber)


// // to arrow function : 

// const fliterevenNumber = num.filter((item ) =>{
//     return item % 2 == 0 ;
// });

// console.log(fliterevenNumber)



// filter object : 

// const restoran = [
//     { id :"open" , name :"jafaraga" , },
//     { id :"close" , name :"bama"},
//     { id : "open" , name :"sito"}
// ];

// const open_restoran = restoran.filter((item) => {
//     return item.id == "open"
// });

// console.log(open_restoran)














// 80 : mapping an array : 
//  با متد مپ میتونیم هر ایتمی رو در ارایه به چیز دیگه ای مپ کنیم 
// میتونیم از مپ استفاده کنیم و المان های یک ارایه رو به با چیز دیگه اضافه کنیم 

// میخواهیم هر عدد رو به یک ابجکت با ولیو پراپرتی مپ کنیم 

// const numbers = [1,2,3,4];

// const map_func = numbers.map((item) => {
//     const obj ={ value : item};
//     return obj
// });

// console.log(map_func)


// const map_func = numbers.map(item => ({ value : item })); این شکلی هم میشه نوشت 
// منتهی وقتی از ابجکت استفاده میکنیم باید بزاریم تو پرانتز ({value : item})


// نکته : مپ و فیلتر یه ارایه ی جدید برمیگردونن و به ارایه ی اصلی کاری ندارن 

// chaining :  یعنی استفاده کردن زنجیره وار متد های مپ و فیلتر پشت سر هم 
// پس اون هارو به یه متغیر ربط نمیدیم و انتهاشو نمی بندیم 
// const numbers = [-1,-2,1,2,3];

// const items = numbers
//     .filter(n =>  n >= 0)
//     .map(n => ({value : n}))
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value);

// console.log(items);










// 81 : recucing an array :

// let number = [1,2,3,4,5];



// 1 solution : 
// let sum = 0;
// for(let n of number){
//     sum += n
// }
// console.log(sum)

// 2 solution (using  recucing )   /// بهترین متد برای جمع بستن : 


//  این روش جدید هست و یه سری توضیحات هم داره ولی همین الان هم 
// نحوه ی کار رو یادگرفتم 
// const sum = number.reduce((accumulator , currentvalue ) => {
//     return accumulator + currentvalue;
// },0);

// console.log(sum)

// const sums = number.reduce((a , b) => a + b , 0);
// console.log(sums)











// 82 exercise : 

// let list_number = [];
// function arrayFormRange(min , max){
//     for(let i= min ; i < max+1 ; i++){
//         list_number.push(i)
//     }
//     return list_number
// }

// console.log(arrayFormRange(4 , 10))










// 83 :  exercize: creating includes() method .

// function includes(array , searchElemnt){
//     for(let i=0 ; i < array.length ; i++)
//         if(searchElemnt == array[i]) return true
//     return false  
    
// }

// console.log(includes([1,2,3,4,5,6] , 7))
// console.log(includes([1,2,3,4,5,6] , 6))










// 84  exercise :  excluded
// let out_list = [];
// function except(array , excluded){
//     for(let element of array){
//         if(!excluded.includes(element)){
//             out_list.push(element)
//         }
//     }return out_list
// }
// console.log(except([1,2,3,4,5,6] ,[2,4]))








// 85 : exercise  نکته داره خوبه : 

// شیفت دادن اعداد به یه جای دیگه 

// const number = [1,2,3,4];

// function move(array ,index , offset){
//     const position = index + offset;
//     if( position >= array.length || position < 0){
//         console.error("Invalid offset .");
//         return;
//     }

//     const output = [... array];
//     const element = output.splice(index , 1)[0];
//     output.splice(position , 0 , element);
//     return output;
// }

// const output = move(number , 2 , 1)
// console.log(output)











// دو سه تا مثال داره حل میکنه که کار کردن  reduce رو هم رو نشون میده 
// 86 : exercise : 
// میخواهیم ببنیم که چه تعداد ایتم تکراری در ارایه هست از عددی که ما بهش میدیم 


// const number = [1,2,3,4,4,4,1];

// function countOccurrences(array ,searchElemnt){
//         // sulotion 1 : 
//     let count = 0 ;
//     for(let i=0 ; i < array.length ; i++){
//         if(array[i] == searchElemnt){
//             count++
//         }
//     }
//     return count

//     // sulotion 2 :  reduce : 
//     // array.reduce((a , b) => {
//     //     const occurrence = (b === searchElemnt) ? 1 : 0;
//     //     return a + occurrence
//     // }, 0 );

// }

// const num = countOccurrences(number , 4)
// console.log(num)









// 87 : exercise : 

// //  بزرتکترین عدد یه لیست رو برمگردونه 
// const list = [1,2,3,4];

// function greeter(array){

    // if(array.length === 0) return undefined;

    // let max = array[0];
    // for(let i=0 ; i < array.length ; i++){
    //     if(array[i] > max){
    //         max = array[i]
    //     }
    // }
    // return max


    // میاییم مقایسه میکنیم که اگر ای از بی بزگتر بود ای رو برگدونه در غیر این 
    // صورت بی رو برگدونه 
    // return array.reduce((a , b) => {
    //     if(b > a) return b;
    //     return a;
    // })


    // کوتاه تر نوشتیم با عبارت شرطی 
    // return array.reduce((a , b) => (a >b ) ? a :  b); 
// }
 
// console.log(greeter(list))












// 88 : exercise : خیلی نکته داشت حتما باز ببین

// const movise =[
//     {title : "a" , year : 2018 , rating :4.5 },
//     {title : "b" , year : 2018 , rating :4.7 },
//     {title : "c" , year : 2018 , rating : 3 },
//     {title : "d" , year : 2017 , rating :4.5 }
// ]

// این هار راه حل های من بود
// sort them by their rating : 
// const sorter = movise.sort(function(a , b){
//     if(a.rating > b.rating ) return -1;
//     if(a.rating < b.rating ) return 1;
//     return;
// })

// console.log(sorter)


// روش خیلی خیلی خیلی خوبی یه برای زمانی که میخواهیم فقط تایتل هاشو بکشیم بیرون 
// pick their title : 
// const titles = movise.filter((item) =>{
//     let x = item.title;
//     console.log(x)
    
// })



// const titles = movise
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a , b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title);

// console.log(titles)















// 89 ; 

// function Declaration  vs  Expressions :

// function walk() {  
//     console.log("walk");
// }

// walk()
// //  anonymous function expression :


// const run = function() { 
//     console.log("this is a text")
//  };


// // run()              // this is a text
// // console.log(run)  // [Function: run]

// let movie = run;
// movie()  // الان این دوتا تابع موو و ران به یه رفرنس اشاره میکنن 









// 90 : Hosting : 

// هوستینک پروسه ی انتقال فانکشن دکولوریشن به بالای فایل است 
// و این کار به طور خودکار توسط موتور جاوااسکریپت انجام میشه 
// ............................................
// فانکشن دکولرشن رو میتونیم قبل از تعریف کردن ش صداش بزنیم یعنی 
// این شکلی :

// decolration()

// function decolration(){
//     console.log("this is a text")
// }

//.................................................

// اما توی تابع اکسپرشن اول باید تعریفش کنیم بعد صداش کنیم 
// چون اون تابع رو داریم میریزیم توی یع متغیر 

// const expression = function(){
//     console.log("Hosting")
// }

// expression()

//..................................................












// 91 : Arguments : 
// جاوااسکریپت یه زبان داینامیک است به این معنی که ما میتونیم یه متغیر 
// تعریف کنیم و بعد نوع اون رو عوض ش کنیم 

// undefined + 1 = NaN

// function sum(a , b){
//     let total = 0;
//     for(let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1,2,3,4,5,10));











// 92 : the rest operator :  به معنی ما بقی 

// بعد از استاراگز یا همون رست اپراتور نمی تونیم پارامتر دیگه ای وارد کنیم 
// در واقع رست اپراتور باید اخرین پارامت باشد 
// هر چن تا پارامتر که میخواهیم میتونیم اولش وارد کنیم 


// function sum(...args) { 
//     return args.reduce((a , b) => a + b , 0);
//  }

// console.log(sum(1,2,3,4,5))   


// اینم یه مثال : 
// function sum(discunt , ...price){
//     const total = price.reduce((a , b) => a + b , 0);
//     return total * (1 - discunt)
// }

// console.log(sum(0.1 ,20 , 30 ))












// 93 : default Parameters : 

// وقتی به یه پارمتر مقدار دیفالت میدی باید به مقادیر بعد از اون هم 
// مقدار پیش فرض بدی 

// function inrerest(pirncipa; , rate = 3.5 , year = 5){
//     return pirncipa * rate / 100 * year ;
// }

// console.log(inrerest(10000));

// ..............................................................


// از اینجا باید یه بار دیگه هم نگاه کنی چون مطالب رو نصفه نوشتی 


//...............................................................................









// 94 : geter and setters  (یه نوع ویژه از متد ها در ابجکت ها )

// getter : acssese to propertyes ,
// seter : change (mutate) them 

// const person = {
//     firstname : "mosh",
//     lastname : "hamedani",
//     // fullname(){              // این یه روشه 
//     //    return this.firstname +" "+  this.lastname;
//     // }
//     // تو روش فانکشن فقط میتونیم مقدار داخل فانک رو بخونیم 
//     // و نمی تونیم از بیرون چیزی رو براش ست کنیم 
//     // و هم چنین موقع صدا زدن باید اون رو به شکل یه فانک صدا بزنیم نه مث یه متد


//     get fullname(){
//         return this.firstname +" "+ this.lastname
//     },

//     set fullname(value){
//         const parts = value.split(" ");
//         this.firstname = parts[0];
//         this.lastname = parts[1];
//     }
// };

// person.fullname = "hassan amiri"

// console.log(person.fullname  )









// 95 : error handeling ( tye and cash)

// let person = {
   

//     get fulname(){
//         return this.lastname + " " + this.fistname
//     },

//     set fullname(value){
//         if(typeof value!== "string"){
//             throw new Error("value is not a string")
//         }
               
//         const parts = value.split(" ");
//         parts[0] = this.fistname;
//         parts[1] = this.lastname;

//     }

// };

// try{
//     person.fullname = ""
// }
// catch(e){
//     console.log(e)
// }

// console.log(person)










// 96 :  local va Global Scope

// اسکوپ یه متغیر تعیین میکند که ان متغیر در کجا در دسترس است 

// گلوبال اسکوپ یعنی همه جا بهش  دسترسی داریم ها 

// پس متغیر ها یا کانسنت های لوکال درون یک تابع به متغیر های گلوبال
// الویت دارند 

// const color = "red";
// function saycolor(){
//     const color = "blue";
//     return color;
    
// }

// console.log(saycolor())






// 97  : let va var : 

// var => function-scoped
// ES6 : let , const => block-scoped

//   وقتی متغیری رو با وار تعریف میکنید اسکوپش به بلوکی که در ان تعریف شده محدود نمی شه 
// بلکه به تابعی که درون ان تعریف شده محدود میشه

// function start() {  
//     for(var i=0 ; i<5 ; i++){
//         if(true){
//             var color = "red";
//         }
//     }
//     console.log(color)
// }

// نکته اینجاس که الان ما به کالر دسترسی داریم در نقطه به نقطه ی فانکشمون
// در صورتی که باید فقط درون اسکوپ ایف به اون دسترسی داشته باشیم 
// همین طور به i هم دسترسی داریم در تمام طول فانکشن

// وقتی از وار بیرون از یک تابع استفاده میکنیم یک متغیر گلوبال مسازیم 



// وار متغیر را به window object متصل میکند 
// و ما نباید این کار رو بکنیم 









// 98  the "this"  keyword :

// دیس به ابحکت ای رفرنس ( اشاره  )میکند که در تابع فعلی  در حال اجراست 

// این بدیهی هست که اگر یک تابع بخشی از یک ابجکت باشه به اون تابع متد می گوییم 
// پس اگر بک تابع متودی ردر ابجکت باشد دیس به خود ابن ابجکت اشاره میکند 
