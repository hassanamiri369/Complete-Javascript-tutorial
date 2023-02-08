const inputText = document.querySelector("#add-book input");
const link = document.querySelector("button")


// اگر این دکمه ی باتن رو بزنیم این اطلاعات باید کجا ذخیره بشه ؟
// دو تا تگ اسپن که کانتتنتش مساوی یه با چیزی که داخل اینپوت نوشتیم 

const ul = document.querySelector("ul");
const spanDelete = `<span class="delete">remove</span>`;


const inputSearch = document.querySelector("#search-books input");






link.addEventListener("click" , function (e) { 
    const spanName = document.createElement("span");
    spanName.className = "name";
    spanName.textContent = inputText.value;
    spanName.style.paddingLeft = "20px"


    const div = document.createElement("div");
    div.appendChild(spanName);
    div.innerHTML += spanDelete;
    div.style.width = "100%"
    
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.marginBottom = "17px";
    div.style.borderLeft = "6px solid darkRed";
    div.style.padding = "8px";
    div.style.boxShadow = "0 0 5px gray";
    div.style.transition = "all 0.2s ease"
   

    ul.appendChild(div)

    
    // باید اسم های کتاب هارو بزاریم تو لوکال استوریج : 
    storeToLocalStorage(inputText.value)


    inputText.value = "";
    e.preventDefault()
 })



//  remove : 
// e.target : اون به هرکجا بچسبه اون تگ رو برمی گردونه دیگه 

ul.addEventListener("click" , function(e){
    if(e.target.className === "delete"){ // اون تگی که کلاس دیکلت داره 
        e.target.parentElement.remove() // الان حذف میشه اما چون داخل لوکال استوریج هست رفرش کنی دوباره برمیگرده 
        // پس باید بیاییم اون هارو از لوکال هم حذف کنیم 
        removeFromLocalStorage(e.target.parentElement.children[0].textContent)
    }
})

// hidden books :
const checkBox = document.querySelector('#hide input');
checkBox.addEventListener("change" , function (e) {
    if(checkBox.checked ===true){
        ul.style.display = "none"
    }else{
        ul.style.display = "block";
    }
  })


// input search : 

inputSearch.addEventListener("keyup" , function(e){
    for(let book of ul.children[0].children){
        if(book.firstElementChild.textContent.indexOf(inputSearch.value ) !== -1){
            book.style.display = "book"
        }else{
            book.style.display = "none"
        }
    }
})


  

// localStorage :
document.addEventListener("DOMContentLoaded" , function(e){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = localStorage.getItem("tasks").split(",");
    }


    

    for(let item of tasks){
        const spanName = document.createElement("span");
        spanName.className = "name";
        spanName.textContent = item;
        spanName.style.paddingLeft = "20px"

        const div = document.createElement("div");
        div.appendChild(spanName);
        div.innerHTML += spanDelete;
       
        div.style.width = "100%"
    
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.marginBottom = "17px";
    div.style.borderLeft = "6px solid darkRed";
    div.style.padding = "8px";
    div.style.boxShadow = "0 0 5px gray";
    div.style.transition = "all 0.2s ease"
    
        ul.appendChild(div)
    }
})



function storeToLocalStorage(task){
    // این میبینه که ایا داخل لوکال استوریج خالی هست یا نه 
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = localStorage.getItem("tasks").split(",");
    }
    tasks.push(task)
    localStorage.setItem("tasks" , tasks)  // الان فقط اضافه شد رفرش کنی میپره 
    // باید از اینوت : domContentLoaded
    /// استفاده کنی 

}

// task : اسم کتاب هستش 

function removeFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = localStorage.getItem("tasks").split(",");
    }

    for(let i=0 ; i<tasks.length ; i++){
        if(tasks[i] === task){
            tasks.splice(i , 1);
        }
    }

    if(tasks.length === 0){
        localStorage.clear()
    }else{
        localStorage.setItem("tasks" , tasks)
    }
    
}