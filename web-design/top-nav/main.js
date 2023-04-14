// window load函数入口
(function () {
    // 设置鼠标滚动隐藏内容，为 .scrollhide，添加/删除的类: .transparent
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        const elems = document.querySelectorAll('.scrollhide');
        if (prevScrollpos > currentScrollPos) {
            for (let elem of elems) {
                elem.classList.remove('transparent');
            }
        } else {
            for (let elem of elems) {
                elem.classList.add('transparent');
            }
        }
        prevScrollpos = currentScrollPos;
    }


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