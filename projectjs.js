
const getSubmitButton = document.getElementById("submit");
const getForm = document.getElementById("search-form");
const formInput = document.getElementById("input");
const maindiv = document.getElementById("main")
const subscribeButton = document.createElement("button")
subscribeButton.id = "subscribe"
maindiv.appendChild(subscribeButton).innerHTML ="Subscribe for University Updates"
subscribeButton.addEventListener('click', subscribe, false)
const getComment = document.getElementById("post")
getComment.addEventListener("click", comments)
 
const darkLightButton = document.createElement("button")
darkLightButton.id = "dlb"
maindiv.appendChild(darkLightButton).innerHTML = "Dark Mode"
darkLightButton.addEventListener('click', darkLight)

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

let buttons = document.createElement("button");
buttons.classList = "url-buttons"
div2.appendChild(buttons).innerText = "Go to University Website";

let getButtons = document.getElementsByClassName("url-buttons")

Array.from(getButtons).forEach(button => {
  button.addEventListener('click', event => {
    //console.log("event", event);
    universitywebsite();
  })
})
} 


function universitywebsite(element){
  console.log("element")
  
  
}


function subscribe(){
 let email = prompt ("What is your email?"); 
 let thanks = alert ( "Thank you for subscribing!");
}

function comments(){
  let commentBoxValue= document.getElementById("comment-box").value;
 
    const li = document.createElement("li");
    const text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
}

function darkLight(){
  const css = document.getElementById("cssfile")
  document.getElementById("dlb")
  if(dlb.innerHTML === "Dark Mode") {
   css.setAttribute('href','darkmode.css' )
   dlb.innerHTML = "Light Mode"
  }
  else{css.setAttribute('href','project.css' )
  dlb.innerHTML = "Dark Mode"

  }
}