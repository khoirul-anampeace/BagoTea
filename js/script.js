/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scrolltop');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)