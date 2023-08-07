let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");
// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll("div nav div a");


function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

// nav bg color change

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

window.addEventListener("scroll", change);
// window.onscroll = () => {
//   sections.forEach(sec =>{
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if(top >=  offset && top < offset + height){
//       navlinks.forEach(links => {
//         links.classList.remove("active");
//         document.querySelector ("div nav div a [href*=" + id + "]").classList.add("active");

//       });

//     };

//   });
// }