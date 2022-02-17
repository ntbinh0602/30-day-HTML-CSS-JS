var showModal = document.querySelector('.show__modal-btn');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal__footer button');
var iconClose = document.querySelector('.modal__header i');

function toggleModal(){
    modal.classList.toggle('hide');
}

showModal.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
iconClose.addEventListener('click',toggleModal);

modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
});