var images = document.querySelectorAll('.image img')
var previous = document.querySelector('.left')
var next = document.querySelector('.right')
var close = document.querySelector('.btn-close')
var galleryImg = document.querySelector('.gallery-inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery() {
    if(currentIndex == 0){
        previous.classList.add('hide')
    }else{
        previous.classList.remove('hide')
    }

    if(currentIndex == images.length - 1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }

    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index)=>{
    item.addEventListener('click',function(){
        currentIndex = index;
        showGallery()
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')  
    }
})

previous.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery();
    }
})

next.addEventListener('click',function(){
    if(currentIndex < images.length - 1){
        currentIndex++
        showGallery();
    }
})
