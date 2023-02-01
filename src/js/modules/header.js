export function init() {

    // body paddingTop
    const header = document.querySelector('.header').offsetHeight + 25
    document.querySelector('.intro').style.marginTop = header+'px'

    // header btns
    const headerBtns = document.querySelectorAll('.header-btn')
    headerBtns.forEach(el => {
        el.addEventListener('click',() => {
            headerBtns.forEach(all => {
                all.classList.remove('active')
            })
            el.classList.add('active')
        })
    })
}