// Change header on scroll and add search input
function changeHeader() {

    let header = document.querySelector('header');
    let formHeader = document.querySelector('.form-scroll')
    
    if (document.documentElement.scrollTop > 100) {
        header.classList.add('header-scroll')
        formHeader.classList.add('form-scroll-show')
        
    } else if (document.documentElement.scrollTop < 100) {
        header.classList.remove('header-scroll')
        formHeader.classList.remove('form-scroll-show')
    }
}

export {changeHeader}