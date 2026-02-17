//select open-popupbox, overlay, popupbox

var openpopupbox = document.querySelector(".open-popupbox")
var overlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popupbox")

openpopupbox.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

//select cancelpopup, 

var cancelpopup = document.getElementById("cancelpopup")


cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"

})

//select container, addbook, book-title-input, book-author-input, book-description

var container = document.querySelector(".container")
var addbook =document.getElementById("addbook")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")
var deletebutton = document.getElementById("deletebutton")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="del(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})
 function del(event)
 {
    event.target.parentElement.remove()
 }
 



