// window load函数入口
(function () {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

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

    for(let e of document.querySelectorAll('.tag-filter-wrap input')) {
        e.addEventListener('input', function() {
            let fltstr = this.value.trim().toUpperCase();
            let tags = this.parentNode.parentNode.parentNode.querySelectorAll('.tag-list .tag-item');
            if (fltstr == "" || fltstr == undefined) {
                for (let t of tags) {
                    t.classList.remove('hidden')
                }
            } else {
                for (let t of tags) {
                    if (t.textContent.toUpperCase().indexOf(fltstr) != -1) {
                        t.classList.remove('hidden')
                    } else {
                        t.classList.add('hidden')
                    }
                }
            }

        })
    }

})();

function getTagNode(value, name, title) {
    return `<div class="tag-item" data-value="${value}"><span>${title}</span><span class="rm-tag" onclick="unselectTag(this)" data-aim="#tg-list-tag" data-name="${name}">&times;</span></div>`
}

function unselectTag(e) {
    // get tag name, tag aim and tag value
    const name = e.getAttribute('data-name'),
        aim = e.getAttribute('data-aim'),
        value = e.parentNode.getAttribute('data-value');
    if (aim == undefined || aim == "" || value == undefined || value == "") {
        return;
    }
    e.parentNode.remove();
    document.querySelector(aim).querySelector(`.tag-item[data-value="${value}"]`).setAttribute('selected', 'false');
}

function selectTag(e) {
    if (!e || e.getAttribute('selected') == 'true') {
        return;
    }
    const name = e.getAttribute('data-name'),
        aim = e.getAttribute('data-aim'),
        title = e.querySelector('span').textContent,
        value = e.getAttribute('data-value');
    if (aim == undefined || aim == "" || value == undefined || value == "") {
        return;
    }
    document.querySelector(aim).innerHTML += getTagNode(value, name, title);
    e.setAttribute('selected', 'true');
}


/******* 
 * 为向上回溯深度为 depth 的祖先向 classList 中添加/删除 className 类
 * @param  e [DOM] 
 * @param  className [string] add className to parent classList 
 * @param  depth [int] the aim ancestor depth
 */
function toggleAncestorClass(e, className, depth) {
    let ancestor = e.parentNode;
    while (depth != undefined && depth >= 2) {
        ancestor = ancestor.parentNode;
        --depth;
    }
    ancestor.classList.toggle(className);
}

function addTag(name) {
    // tag name: name
    // tag title: title
}