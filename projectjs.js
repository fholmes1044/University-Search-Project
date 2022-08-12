const getSubmitButton = document.getElementById("submit");
const getForm = document.getElementById("search-form");
const formInput = document.getElementById("input");
//const getMainDiv = document.getElementById("main")
//const div2 = document.createElement("div")
//div2.id = "results"
//getMainDiv.appendChild(div2);
// const makeUl = document.createElement("ul");
// div2.appendChild(makeUl);

// const div3 = document.createElement("div")
// div3.id = "button"
// getMainDiv.appendChild(div3)




console.log("submit", getSubmitButton);

function findValues(event) {
  event.preventDefault();
  const value = input.value;
  console.log(value);

  fetch(`http://universities.hipolabs.com/search?name=${value}`)
    .then((res) => res.json())
    .then((resp) => {
        console.log("response", resp)
      resp.forEach((response) =>addResult(response));
    });
}


 getForm.addEventListener("submit", findValues);

 function addResult(item) {
const { name, country, web_pages } = item;
const getMainDiv = document.getElementById("main")
const div2 = document.createElement("div")
div2.id = "results"
getMainDiv.appendChild(div2);
console.log("item", item.name)

let h2 = document.createElement("h2")
div2.appendChild(h2).innerHTML = name;

let p = document.createElement("p")
div2.appendChild(p).innerHTML = `Country: ${country}`

 }

//  function addResult(item) {
//    
//    console.log("item", item);

//    makeUl.appendChild(document.createElement("li")).innerHTML = item.name;

//    const makebutton = document.createElement("button");
//    makebutton.innerHTML = "Go to University Website";
//    div3.appendChild(makebutton);
//  }


