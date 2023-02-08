// // async await : 
// const main = document.querySelector("#main");

// const url = "https://jsonplaceholder.typicode.com/comments/";

// const getData = async (url) => {
//     const data = await fetch(url)
//     .then(response => response.json())
//     .then(json => showData(json))
//     return data
// }


// getData(url)


// function showData (data){
//     for(let i of data){
//         const pTag = document.createElement("p");
//         pTag.innerHTML = `${i.name}`
//         main.appendChild(pTag)
//     }
// }

// showData(data)


//.......................................................................


// # promise 

// const url = "https://jsonplaceholder.typicode.com/comments/";


// const url2 = "https://jsonplaceholder.typicode.com/comments/";



// const url3 = "https://jsonplaceholder.typicode.com/comments/";



// const getToDo = (url) => {
//     return new Promise((resolve , reject) => {
        
//         const request = new XMLHttpRequest ();
//         request.open("GET" , url);
//         request.send()

//         request.onload = function () { 
//             const data = JSON.parse(request.responseText);
//             if(request.status === 200){
//                 resolve(data)
//             }else(
//                 reject(err)
//             )
//          }
        
//     })
// }

// getToDo(url)
// .then((resolve) => {
//     console.log(resolve)
//     return getToDo(url2)
// }).then((resolve) => {
//     console.log(resolve)
//     return getToDo(url3)
// }).then((resolve) => {
//     console.log(resolve)
// })
// .catch((err) => console.log(err))




//......................................................................

// # fetch Api 

// const [state , setState] = useState([]);

// const fetchData = ()=> {
//            fetch(url)
//            .then(res => res.json())
//            .then(json  => setState(json))
// }


// useEffect(() => {
//      fetchData()
// } , []) 



const url = "https://reqres.in/api/users"


// const dataRequest = (url) =>{
//     fetch(url)
//     .then(res => res.json())
//     .then(json => console.log(json.data))
// }

// dataRequest(url)

// const request = new XMLHttpRequest();

// request.open("GET" , url);
// request.send()
// request.onload = () => {
//     console.log(typeof request.responseText)  // string
//     const result = JSON.parse(request.responseText)
//     console.log(typeof result) // object
//     if(request.status === 200){
//         console.log(result)
//     }else{
//         console.log("not fount...")
//     }
// }
// به عنوان متد دوم یه ابجکت میتونیم بهش بدیم که توش با مدت 
// post 
// یه دیتایی رو داخل 
// api 
// دخیره کنیم 


// الان شد فقط فرستادن دیتا ها با متد 
// post 


// fetch(url, {
//     method : "POST",
//     headers : {
//         "Content-Type" : "application/json"
//     },
//     body : JSON.stringify({
//         name : "hassan" ,
//         age : 21
//     })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


// .........................................

// # callback()

// درواقع برای سینک کردن اون قسمت از کد به کار میره که داره به صورت اسینک اجرا میشه 

// const ball_1 = (ball_2) => {
//     setTimeout(() => {
//         console.log(1)
//     } , 2000)
//     ball_2(ball_3)
// }


// const ball_2 = (ball_3) => {
//     setTimeout(() => {
//         console.log(2)
//     } ,3000)
//     ball_3()
// }


// const ball_3 = () => {
//     setTimeout(() => {
//         console.log(3)
//     } , 1000)
// }

// ball_1()

// function ball1(ball2){
//     setTimeout(() => {
//         console.log(1)
//     }, 2000)

//     ball2(ball3)
    
//     }
    
    
//     function ball2(ball3){
//     setTimeout(() => {
//         console.log(2)
//     }, 2000)
//     ball3()
    
//     }
    
    
//     function ball3(){
//     setTimeout(() => {
//         console.log(3)
//     }, 2000)
    
    
//     }
    
    
//     ball1(ball2)
//     ball2(ball3)
//     ball3()

//.........................................................

// # Dom : 

// const mouseMove = document.getElementById("main");

// mouseMove.style.width = "200px";
// mouseMove.style.height= "200px"

// document.body.addEventListener("mousemove" , function(e){
//     mouseMove.innerHTML = `move X : ${e.offsetX}<br/> move Y : ${e.offsetY}`
// })


// # localStorage : 

// localStorage.clear()

// const name = localStorage.setItem("name" , "ali")
// const arr = ["ali" , "hassan" , "mohammad" , 21];
// const obj = {name : "ali" , age : 21};

// localStorage.setItem("array" , arr);
// const myArray = localStorage.getItem("array").split(",")
// console.log(myArray)

// localStorage.setItem("object" , JSON.stringify(obj))
// const myObject = JSON.parse(localStorage.getItem("object"))
// console.log(myObject)


// localStorage.clear()



