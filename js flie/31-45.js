// 31 infiniti loop 
// for and while loop 
// اگر شروط رو مشخص نکنی میوفته تو یه لوپ بی نهایت 
// let i = 0;
// const say = "hello world!"
// while( i < 10){
//     console.log(say)
//     i++
// }



    
//32 
//  const person = {
//     name : 'hassan',
//     age : 22
// };

// for(let key in person){
//     console.log(key ,person[key])
// }

// const colors = ['red' , 'blue' , 'green']
// for(let index in colors){
//     console.log(index , colors[index])
// }


//33 for of 
// const colors = ['red' , 'blue' , 'green']



// for(let i of colors){
//     // console.log(colors[i]) // undefined
//     console.log(i) // red   blue green
// }

//دیگه لازم نیست که جداگانه به المان های اون ایندکس دسترسی داشته باشیم 
//console.log(colors[index])
// for(let color of colors){
//     console.log(color);
// }
// دقیقا مثل فور توی پایتون می مونه 






// 34 continue  and braek

// let myList = [1,2,[3,4,5,6,7],8,[5,6],[[[[[58,6]]]]], undefined , true]

// function element(x){
//     let array = []
//     function elementFinder(x){
//         for(let i=0 ; i < x.length ; i++){
//             if(typeof x[i] !=="object"){    // ارایه یه نوع ابجکته 
//                 array.push(x[i])

//             }else{
//                 elementFinder(x[i])
//             }
//         }
//     }
// elementFinder(x)
// return array
// }

// console.log(element(myList))




// 35 practice 1   این هم تمرین خوبی بود  نکته داشت استفاده از عبارت های شرطی

// function max_num(x , y){
//     if( x > y){
//         return `x higth : ${x}`
//     }else{
//         return ` y higth : ${y}`
//     }
// }

// console.log(max_num(8 , 7))

// function max_num2(a , b){
//     return (a > b) ? a : b  // با استفاده از عبارت های شرطی 
// }

// console.log(max_num2(7 , 6))







// 36  practice  تمرین با حالی بود نکته ی قشنگی داشت 

// function isLandscape(width , height){
//     return (width > height);

//     // این دو روش هم جواب میده ها اما این روش کدزنی یه خورده خوب نیست و زشته 
//     // return (width > height) ? true : false

//     // if(width > height) return true;
//     // return false;
// }

// console.log(isLandscape(7 , 6))


// practice even and odd numbers :
// let even = []
// let odd = []
// for( let i = 0 ; i < 10; i++){

//     // if( i % 2 == 0){
//     //     even.push(i)
//     // }else{
//     //     odd.push(i)
        
//     // }

//     (i %2 == 0) ? even.push(i) : odd.push(i)
// }
// console.log(even)
// console.log(odd)






// 37 practice => FizzBizz function

// function FizzBuzz_func(input){
//     if( typeof(input) !== "number")
//         return "Not number"
    
//     if((input % 3 ===0) && (input % 5 ===0) )  // Alt + ^
//         return "FizzBuzz";
    
//     if(input % 3 === 0)
//         return "Fizz";

//     if(input % 5 ===0)
//         return "Buzz";

//     return input;  
// }

// const output = FizzBuzz_func(15);
// console.log(output)
 



// 38  complex practice  : به دو روش حل کردن من یه روش رو نوشتم فقط


// speed limit = 70 
// 5 => 1 point
//Math.floor(1.3)
// 12 point => suspended

// function checkSpeed(speed){
//        const speedLimit = 70;
//        const camperPoint = 5;

//        if( speed < speedLimit + camperPoint) 
//             return "OK"
//         else{
//             const points = Math.floor((speed - speedLimit)/5)
//             if(points >= 12)
//             return "License suspended"
//             else
//                 return "points" , points
//         }
// }

// console.log(checkSpeed(70))
// console.log(checkSpeed(74))
// console.log(checkSpeed(75)) // point => 1
// console.log(checkSpeed(80)) // point => 2






