const $navigationComponent = document.querySelector('.navigation-component')
const $items = document.querySelectorAll('.navigation-component .item')
let $itemActive = document.querySelector('.navigation-component .item.-active')
let $itemCarouselLightActive = document.querySelector('.carousel-light .item.-active')

$navigationComponent.addEventListener('click', function(event) {
    const $origin = event.target

    if($origin.classList.contains('action')) {
        const idItem = $origin.getAttribute('href')
        const $targetItemCarouselLight = document.querySelector(idItem)
        const $item = $origin.parentNode

        event.preventDefault()

        $itemActive.classList.remove('-active')
        $item.classList.add('-active')
        $itemActive = $item

        $itemCarouselLightActive.classList.remove('-active')
        $targetItemCarouselLight.classList.add('-active')
        $itemCarouselLightActive = $targetItemCarouselLight
    }
})