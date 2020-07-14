const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const siteId = card.getAttribute('id')
        window.location.href = `https://www.rocketseat.com.br/${siteId}`
    })    
}
