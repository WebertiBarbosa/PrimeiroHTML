const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const siteId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${siteId}`
    })    
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modalOverlay.querySelector('iframe').src = ""
})

const modal = document.querySelector('.modal')
document.querySelector('.maximize-modal').addEventListener('click', function(){
    if (modal.classList.contains('maximize') == false){
        modal.classList.add('maximize')
    } else {
        modal.classList.remove('maximize')
    }
})