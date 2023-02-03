export function init() {

    // body paddingTop
    const headerHeight = document.querySelector('.header').offsetHeight
    document.querySelector('.intro').style.marginTop = headerHeight+25+'px'
    window.addEventListener(('resize'), () => {
        const headerHeight = document.querySelector('.header').offsetHeight
        document.querySelector('.intro').style.marginTop = headerHeight+25+'px'
    })

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


    let scrollBefore = 300;
    const header = document.querySelector('.header')
    window.addEventListener('scroll', (e) => {
        const scrolled = window.scrollY;
        if (scrolled > 300){
            if(scrollBefore > scrolled){
                if(header.classList.contains('hide')){
                    header.classList.remove('hide')
                }
                scrollBefore = scrolled;
            }else{
                scrollBefore = scrolled;
                if(!header.classList.contains('hide')){
                    header.classList.add('hide')
                }
            }
        }
    })
}