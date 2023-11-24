
//import BS 5 js bundle
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/js/all.js";


// Import all of Bootstrap's CSS because of @import "bootstrap/scss/bootstrap"; in /sass/style.scss//
import "../sass/style.scss";


// togle on slider who are we to hide project cat
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('latest-projects-carousel');
    const carouselItems = carousel.querySelectorAll('.thumbnail2');

    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const caption = item.querySelector('.caption2');
            if (caption) {
                caption.style.transform = 'translateY(0)';
                caption.style.opacity = '1';
                caption.style.visibility = 'visible';
            }
        });

        item.addEventListener('mouseleave', () => {
            const caption = item.querySelector('.caption2');
            if (caption) {
                caption.style.transform = 'translateY(-100%)';
                caption.style.opacity = '0';
                caption.style.visibility = 'hidden';
            }
        });
    });
});


//gallery in prject-details page

var thumbnails = document.getElementById("thumbnails")
var imgs = thumbnails.getElementsByTagName("img")
var main = document.getElementById("main")
var counter=0;

for(let i=0;i<imgs.length;i++){
  let img=imgs[i]
  
  
  img.addEventListener("click",function(){
  main.src=this.src
})
  
}