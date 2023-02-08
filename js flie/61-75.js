
/// \پیدا کردن یه کی مشخص در ابجکت 
// let obj = { user : "hassan"};

// console.log(obj.user === undefined)
// let obj2 = {"1" : "hasan", "12" : "ali" ,"2" : "mahdi"}

// for(let key in obj2){
//     console.log(key , obj2[key])
// }

// sorting for index (not sotring string)

//1 hasan
// 2 mahdi
// 12 ali


// let obj3 = {};
// let obj4 = {name : "hassan"}

// console.log( obj3 ===  {}) ? true : false
// console.log( obj4 ===  {}) ? true : false






// 61  : create object   with : fanctory funciton and constractor function 
// باید دو تا فانکش بنویسیم 


// factory  function : 
// function creatAddress(street , city , zipCode){
//     return{
//         street : street, // البته میتونیمم که استریت دومی رو ننویسیم 
//         city : city , //  اگر  kye , value  یکی باشدن 
//         zipCode : zipCode 
//     };
// }


// let addrees = creatAddress("navab" , "qom" , "amiri house");
// console.log(addrees);
  


// // constructor function : 
// function Address(Street , City , Zipcod){
//     this.street = Street,
//     this.city = City,
//     this.zipCode = Zipcod
// }
// let adrress = new Address("a" , "b" , "c");
// console.log(adrress); 












// // // 62 ; 




// let adrress1 = new Address("a" , "b" , "c");
// let adrress2 = new Address("a" , "b" , "c");
// let adrress3 = adrress1;  // حالا هر دوی این ها به یه جای حافظه اشاره میکنند 


// console.log(areEqual(adrress1 , adrress2)); // true  یعنی تمام پراپرتی ها باهم برابرند 
// console.log(areSame(adrress1 , adrress2)); // false این یعنی دو تا ابجکت باهم فرق دارند 
// console.log(areEqual(adrress1 , adrress3)); // true 


// // function Address(Street , City , Zipcod){
// //     this.street = Street,
// //     this.city = City,
// //     this.zipCode = Zipcod
// // }

// function areEqual(adrress1 , adrress2){
//     // اما توی این تابع باید تک تک پراپرتی ها رو برسی کنیم 
//     return adrress1.street === adrress2.street &&
//     adrress1.city ===adrress2.city &&
//     adrress1.zipCode == adrress2.zipCode;
// }



// // // مخواهیم ببینیم که ایا این دو ابجکت رفرنس شان ( مرجع ) شان یکی هست یا نه 
// // // یعتی به یه جا از حافظه اشاره میکنند یا نه 


// function areSame(adrress1 , adrress2){
//     return adrress1 === adrress2
// }







// 63 :  creat blog post object  


// let post = {
//     title : "a",
//     body : "b" ,
//     author:"c",
//     views: 10 , 
//     comment : [
//                  {author : "a" , body : "b"},{author:"c" , body: "d"} 
//               ],
//     islive : true
                               
// };

// console.log(post.comment[1].author)
// console.log(post)

// 64 : 


// function Post(title , body ,auther){
//     this.title = title;
//     this.body = body;
//     this.auther = auther;
//     this.views = 0;
//     this.comments = [];
//     this.islive = false;
// }

// let post = new Post("a" , "b" ,"c");
// console.log(post);








// 65 : exersize // ساختن یه ارایه از ابجکت ها 

// let price = [
//     {lable : '$' , tooltip: 'Inexpensive' , minPerPerson: 0 , maxPerPerson : 10} ,
//     {lable : '$$' , tooltip: 'Moderate' , minPerPerson: 11 , maxPerPerson : 20}, 
//     {lable : '$$$' , tooltip: 'Expensive' , minPerPerson: 21 , maxPerPerson : 50}
// ];

// let restaurants = [
//     {averagePerPerson : 5}
// ];
//.....................................................................................................

// exersize : 

// let list = ["a" , "b" , "c" , "d"];

// let cons = list.map((item) => {
//     return `${item}${item}`
// })

// console.log(cons)  // [ 'aa', 'bb', 'cc', 'dd' ]
// list.splice(4 , 0 , "e")
// console.log(list)

// ...................................

// let obj = {
//     name : "hassan",
//     lastname : "amiri",
//     age : 22

// }

// function func(){
//     return "this is a function "
// }

// let array = ["html" , "css" , "javascript"];


