export function init(){

    // consultation

    const consultClose = document.querySelector('.consultation-close')
    const consultOpen = document.querySelectorAll('.popup-consultation-open')
    const consult = document.querySelector('.popup-consultation')
    const consultStop = document.querySelectorAll('.consult-propagation')

    consultStop?.forEach(el => {
        el.addEventListener('click', (event) => {
            event.stopPropagation();
        })
    })

    consultClose.addEventListener('click',() => {
        consult.style.display = 'none'
    })

    consultOpen?.forEach(el => {
        el.addEventListener('click',() => {
            consult.style.display = 'flex'
        })
    })

    // brochure

    const brochureClose = document.querySelector('.brochure-close')
    const brochureOpen = document.querySelectorAll('.popup-brochure-open')
    const brochure = document.querySelector('.popup-brochure')
    const brochureStop = document.querySelectorAll('.brochure-propagation')

    brochureStop?.forEach(el => {
        el.addEventListener('click', (event) => {
            event.stopPropagation();
        })
    })

    brochureClose.addEventListener('click',() => {
        brochure.style.display = 'none'
    })

    brochureOpen?.forEach(el => {
        el.addEventListener('click',() => {
            brochure.style.display = 'flex'
        })
    })

}