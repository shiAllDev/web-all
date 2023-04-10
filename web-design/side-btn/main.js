class Draggable {
    constructor(elemDom) {
        this.elem = elemDom;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.elem.addEventListener("mousedown", this.onMouseDown);
    }

    onMouseDown(event) {
        event = event || window.event;
        this.offsetX = event.clientX - this.elem.offsetLeft;
        this.offsetY = event.clientY - this.elem.offsetTop;

        document.addEventListener("mousemove", this.onMouseMove);
        document.addEventListener("mouseup", this.onMouseUp);
    }

    onMouseMove(event) {
        // 将 event 转换为标准的 Event 对象或者 window.event
        event = event || window.event;

        // 计算元素的 left 和 top 值
        var left = event.clientX - this.offsetX;
        var top = event.clientY - this.offsetY;

        // 获取窗口的宽度和高度
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // 确保元素不会超出窗口边界
        left = Math.max(left, this.elem.offsetWidth)
        left = Math.min(left, windowWidth - this.elem.offsetWidth)
        top = Math.max(top, this.elem.offsetHeight)
        top = Math.min(top, windowHeight)

        this.elem.style.left = left + "px";
        this.elem.style.top = top + "px";
    }

    onMouseUp() {
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener("mouseup", this.onMouseUp);
    }
}


(function () {
    let elems = document.querySelectorAll('.side-btn-wrap');
    for (let elem of elems) {
        new Draggable(elem);
    }
})();




function DragElem1(idselect) {
    var dragElem = document.querySelector(`${idselect}`);

    dragElem.addEventListener('mousedown', function (event) {
        event = event || window.event;
        var offsetX = event.clientX - (this).offsetLeft;
        var offsetY = event.clientY - (this).offsetTop;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        let elem = (this);
        function onMouseMove(event) {
            event = event || window.event;
            var left = event.clientX - offsetX;
            var top = event.clientY - offsetY;
            elem.style.left = left + "px";
            elem.style.top = top + "px";
        }

        function onMouseUp(event) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    });
}
function DragElem2(idselect) {
    var dragElem = document.querySelector(`${idselect}`);
    dragElem.onmousedown = function (event) {
        event = event || window.event;
        const elem = (this);
        let ol = event.clientX - elem.offsetLeft;
        let ot = event.clientY - elem.offsetTop;

        document.onmousemove = function (event) {
            event = event || window.event;
            let left = event.clientX - ol;
            let top = event.clientY - ot;
            elem.style.left = left + "px";
            elem.style.top = top + "px";
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}
function DragElem3(idselect) {
    var dragElem = document.querySelector(`${idselect}`);
    dragElem.onmousedown = function (event) {

        let shiftX = event.clientX - dragElem.getBoundingClientRect().left;
        let shiftY = event.clientY - dragElem.getBoundingClientRect().top;

        moveAt(event.pageX, event.pageY);

        // 移动现在位于坐标 (pageX, pageY) 上的球
        // 将初始的偏移考虑在内
        function moveAt(pageX, pageY) {
            dragElem.style.left = pageX - shiftX + 'px';
            dragElem.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // 在 mousemove 事件上移动球
        document.addEventListener('mousemove', onMouseMove);

        // 放下球，并移除不需要的处理程序
        dragElem.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            dragElem.onmouseup = null;
        };
    }
}