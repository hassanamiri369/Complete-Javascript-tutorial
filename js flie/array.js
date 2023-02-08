// let myList = [1,2,[3,4,5,6,7],8,[5,6],[[[[[58,6]]]]], undefined , true]

// // این خیلی مهمه وقتی با لت داری تعریف میکنی  متغیر رو بیرون تغریق کنی
// //let name = null;



//     let array = []
//     function elementFinder(x){
//         for(let i=0 ; i < x.length ; i++){
//             (typeof x[i] !== "object") ? array.push(x[i]) : elementFinder(x[i])
//         }
            
//         return array
//     }

// console.log(elementFinder(myList))







// let myList = [1, 2, [3, 4, 5, 6, 7], 8, [5, 6], [[[[[58, 6]]]]], undefined, true]
// let array = []
// let newList = []
// const elementFinder = (list , result) => {
// for (let i = 0; i < list.length; i++) {
// typeof list[i] !== "object" ? result.push(list[i]) : elementFinder(list[i] , result)
// }
// return result
// }
// console.log(elementFinder(myList , newList))