// 39 practice  show Number


// answet with for loop    
// function shownumbet(number){
//     for(let i=0 ; i <= number ; i++){
//         if( i % 2 == 0){
//             console.log(i , "EVEN")
//         }else{
//             console.log(i , "ODD")
//         }
//     }
// }

// console.log(shownumbet(10))

// answer with while loop 
// let i = 0 ;
// let number = 10 ;
// while(i < number){
//     i++
//     if(i % 2 == 0){
//         console.log(i , '"EVEN"')
//     }else{
//         console.log(i , '"OOD"')
//     }

// }

// answer  mosh whit condition 
// let limit = 10;
// for(let i= 0 ; i <= limit ; i++){
//     const message = (i % 2 === 0 ) ? "EVEN" : "ODD"
//     console.log(i , message)
// }




// 40  exercise 

// falsy value :  undefined  null  ""  false  0 NaN

// let input = [0,1,2,3,4,null,undefined,"",false]
// let truthy_list =[]
// function countTruthy(x){
    
//     let count = 0;
//     for(let value of x)
//         if(value)
//         truthy_list.push(value)
//         count++
        
//     // console.log(truthy_list)
//     // return count
//     return truthy_list
// }
// console.log(countTruthy(input))








// 41 exrcise 
// const movie = {
//     title : "a",
//     releaseyear : 2018,
//     rating : 4.5,
//     director :"b"
// }


// function showProperties(obj){
//     for(let index in obj){
//         if(typeof(obj[index]) === "string")
//             console.log(index,obj[index])
//     } 
    
// }

// console.log(showProperties(movie))





//42 exercise :

// function sum(limit){
//     let sum =0;

//     for(let i=0 ;i<= limit ; i++){
//         if(i % 3 ===0 || i % 5 ===0)
//             sum +=i;  // ===> sum = sum + i
            
//     }
//     return sum;
// }

// console.log(sum())




//43 exercise 

// const marks = [50 , 100 , 90]

// function avrage_marks(input){
//     let sum_marks = 0;
//     for(let i of input){
//         sum_marks += i
//         avrage = sum_marks / input.length
//     }
//     console.log("sum number is :",sum_marks)
//     console.log("avrage sum number is : ",avrage)
    
//     if(avrage < 60)
//         return "finali result : F"
//     else if(avrage < 70)
//         return "finali result : D"
//     else if(avrage < 80)
//         return "finali result : C"
//     else if(avrage <90 )
//         return "finali result : B"
//     else if(avrage <100)
//         return "finali result : A"

// }

// console.log(avrage_marks(marks))






//44  exercise 

// function showstars(rows){
//     for(let row = 1; row <= rows; row++){
//         let pattern = '';
//         for(let i =0; i < row ; i++ ){
//             pattern += "*"
//         }
//         console.log(pattern);
//     }
// }
// console.log(showstars(10))









// 45 exercise : این سوال رو نفهمیدم کلا      // فهمیدم 
// پیدا کردن اعداد اول یه بازه از اعداد 

// function showPrimes(limit){
//     for(let number = 2 ; number <= limit ; number++){
//         let isPrime = true;
//         for(let factor = 2; factor < number ; factor++){
//             if(number % factor ===0){
//                 isPrime = false;
//                 break;
//             }
//         }
//      if(isPrime) console.log(number)
     
//     }
// }

// console.log(showPrimes(10))



//  حل کردن این مسله با دو تا راه حل ( راه دورم درست کردن دو تا فانکشن و تقسیم کار هستش )

// function showPrimes(limit){
//     for(let number = 2 ; number <= limit ; number++){
//         if(isPrime(number)) console.log(number);
         
                
// }

// }

// function isPrime(number){
//     for(let factor = 2; factor < number ; factor++)
//         if(number % factor ===0)
//             return false;
            
//     return true;    
// }

// console.log(showPrimes(20))

