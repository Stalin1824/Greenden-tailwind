//Section Side Navbar, MenuIcon
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var clear=document.getElementById("clear")
menuicon.addEventListener("click",()=>{
 
     sidenav.style.right="0";
})

clear.addEventListener("click",()=>{
 
     sidenav.style.right="-50%"
})



// Product Functionality
var container=document.getElementById("container")
console.log(container)
var h1list=container.querySelectorAll("div")
var search=document.getElementById("search")
search.addEventListener("keyup",()=>{
     let entervalue=event.target.value.toUpperCase()
     for(let i=0;i<h1list.length;i++){
              
        if(h1list[i].querySelector("h1").textContent.toUpperCase().includes(entervalue)==true){
                 h1list[i].style.display="block"

        }
        else{
          h1list[i].style.display="none"
        }

}})