window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
toggle.onclick = function() {
    container.classList.toggle('dark');
};