const myArray = [
  "Ibu",
  "Wisdom",
  "Jimoh",
  "Oluwaseyi",
  "Betine",
  "Precious",
  "Bajulaye",
  "Micheal",
  "Oladejo",
  "Austine",
];


const ul = document.querySelector("ul")

window.addEventListener("load", ()=> {
    for(let i=0; i<myArray.length; i++){
        const li = document.createElement("li");
        li.innerText= myArray[i];
        ul.append(li)
    }
})

 const search = document.querySelector("#search")

  const filter = ()=>{
    const inputValue = search.value.toLowerCase();
    let result = myArray.filter((items)=> items.toLowerCase().includes(inputValue)) 
    ul.innerHTML = '';
    for(let i=0; i < result.length; i++){
        const li = document.createElement("li");
        li.innerText= result[i];
        ul.append(li)
    }
    
}

  search.addEventListener("input", filter)

