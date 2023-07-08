// Select all elements

const inputField= document.querySelector("#inputField")
const saveBtn = document.querySelector("#save-btn")
let list =[]
const dataListEl= document.querySelector("#saved-entries")
const profileLink =document.querySelector("#profile-link")
const deleteData =document.querySelector("#delete-data")

// Check for any stored Data in localStorage during Reload 
if(localStorage.getItem("key1")!==null){
    list= JSON.parse(localStorage.getItem("key1"))
    let newRederList= ""

    for(let i=0;i<list.length;i++){
    newRederList+=`<li><a href="${list[i]}">${list[i]}</a></li>`
}
    dataListEl.innerHTML=newRederList
}

// Basic method

// Sava Entry Button
saveBtn.addEventListener("click", ()=>{
    renderList(inputField.value)
})


// Current Tab Link getter button
profileLink.addEventListener("click",()=>{
    const brLink = window.location.href
    renderList(brLink)
})

// Delete all entries from localStorage and DOM
deleteData.addEventListener("click", ()=>{
    localStorage.clear()
    while(dataListEl.firstChild){
        dataListEl.removeChild(dataListEl.firstChild)
    }
})


// Render List Function
function renderList(data){
    const listItem = document.createElement('li')
    listItem.innerHTML= `<a href="${data}">${data}</a>`
    dataListEl.appendChild(listItem)
    list.push(data)
    localStorage.setItem("key1",JSON.stringify(list))
    inputField.value=""
}


// Event Bubbling Method

// document.querySelector(".buttons").addEventListener("click", e=>{
//     if(e.target.id === "save-btn"){
//         renderList(inputField.value)
//     }
//     else if(e.target.id === "profile-link"){
//         const brLink = window.location.href
//         renderList(brLink)
//     }
// })

