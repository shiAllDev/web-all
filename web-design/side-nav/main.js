// window load函数入口
(function () {
    for (let elem of document.querySelectorAll('.nav-item')) {
        elem.addEventListener('click', function () {
            document.querySelector('.nav-item.active').classList.remove('active');
            elem.classList.add('active')
        })
    }

    document.querySelector('#toggle-side-nav-icon-btn').addEventListener('click', function() {
        document.querySelector('.side-nav-wrap').classList.toggle('icon');
        (this).classList.toggle('fa-reorder');
        (this).classList.toggle('fa-close');
    })

    document.querySelector('#toggle-side-nav-btn').addEventListener('click', function () {
        // document.querySelector('.side-nav-wrap').classList.toggle('show');
        for (let elem of document.querySelectorAll('.side-nav-wrap')) {
            elem.classList.toggle('show');
        }
        (this).classList.toggle('fa-reorder');
        (this).classList.toggle('fa-close');
    });
})();