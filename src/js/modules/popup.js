export function init(){

    // consultation

    const consultClose = document.querySelector('.popup-consultation-close')
    const consultOpen = document.querySelectorAll('.popup-consultation-open')
    const consult = document.querySelector('.popup-consultation')

    consultClose.addEventListener('click',() => {
        consult.style.display = 'none'
    })

    consultOpen?.forEach(el => {
        el.addEventListener('click',() => {
            consult.style.display = 'flex'
        })
    })

}