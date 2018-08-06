/*
    - Pegar o primeiro elemento com a class item; => (OK)

    - Ouvir o evento de click no elemento que acabamos de pegar,
    quando o usário clicar nós queremos ver um texto no console
    do browser (navegador) => (OK)

    - Trocar o console.log por o comportamento de adiconar a class
    "-active" no elemento que sofreu o evento de clique => (OK)

    - Pegar todos os elementos que tem a class "item" e que está dentro do
    elememto que tem a class "navigation-component"

    - Adicionar a class "-active" em qualquer elemento que tenho a class "item",
    no momento que o elemento for clicado
*/

const $navigationComponent = document.querySelector('.navigation-component')
const $items = document.querySelectorAll('.navigation-component .item')
let $itemActive = document.querySelector('.navigation-component .item.-active')

$navigationComponent.addEventListener('click', function(event) {
    const $origin = event.target

    if($origin.classList.contains('action')) {
        const $item = $origin.parentNode

        event.preventDefault()

        $itemActive.classList.remove('-active')

        $item.classList.add('-active')
        $itemActive = $item
    }
})


// $items.forEach(function($item) {
//     $item.addEventListener('click', function(event) {
//         event.preventDefault()
    
//         $items.forEach(function($item) {
//             $item.classList.remove('-active')
//         })

//         this.classList.add('-active')
//     })
// })
