// window load函数入口
(function () {
    document.querySelector('#top-navbar-toggle').addEventListener('click', () => {
        document.querySelector('.top-navbar').classList.toggle('show')
    })

    for (let elem of document.querySelectorAll('.side-nav-list .nav-item')) {
        elem.addEventListener('click', function () {
            document.querySelector('.side-nav-list .nav-item.active').classList.remove('active');
            elem.classList.add('active')
        })
    }
    document.querySelector('#toggle-side-nav-btn').addEventListener('click', function () {
        document.querySelector('.side-nav-wrap').classList.toggle('show');
        document.querySelector(".side-nav-wrap").classList.remove('transparent');
        (this).classList.toggle('fa-reorder');
        (this).classList.toggle('fa-close');
    });
})();