// let arr = ["jquery" , true , 25 , obj , func , array];

// console.log(arr[0])
// console.log(arr[3].age)
// console.log(arr[3].name)
// console.log(arr[3].lastname)
// console.log(arr[3])

// console.log(arr[4])
// console.log(arr[4]())

// for(let i=0 ; i < arr.length ; i++) console.log(arr[i])

// for(let k of arr) console.log(k)

// for(let j in arr) console.log(arr[j])    // =======> itrate object

    

// ..................................................................................................
// string :

// let str = "Gestes : \n * hassan \n * ali \n * mohammad"
// console.log(str)

// console.log(str.length) // 40
// let names = "hassan amiri az qom";

// console.log(names.indexOf("hassan"))
// console.log(names.indexOf("az"))
// console.log(names.indexOf("amiri", 7)) // پارامتر دوم از ایندکسی که تو میگی شروع میکنه 
// for(let i of names){
//     console.log(i)
// }

// let str = "";
// for(let i=65 ; i <= 220 ; i++){
//     str += String.fromCodePoint(i)
// }

// console.log(str)


// .................................................................................................
// 66  جزئیات ارایه ها : 

// adding new Element 
// finding element 
// removing elements 
// spliting arrays 
// combining arrays 

// 67 : 
// const numbers = [3,4];
// // اضافه کردن به اخر :
// numbers.push(5,6);
// // اضافه کردن از اول : 
// numbers.unshift(1,2)

// // اضافه کردن به وسط یا جایی که دلمون میخواد : 
// //  المان اول میگه که از کجا شروع کنم به گزاشتن ایتم 
// // المان دوم میگه که ایا حذف کنم یا نه 
// // المان سوم میگه که چه چیز هایی رو اضافه کنم 
// numbers.splice(2 , 0 ,"a" , "b"); 
// console.log(numbers)



// 68 : پیدا کردن المان در ارایه اها : 
/// پیدا کردن المان ها در ارایه ها خیلی بستگی داره به این که در ارایه 
//  پریمیتیو داریم یا رفرنس تایپ ) primitive   or   refrence type 

// const numbers = [1,2,3,4];
// indexOf  شماره ایندکس رو برمیگدرونه 
// console.log(numbers.indexOf("a")); اگر المان مورد نظر نباشه منفی یه یک برمی گردونه : -1
// console.log(numbers.indexOf(1));  // 0
// console.log(numbers.indexOf(3));  // 2 

// console.log(numbers.lastIndexOf(4));  شماره ایندکس //

// متودی که اگر ایندکس مورد نطر در ارایه باشه true or false برمیگردونه 
// console.log(numbers.includes(2));
// // یعنی اگر ایندکس مورد نظر برابر نبود با -1  true برگردون 
// console.log(numbers.indexOf(5) !== -1); //  نه این به جای منفی یک به ما false میده 

// مشخص کنیم که از کدوم ایندکس شروع به گشتن کنه : 
// این 2 یعنی از ایندکس 2 به بعد شروع کن به گشتن 

// console.log(numbers.indexOf(3,2));







// 69 پیدا کردن رفرنس تایپ ها : 

 // در واقع باید از کال بک فانکشن استفاده کنیم 
// با استفاده از  find()  true or false  برمیگردونه 
//  به عنوان ارگومان find( functions ) باید فانکش پاس بدیم 
// این متد اولین المانی که با این فانکشن یا ضابطه ی ما همخوانی داشته باشه رو برمیگردونه 

//  const courses = [
//      {id : 1 , name : "a"},
//      {id : 2 , name : "b"}
//  ];

// const cours = courses.find(function(cours){
//     return cours.name === "b" ; 
//  });

// console.log(cours)

// const cours2 = courses.find((item) => item.id == 2)
// console.log(cours2)


//  findIndex  هم شماره ی این ایندکس مورد نظر رو برمیگردونه 

// const item = courses.findIndex(function(item){
//     return item.name === "b" ; 
//  });

// console.log(item)












// 70  Arrow functions : 

// const cours = courses.find(cours => cours.name === "a");

// console.log(cours)
  





//71  (pop( end   )  ,  shift( first  )  ,  splice(start , count emlemnt remove , append your favorit item) )

// const numbers = [1,2,3,4];
// end:
// const last = numbers.pop();
// console.log(numbers)
// console.log(last)

// first : 
// const first = numbers.shift();
// console.log(numbers)
// console.log(first)

