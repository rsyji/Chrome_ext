const inputField= document.querySelector("#inputField")
const saveBtn = document.querySelector("#save-btn")
const list =[]
const dataListEl= document.querySelector("#saved-entries")
const profileLink =document.querySelector("#profile-link")

// Basic method
saveBtn.addEventListener("click", ()=>{
    renderList(inputField.value)
    
})

profileLink.addEventListener("click",()=>{
    const brLink = window.location.href
    renderList(brLink)
})

function renderList(data){
    const listItem = document.createElement('li')
    listItem.innerHTML= `<a href="${data}">${data}`
    dataListEl.appendChild(listItem)
    inputField.value=""
}


// Event Bubbling Method

// document.querySelector(".buttons").addEventListener("click", e=>{
//     if(e.target.id === "save-btn"){
//         renderList(inputField.value)
//     }
//     else{
//         const brLink = window.location.href
//         renderList(brLink)
//     }
// })