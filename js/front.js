window.addEventListener('scroll', function (){
    let fixed = document.querySelector('.header');
    
    fixed.classList.toggle('fixed', window.scrollY > 50);
})

function openTab(tabName, elem, color){
// Hamma class = "tabcontent" larni yashirish
 let tabcontent, tablinks;
tabcontent = document.querySelectorAll('.tabcontent')
 for(let i = 0; i < tabcontent.length; i++){
     tabcontent[i].style.display = 'none';
 }

 tablinks = document.querySelectorAll('.tablink');
 for(let i = 0; i < tablinks.length; i++){
     tablinks[i].style.backgroundColor = "";
 }

 document.getElementById(tabName).style.display = 'block';

 elem.style.backgroundColor = color;
}

document.getElementById('open').click();


// ========= textarea change ========
document.getElementById("textarea").addEventListener("keypress", colors);

function colors() {
  var x = document.getElementById("textarea");
  var word = document.getElementById("textarea").value;
  x.style.color = "red";
  x.style.fontWeight = "600";
  
}


//  burger
const nav = document.querySelector(".nav-link");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
   nav.classList.toggle("nav-open");
   burger.classList.toggle("toggle");
});

links.forEach(link =>{
    link.addEventListener('click', () =>{
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    });
});