// midele :  حذف کردن یه بازه :
// numbers.splice(2 , 2) // این یعنی از ایندکس 2 به بعد 2 تا المنت رو حذف کن 
// console.log(numbers)
 






// 72 :  خالی کردن یه ارایه ( یعنی حذف کردن تمام المنت های اون )
// اول اینکه نباید ارایه رو با  const  تعریف کنی 
// نکته داره این سوال به عنوان زباله جم کن که اگر بهش رفرنس ندی زباله جمع کن اون رو حذف میکنه 

// let numbers = [1,2,3,4];
// let another = numbers;

// solotion 1 :
// numbers = [];  //  از این روش زمانی میشه استفاده کرد که چند رفرنس به این ارایه نداشته باشید 

// solotion 2 :  best solotion 

// numbers.length = 0;


// solotion 3 :
// numbers.splice(0 , numbers.length);

// solotion 4 :

// while(numbers.length > 0){
//     numbers.pop();
// }

// console.log(numbers)






// 73 :   یه یه ارایه رو به دو بخش تقسیم کنیم یا چطوری دو تا آرایه رو ترکیب کنیم با هم : 

// این قسمت هم نکته داره من کامل شرو ننوشتم پس باید دوباره نگاه کنم 
// const first = [1,2,3];
// const second = [4,5,6];

// //  استفاده از  concat  یه ارایه ی جدید میسازه و ترکیب دو ارایه رو میریزه توش
// // پس در نتیجه ارایه های اولیه ی ما هیچ تغییری نمیکنه 

// const combined = first.concat(second);

 // exersize : 

// let a = [1,2,3];
// let b = [4,5,6];
// let c = [7,8,9];

// let e = a.concat(b,c, 10 ,11,12)    //  ===  let e = [...a,...b,...c,10,11,12]

// console.log(e)  // [1,  2, 3, 4,  5,6,  7, 8, 9, 10,11, 12]




// // خورد کردن با  slice() : 

// const slice = combined.slice(2,4); //  از ایندکس شماره 2 تا 4 رو میگیره ( در واقع یه بازه رو کپی میکنه)
// const slice_2 = combined.slice(); // کل ارایه رو کپی میکنه 


// console.log(slice)
// console.log(slice_2)
// console.log(combined)

/* 
نکته ی مهم اینه که اگر مقدار پریمتیتو  دارید 
 این پریمیتو ها درون ارایه ی هدف کپی میشن 
 ولی اگر در ارایه ابجکت داشته باشیم 
خود ابجکت ها کپی نمی شن و رفرنس اون ها کپی میشه 
و این یعنی المان های درون ارایه های ورودی و خروجی
به ابجکت یکسانی اشاره میکنند 
*/







// 74  the spread operator :

//  به یه روش دیگه میخواییم ترکیب کردن رو امتحان کنیم :

// const first = [1,2,3];
// const second = [4,5,6];

 
// const combined = [...first , ...second];
// console.log(combined)


// // خوبیش اینه که میتونیم وسطش هرچی دلمون میخواد اضافه کنیم
// // یا حتی میتونیم به اخرش اضافه کنیم 
// const comb = [...first , "a" , "b",...second , "c"];
// console.log(comb)







// 75 : دوتا روش برای پیمایش کردن روی یه لیست

// یکی که همون  for .. of  یا for ...in 

// const number = [1,2,3,4];
// for(let num  of number ){
//     console.log(num)
// }


// forEach : 
// 1 == call back function : 
// number.forEach(function(num){
//     console.log(num)
// });

// 2 == Arrow function : 
// number.forEach(num => console.log(num))



// روش های پیماش روی لیست ها با استفاده از سه تا  for 
// let mylist = ["hassan" , "ali" , 24 , true ];

// // for(let i=0 ; i<mylist.length  ; i++){
// //     console.log(mylist[i])  // hassan ali 24 true
// // }

// // for(let key in mylist){
// //     console.log(mylist[key]) // hassan ali 24 true
    
// // }

// for(let i of mylist){
//     console.log(i)  // hassan ali 24 true
// }


// let user1 = {
//     name: "John"
//     }
//     let user2 = {
//     age: 30
//     }
//     let user3 = {
//     surname : "Brown"
//     }
//     let obj = {}
//     Object.assign(obj, user1, user2, user3)
// Object.assign(obj, [user1, user2, user3])
//     console.log(obj)