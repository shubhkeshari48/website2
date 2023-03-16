burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
navlist=document.querySelector(".nav-list");
rightnav=document.querySelector(".right-nav");
yt=document.querySelector(".yt");
subs=document.querySelector(".subs");
submit=document.querySelector(".submit");


burger.addEventListener("click",()=>{
    navlist.classList.toggle("v-class");
    navbar.classList.toggle("h-nav");
    rightnav.classList.toggle("v-class")
}
)
yt.addEventListener("click",()=>{
    open("https://youtu.be/Bv1LOBm4nAA");
})
subs.addEventListener("click",()=>{
    open("https://youtu.be/n2qy_suA3vc");
})
submit.addEventListener("click",()=>{
    confirm("Are you sure?");
})
