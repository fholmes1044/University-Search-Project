const getSubmitButton = document.getElementById("submit")
const getForm = document.getElementById("search-form")
const formInput = document.getElementById('input')
const displayDiv = document.getElementById("colleges-list")
const makeUl = document.createElement("ul")
const makeLi= document.createElement("li")
console.log("submit", getSubmitButton)

function findValues(event){
    event.preventDefault();
    const value = input.value
    console.log(value)

    fetch(`http://universities.hipolabs.com/search?name=${value}`)
.then((resp) => resp.json())
.then((resp) => {
    console.log("response",resp)
    // let div2 = document.createElement("div")
    // getForm.appendChild(div2)
    resp.forEach(element =>{
        let p1 = document.createElement("p")
        p1.innerText = element.name;
        displayDiv.appendChild(p1)
    })
    //addResult(resp)
    //resp.forEach((item) => addResult(item))
    
})
}
getForm.addEventListener('submit', findValues)

