/*******
 * 将秒数转换为00:00:00格式的时间
 * @param  {decimal} time
 * @return {string} 格式化后的时间
 */
function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

/*******
 * 在数字前补0，使得数字至少两位数
 * @param  {int} num
 */
function padZero(num) {
    return num.toString().padStart(2, '0');
}

/*******
 * 删除祖先元素，回溯depth为0，即删除自己
 * @param  {DOM} e 调用元素
 * @param  {int} depth 祖先深度，默认为0
 */
function removeAncestor(e, depth) {
    let parent = e;
    depth = depth || 0;
    while (depth > 0) {
        parent = parent.parentElement;
        depth--;
    }
    parent.parentNode.removeChild(parent);
}


/*******
 * toggle指定选择器的classList
 * @param  {string} aim idselector
 * @param  {array} classnames
 */
function toggleAimClass(aim, ...classnames) {
    for (let c of classnames) {
        document.querySelector(aim).classList.toggle(c)
    }
}

/*******
 * 为向上回溯深度为 depth 的祖先向 classList 中添加/删除 className 类
 * @param  {DOM} e
 * @param  {int} depth
 * @param  {array} classnames class列表以 空字符串 间隔，前面为祖先的，后面的为自身的
 */
function toggleAncestorClass(e, depth, ...classnames) {
    let anc = e.parentElement;
    while (depth > 1) {
        anc = anc.parentElement;
        --depth;
    }
    let selfToggle = false;
    for (let c of classnames) {
        if (c == '') {
            selfToggle = !selfToggle;
            continue
        }
        if (selfToggle) {
            e.classList.toggle(c);
        } else {
            anc.classList.toggle(c)
        }
    }
}