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
