//1. Write a function `sum` that computes the sum of the numbers in an

// let my_list = [1,2,3,4,5];

// function sum_num(list){
//     let num = 0;
//     for(let i= 0 ; i < list.length ; i++){
//         num += list[i]
//     }
//     return num
// }

// console.log(sum_num(my_list))

// 2. Write a function `max` that accepts an array of numbers and returns the
//   *largest* number in the array.


// let my_list2 = [1,2,3,4,5,6,7,8,9,10,99,100,102];
//  // one solution : 
// function largets_num(list){
//     let largest = [];
//     for(let i=0; i < list.length ; i++){
//         largest = Math.max(list[i])
//     }
//     return largest
// }

// console.log(largets_num(my_list2))


// two solution : 
// let my_list2 = [1,2,3,4,5,6,7,8,9,10];



// function largets_num2(lists){
//     let num1  = 0;
//     for(let i=0 ; i < lists.length ; i++){
//         if(num1[i] > lists[i] ){
//             num1 = lists[i]
//         }
//     }return num1
    
// }

// console.log(largets_num2(my_list2))

// ............................................................

// const str = "The quick brown fox jumps over the lazy dog"

// const word = str.split(' ');
// console.log(word[3]); // fox
// console.log(word)  //['The',   'quick','brown', 'fox','jumps', 'over','the',   'lazy','dog']


// const chars = str.split('');
// // console.log(chars[3]);

// const strcopy = str.split();
// console.log(strcopy);

// .............................................................
// 3 : Use `split` to write a function `longestWord` that takes a string as an
//   argument and returns the longest word


// let sentens = "keep track of WORDS not of character";
// function LargestWord(str){
//     let maxValue = 0;
//     let longest = "";
//     let word = str.split(" ");
//     for(let i=0 ; i < word.length ; i++){
//         if(word[i].length > maxValue){
//             longest = word[i];
//             maxValue = longest.length
//         }
//     }console.log(`count longest word is :  ${maxValue}`)

//     return longest
// }

// console.log(LargestWord(sentens))

//................................................

// 4 : Write a function `remove` that accepts an *array* and an *element*, and
//   returns an array with all ocurrences of *element* removed.

// function remove_element(array , element){
//     let new_array= [];
//     for(let i=0 ; i < array.length ; i++){
//         if(array[i] !== element){
//             new_array.push(array[i])
//         }
//     }
//     return new_array
// }

// console.log(remove_element([1, 3, 6, 2, 3] , 3))

// ..........................................

// 5. Write a function `evens` that accepts an array as an argument, and returns
//   an array consisting of all of the *even* numbers in that array.

// let even_list = [];
// function evens(array){
    
//     for(let i=0 ; i < array.length ; i++){
//         if(array[i] % 2 == 0){
//             even_list.push(array[i])
//         }
//     }
//     return even_list
// }

// console.log(evens([1, 2, 3, 4, 5, 6, 7, 8]))

// 6 :  Write a function `evenLengthWords` that takes an array of *strings* as an
//   argument, and returns an array of just the words that have an even length.
// let list = "and returns an array of just the words that have an even length"

// let even_word = [];
// function evenLengthWords(str){
//     let arrey = str.split(' ')
//     let count_even_word = 0 ;
//     for(let i=0; i < arrey.length ; i++){
//         if(arrey[i].length % 2 == 0){
//             even_word.push(arrey[i])
//             count_even_word += 1
//         }
//     }
//     console.log(`count even word is : ${count_even_word}`)
//     return even_word
// }

// console.log(evenLengthWords(list))

// ...........................................................................................

// 7 : and use it to implement a function that accepts a string as an argument and
//   returns that string *reversed*.

//..................................................................................
// 5! = 5 * 4 * 3 * 2 * 1 

// function factorial(n) {
//   count = 0; 
//   total = 1; 
//   while (count < n) {
//     total = total + (total * count);
//     count++;
//     // console.log(count, total);  
//   } 
//   return total; 
// }

// console.log(factorial(5))

// ........................................................................................

//Your task is to implement the `repeatString` function using a `while` loop.

// function repeatString(str, count) {
//   if (typeof str === 'string' && typeof count === 'number') {
//     var finalString = '';
//     var counter = 0;
//     while (counter < count) {
//     finalString = finalString + str;
//       counter++;
//     }
//     return finalString;
//   } else {
//     console.log("Your inputs don't match the required types.");
//   }
// }

// console.log(repeatString('My string ', 5));

// function repide_str(str , count){
//     if(typeof(str) == "string" && typeof(count) == "number"){
//         let num = 0 ;
//         let my_str = '';
//         while( count > num ){
//             num++
//             my_str = my_str + " \n " +str 
//         }
//         return my_str 
//     }
    
// }

// console.log(repide_str("hello" , 5))

// ...................................................................


