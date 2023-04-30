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


function addTag(name) {
    // tag name: name
    // tag title: title
}