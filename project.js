
const getSubmitButton = document.getElementById("submit");
getSubmitButton.addEventListener("mouseover", submitMouse);

const getForm = document.getElementById("search-form");
const formInput = document.getElementById("input");

const maindiv = document.getElementById("main");

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
Array.from(getAllButtons).forEach(button => {
button.addEventListener("mouseover", mouseover)})

const favDiv = document.getElementById("favorites")
const favheading = document.createElement("h4")
favDiv.appendChild(favheading).innerText = "Favorite Schools"
const favUl = document.createElement('ul');
favDiv.appendChild(favUl)

getForm.addEventListener("submit", findValues);

const allSchools = []

function findValues(event) {
  event.preventDefault();
  const value = input.value;
  console.log(value);
  formInput.value = '';
  fetch(`http://universities.hipolabs.com/search?name=${value}`)
    .then((res) => res.json())
    .then((resp) => {
        allSchools.push(...resp)
        resp.forEach((response) => addResult(response));
     
    });
}

function addResult(item) {
  const { name, country, web_pages } = item;
  const getMainDiv = document.getElementById("main")
  const div2 = document.createElement("div")
  div2.id = "results"
  getMainDiv.appendChild(div2);
  
  let h3 = document.createElement("h3")
  div2.appendChild(h3).innerHTML = name;

  let p = document.createElement("p")
  div2.appendChild(p).innerHTML = `Country: ${country}`

  let p2 = document.createElement("p")
  div2.appendChild(p2).innerHTML = `Website : ${web_pages}`
  
  let button = document.createElement("button");
  button.classList = "url-buttons"
  div2.appendChild(button).innerText = "Go to University Website";
  button.addEventListener("click", () => {
      location.href = web_pages, 
      button.target="_blank"; 
})
  let favoritebutton = document.createElement("button")
  favoritebutton.className = "favorite"
  div2.appendChild(favoritebutton).innerHTML= "Add to Favorites"
  favoritebutton.addEventListener('click', favoriteSchools)
  }
   
const favoritesArray = [];

const favoriteSchools = (event) => {
  let schoolName = event.currentTarget.parentNode.firstChild.innerText;
  const selectedSchool = allSchools.find(s => s.name === schoolName)
  favoritesArray.push(selectedSchool.name)
  favUl.innerHTML = ''
  favoritesArray.forEach(favSchool => {
  const favLi = document.createElement('li')
  favLi.className = "favs"
  favUl.appendChild(favLi).innerHTML= favSchool
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
  commentBoxValue.value = ''
 
}

function darkLight(){
  const css = document.getElementById("cssfile")
  document.getElementById("dlb")
  if(dlb.innerHTML === "Dark Mode") {
   css.setAttribute('href','darkmode.css' )
   dlb.innerHTML = "Light Mode"
  }
  else{
  css.setAttribute('href','project.css')
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

