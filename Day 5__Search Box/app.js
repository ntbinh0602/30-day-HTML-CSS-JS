var btnSearch = document.querySelector('.search-box_button')

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})