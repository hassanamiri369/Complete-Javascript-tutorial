// factory function 
// Constructor functions 








/////////////////////////////////////////////////

// میخواست بگه یه ابجکت میتونه تایپ های مختلف رو به خودش بگیره 

// let circle = {
//     radius : 1 ,
//     location : {x : 1, y : 1},
//     isVisible : true,
//     draw : function(){
//         return "this is a text"
//     }
// };

// console.log(circle.draw())   this is a text
// console.log(circle.location)  // { x: 1, y: 1 }






// 47  

// factory function یکی از راه های ساخت ابجکت 

// function creatCircle(radius , last_name){
//     return{
//         names : radius,  //  اگر اسمی که انیجا تعریف میکنی با اون بالایی یکی بود دیگه نمیخواد که این دونقطه رو بزاری 
//         last_name,
//         draw(){
//             console.log("draw");
//             return " this is a factory function "
//         }
//     };
// }

// let circle1 = creatCircle("ali" , "amiri");
// console.log(circle1 , circle1.draw())





// 48  

// Constructor functions 

// function Circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log('draw')
//     }
//     return this
// }

// const circle = new Circle(1);
// console.log(circle)





//49 
// در جاوااسکریپت , ابجکت ها داینامیک هستند یعنی وقتی اون هارو ساختید همیشه میتونید پراپرتی و متود ب اون ها اضافه کنید 

// append praperie and deleted praperty


// function creatCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log("draw");
//         }
//     };
// }

// creatCircle.color = 'yellow'; // append
// delete creatCircle.color ; // delete

// console.log(creatCircle)


// const hassan = {
//     age : 22,
// };

// hassan.color = 'yellow'; // append
// // delete creatCircle.color ; // delete
// hassan.draw = function(){
//     console.log("my name is hassan ")
// }
// // delete hassan.draw;
// console.log(hassan)






//  50 
// هر ابجکت یه کاسنتراکتر پراپرتی داره که نشان دهنده ی تابعی 
// است که از آن برای ساختن این  ابجکت استفاده شده 




// 51 
// خب چکیده ی بحث این بود که در جاوااسکریپت , تابع هاو ارایه ها  , ابجکت هستند 




// 52  value and refrens type رفتار های متفاوت ابجکت ها و پریمیتیو ها 




// در جاوااسکریپت دو دسته تایپ داریم 
// 1 -  value type که بع اون ها primitive اولیه  Uهم گفته میشود 

// number 
// string 
// boolean 
// symbol
// undefined
// null 





// 2 - refrenstype 

// object 
// funtion   => فانکشن ها هم ابجکت هستند 
// array  => ارایه هاهم ابجکت هستند 

// primitive داریم یا object  پس خلاصه بگم در جاوااسکریپت یا  

// پریمیتیو ها به وسیله ی مقدارشون کپی میشن 
//اما ابجکت ها بر اساس رفرنس یا ادرسشون کپی میشن 


// 53   این قسمت هنوز کار داره  )چطور پراپرتی های یک ابجکت رو برشماریم )

// const circle = {
//     radius : 1,
//     draw(){
//         console.log('draw');
//     }
// };



// for(let key in circle)
//     console.log(key , circle[key])  // جواب میده 


// for(let key of circle){ // جواب نمیده 
//     console.log(key)  // چون این نوع از فور برای < قابل تکرار ها < مثل ارایه ها و مپ ها قابل استفاده است 
// }


// و نکته این جاست که ابجکت ها قابل برشماری یا تکرار نیستند 
// error not itrable میده اگر روش حرکت یا پیمایش کنی
// یعنی با  for of loops  جواب نمگیری 
// البته یه متد هست که باهاش میشه این کارو کرد ولی خیلی جالب نیست و این کار یه ارایه برمیگردونه 
// ارایه ها قابل برشماردن هستن و میتونی روشون پیمایش کنی 

// همه ی توابع در جاواسکریپت یه ابجکت هستند 
// متد  Object.keys یک ارایه ی رشته ای برمیگردونه 

// .entries :  یه متد هست که هر جفت ولیو و کی رو برمیگردونه  
// //این هم یه روش هست برای دسترسی به تمام پراپرتی های و متد های یه ابجکت 
// for(let key of Object.keys(circle))
//     console.log( circle[key])
//  با اپراتور in میتونیم بفهمیم که پراپرتی مورد نظر ما درون این ابجکت وجود داره یا نه 
// for(let i of Object.entries(circle)){
//     console.log(i)
// }




//  در نهایت بهترین راه برای برشماری یا همونن پیمایش پراپرتی های درون یه ابجکت استفاده کردن از  for in loops  هست 
// از for of loops +  intires ,  keys  هم  میتونی استفاده کنی 











