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

    // 对于.horizon-scroll改变鼠标滚动方向
    for (const e of document.querySelectorAll('.horizon-scroll')) {
        e.addEventListener('wheel', function (event) {
            event.preventDefault();
            this.scrollLeft += event.deltaY;
        });
    }
})();