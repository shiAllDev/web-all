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

})();

/******* 
 * 向container中写入分页标签
 * @param {string} cntrSlt 写入的容器的选择器
 * @param {string} baseurl 基础URL
 * @param {int} count 总个数
 * @param {int} limit 每页个数
 * @param {int} page 指定页数
 * @param {int} showSize 显示标签个数
 */
function setPagination(cntrSlt, baseurl, count, limit, page, showSize) {
    limit = limit || 10;
    limit = limit == 0 ? 10 : limit;
    pageSize = Math.round(count / limit + 0.4999);
    page = page || 1;
    showSize = showSize || Math.min(10, pageSize);
    let preActive = page == 1 ? "disabled" : "",
        postActive = page == pageSize ? "disabled" : "",
        pageBegin = Math.max(page - parseInt(showSize / 2), 1),
        pageEnd = Math.min(pageBegin + showSize - 1, pageSize),
        pageHtml = '',
        getPageItem = (baseurl, page, pagestr, acitve) => {
            acitve = acitve || "";
            pagestr = pagestr || page;
            return `<li class="page-item ${acitve}"><a class="page-link" href="${baseurl}&page=${page}">${pagestr}</a></li>`
        };
    pageHtml += getPageItem(baseurl, page - 1, "&laquo;", preActive);
    for (; pageBegin <= pageEnd; pageBegin++) {
        pageHtml += getPageItem(baseurl, pageBegin, pageBegin, page == pageBegin ? "active" : "")
    }
    pageHtml += `<li class="page-item page-jump-wrap"><input type="text"><button onclick="pageJump('${baseurl}', this)">${pageSize}</button></li>`
    pageHtml += getPageItem(baseurl, page + 1, "&raquo;", postActive);
    document.querySelector(cntrSlt).innerHTML = pageHtml;
}

/******* 
 * @param {string} baseurl
 * @param {DOM} e
 */
function pageJump(baseurl, e) {
    if (e.previousSibling.value == "" || e.previousSibling.value == undefined) {
        e.previousSibling.select();
        return
    }
    let page = parseInt(e.previousSibling.value),
        maxpage = parseInt(e.textContent);
    page = Math.max(Math.min(page, maxpage), 1);
    e.previousSibling.value = page;
    window.location.href = baseurl + '&page=' + page;
}