const modalOverlay =  document.querySelector('.modal-overlay');

const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    }); 
}

const modelClose = document.querySelector('.modal-close');
    modelClose.addEventListener("click", function() {
        modalOverlay.classList.remove('active')
})


