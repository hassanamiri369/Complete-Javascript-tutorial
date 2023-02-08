const url = "https://jsonplaceholder.typicode.com/comments" ;
const div_main = document.getElementById("div-main");

const request = new XMLHttpRequest();

request.open("GET" , url);
request.send()
request.onload = function (){
	const data = JSON.parse(request.responseText)
	console.log(data)
	if(request.status === 200){
		for(let i of data){
			const createID = document.createElement("h3");
			const createName = document.createElement("h4");
			const creatEmail = document.createElement("h4")
			const creatBody = document.createElement("h5")
			const creatHr = document.createElement("hr")


			createID.innerHTML = `id :  ${i.id}`
			createName.innerHTML = `name :  ${i.name}`
			creatEmail.innerHTML = `email :${i.email}`
			creatBody.innerHTML = `title : ${i.body}`


			div_main.appendChild(createID)
			div_main.appendChild(createName)	
			div_main.appendChild(creatEmail)
			div_main.appendChild(creatBody)
			div_main.appendChild(creatHr)

			////////////////////////////////////////////////
			// div_main.innerHTML = `
			// <h3>id : ${i.id}</h3>
			// <h4>name : ${i.name}</h4>
			// <h4>email : ${i.email}</h4>
			// <h5>title : ${i.body}</h5>
			// `
		}
	}else{
		console.log("not found ...")
	}
}




// fetch(‘https://rickandmortyapi.com/api/character/’)
//    .then(response => response.json())
//    .then(characters => showCharacters(characters.results));