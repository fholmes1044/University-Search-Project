
const getSubmitButton = document.getElementById("submit");
getSubmitButton.addEventListener("mouseover", submitMouse)
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

const getAllButtons = document.querySelectorAll("button")
console.log("butt", getAllButtons)
Array.from(getAllButtons).forEach(button => {
button.addEventListener("mouseover", mouseover)})

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}


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

let p2 = document.createElement("p")
div2.appendChild(p2).innerHTML = `Website : ${web_pages}`

let p3 = document.createElement("p")
p3.id = "like"
div2.appendChild(p3).innerHTML = 0 

let buttons = document.createElement("button");
buttons.classList = "url-buttons"
div2.appendChild(buttons).innerText = "Go to University Website";

let getButtons = document.getElementsByClassName("url-buttons")

Array.from(getButtons).forEach(button => {
    button.onclick = function (){
      location.href = web_pages, 
      button.target="_blank";
    }
   
  })

let likebtn = document.createElement("button")
likebtn.id = "likebtn"
div2.appendChild(likebtn).innerText = "Like Button"
likebtn.classList = "like-buttons"

likebtn.addEventListener('click', function increment(){
  const getLikes = document.getElementById("like")
  let value = getLikes.innerHTML

  ++value
  document.getElementById('like').innerHTML = value
  console.log("value", value)

})
  
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
function submitMouse(){
getSubmitButton.style.cursor = "pointer"
}

function mouseover(){
  Array.from(getAllButtons).forEach(button => {
  button.style.cursor = "pointer"})

}

// function increment(event){
//   console.log(event.target.innerText)
//   let count = parseInt(event.target.innerText) + 1;
//   console.log("count", count)

  // fetch(`http://localhost:8000/universities/${event.target}`,{
  //   method:"PATCH",
  //   headers:{
  //     "Content-Type": "application/json",
  //     "Accept" : "application/json"
  //   },
  //   body:JSON.stringify({
  //     likes:count,
  //   })
  // })
  // .then((response) => response.json())
  // .then((json) => console.log(json));
//}
