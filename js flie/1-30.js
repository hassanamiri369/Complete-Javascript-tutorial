// 13   functions 
// function sayhello(name , lastname){
//     console.log("hello" , name  + " "+  lastname)
// }


// sayhello("hassan" , "amiri");
// sayhello("reza" , "amiri");

//  # megdare pishfarz dar js undefine hast .
// what is template  literals ? help to write a clear code 


// 14  type of function   calculate function ( megdari ro mohasebe mikone ya amali ro anjam mide)

// function square(number){
//     return number * number

// }

// console.log(square(2));


// 15  operators : 
// math operatior  ( atihmetic)  اپرویتور های ریاضی 
// اپرویتور های مقدار دهی  ( assignment)
// اپرویتور های مقایسه ای ( compration)
// اپرویتور های منطقی( logical)
// اپرویتور های باینری ( bitwise)


//16  اپرویتور های ریاضی 

// let y = 10;
// let x = 3;
// console.log(y + x);
// console.log(y - x);
// console.log(y * x);
// console.log(y / x);
// console.log(y % x);
// console.log(y ** x);

// increment (++)

//console.log(++x)
//console.log(x++)

// decrement (--)

// console.log(--x)
// console.log(x--)
// console.log(x)


// 17 اپریتور های منطقی 
// let x = 10;

// x = x + 5;
// x += 5 ; 

// y = y * 3;
// y *=3; //  * / 

// 18  اپرویتور های مقایسه ای 

// نتیجه ی اپریتور های مقایسه ای  true or false است
// relational
// let y = 5;
// console.log( y > 0);
// console.log( y >= 5);  بزرکتر مساوی 
// console.log( y < 5); 
// console.log( y <= 5); //کوچکتر مساوی  

// equality 
// console.log( y !== 5 )  // false  // اگر سه تا مساوی بزاری تایپ شون رو هم مقایسه میکنه 
// console.log(y == 5) // true


// 19  equality 



// strict equality
// console.log(1 === "1");  // false // تضمین میکنه که مقادیر دو طرف ارپراتور هم از نظر اندازه و هم از نظر نوع باهم برابر اند 
// console.log(true === 0);// false // چون یه طرفش بولین هست اون طرف رو هم تبدیل میکنه به بولین 
// console.log(true === 1); //false

// lose equality
// console.log(1 == "1"); // true
// console.log(true == 0);// false // چون یه طرفش بولین هست اون طرف رو هم تبدیل میکنه به بولین 
// console.log(true == 1); // true

                                                      

// 20  اپرویتور های شرطی

// let point = 90;
// let type = point > 100 ? 'gold' : 'silver' ;
// console.log(type); // if point == 110  type == gold else type == silver;

// 21 اپراتور های منطقی ( برای مقایسه کردن چند شرط مختلف به کار میره )

// logical  AND( && )  هر دو طرفش باید ترو باشه تا اجرا بشه 

// این میگه که اگر ایتم سمت راست درست بود بیا قسمت سمت چپ رو اجرا کن 

// {posts && posts.map(item => <div key={item.id}>{item.name}</div>)}
// console.log( true && true )  // true
// console.log( true && false )  // false
// console.log( false && false )  // false

// logical OR ( || )  یه طرفش هم برقرار باشه شرط انجام میشه 
// console.log( true || true ) // true 
// console.log( true || false) // true 
// console.log( false || false ) // false

// NOT ( ! )  convert the result 

// 22 

//     ||  : اولین ترو رو برمیگردونه  یا اخرین فالس یا عبارت 

// console.log(false || true );  // true 
// console.log( false || 'mosh');  // mosh
// console.log( false || 1); // 1

// console.log( false || 1 || 2); //  1  وقتی موتور جست و جو گر به اولین مقدار تروثی میرسه همون رو برمیگردونه و دیگه سراغ عدد 2 که بعد از عدد یک هست نمیره 


// falsy ( false) : 
// undefined
// null
// 0 
// false
// ''  رشته ی خالی 
// NaN ( not a number )

// truthy : anything that is not falsey --> is truthy 


// let userColor =   undefined ;//'red'; 
// let defaultColor = ' blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);


// 26  if... esleif ...else
// in js have two statment condition : if...else && switch...case


// let hour = 10 ;

// if( hour >= 6 && hour < 12){
//     console.log("Good morning !");
// }else if  (hour >= 12 && hour <= 18) {
//     console.log("Good afternoon !");
// }
// else 
//     console.log("Good evening");



// 27 swithc && case : 

//با استفاده از این متونیم مقدار یک متغیر رو با تعدادی متغیر دیگه مقایسه کنیم 


// let role ;
// switch (role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('moderator');
//         break;
//     default:
//         console.log("unkonwn user")
// }




// 28   loops :
// for loop / while loop / do while loop / for .. in loop / for ... of loop 
// همه ی این لوپ ها کارشون یکسان هست و یه کاری رو  چن بار تکرار میکنن 

// let sayhello = "hello world"
// for(let i =0 ; i <= 10 ; i++){
//     // console.log(sayhello  , i )
//     if( i & 2 !==0 ) console.log(i);
// }

// for(let x = 10 ; x > 1 ; x--){
//     if(x % 2 ==0) console.log(x);
// }




// 29 while loop 

// let i = 0;
// while(i < 10){
//     i++
//     console.log("hello world")
//     if(i % 2 ==0) console.log(i);
// }





// 30   do while loops 
// let y = 0 ;
// do{
//     if(y % 2 ==0) console.log(y)
//     y++
// }while(y < 12)