// 54     حالا میخواهیم پراپرتی های یه ابجکت رو بگیرم و درون یه ابجکت دیگه کپی کنیم 

// const circle = {
//     radius : 1, 
//     draw() {
//         console.log("draw");
//     }
// };


// empty object 
//  const another = {};

// copy circle praperty in to another object :


// این روش قدمی برای کپی کردن هستش 
// for(let key in circle){
//     another[key] = circle[key];
// } 
// console.log(another)


// استفاده از یه روش جدید تر   با استفاده از : Object.assign(new object(another_1) , target object(circle))
// const another_1 = Object.assign({} , circle)
// console.log(another_1);

// let new_boj = Object.assign( {} , circle)
// console.log(new_boj)



// راه ساده تر و قشنگ تر برای کپی کردن 

// const another_2 = {...circle};
// console.log(another_2)














// 55  زباله جمع کن 

//56  bulit-in  object in js 
// مابقی شو خودت برو پیدا کن بخوون 


// انتخاب کردن دو عدد تصادفی بین دو تا عدد
// function getRandomNumber(min , max){
//     return (Math.random() * (max - min) + min).toFixed(0);
// }

// const round_num = getRandomNumber(10 , 100)
// console.log(round_num)  // int number is output : 29  52 85 

// ................................................................................... 


// function getrandom(min , max){
//     min = Math.ceil(min);   // ronde up 
//     max = Math.floor(max);  // ronde down
//     return Math.floor(Math.random() * (max - min) +min);

// }
// console.log(getrandom(10 , 100))


// console.log(Math.floor(Math.random() * (100 - 10) +10))  








// 57 built-in object : 
// یه رشته primitve  هست 
//پریمیتیو ها پراپرتی و متد ندارند  و فقط ابجکت ها دارند اون رو ولی ما از این متد ها و پراپرتی ها برای استرینگ ها اماستفاده میکنیم
// در جاوااسرکریپت دو نوع استرینگ داریم 
// string primitive    and  string object 
//وقتی برای یه استرینگ از نوتیشن نقطه ای استفاده میکنیم موتور جاوااسکریپت درون خودش این رو  در قالب string object قرار میده 


// string primitive
const message = "This is my first message";
// console.log(message)
// console.log(typeof(message))  // string 

// // // string object
// const another = new String("hi");
// console.log(another)  // [String: 'hi']
// console.log(typeof(another))  // object 

// console.log(message.length) // tedade character  24
// console.log(message[0]) // index  moshakas T
// console.log(message.includes("my")) // true 
// console.log(message.startsWith("This"));
// console.log(message.endsWith(message))
// console.log(message.indexOf("my"))
// console.log(message.replace("first" , "second"))
// console.log(message.toUpperCase())
// console.log(message.toLowerCase())
// console.log(message.trim()) // remove to white space
// console.log(message.split(" ")) // [ 'This', 'is', 'my', 'first', 'message' ]
// console.log(message.split("")) //['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'm', 'y',' ', 'f', 'i', 'r', 's','t', ' ', 'm', 'e', 's','s', 'a', 'g', 'e']

// Escape notation : 
//     (\' : single quote ) or  (\n : new line) ....

// let a = "1" + 10;
// console.log(a)
// console.log(a - 10);








//58  template literal

// بک تیک کد مارو همون جور که نوشتیم نشون میده دقیقا 
// const another = `This is my 
// first message
// my name is hassan amiri
// i am a juniuor programer
// `;
// console.log(another);

// هم چنین میتونیم که از علامت دلارساین و کرلی براکت( اکولاد )استفاده کینم 
// برای داینامیک کردن گرفتن متغیر دقیقا همون کار اف استرینگ ها در پایتون 

// const name = "john";
// const say_hello = `hello ${name}`;
// console.log(say_hello)








// 59 built in object : Date

// const now = new Date();
// console.log(now)
// const date1 = new Date("May 11 2018 09:00")
// console.log(date1)

// console.log(now.toDateString()) // Sat May 01 2021
// console.log(now.toTimeString())  // 15:59:27 GMT+0430 (وقت تابستانی ایران)
// console.log(now.toISOString())  //2021-05-01T11:29:27.273Z
// console.log(now.setFullYear(2021))





// 60 
// هواست باشه که برای پیمایش داخل ابجکت ها بای از این نوع for in استفاده کنی 
// let adress = {
//     zipcod : "a",
//     city : "b",
//     street : "c"
// };

// for(let key in adress){
//     console.log(key , adress[key])
// }


