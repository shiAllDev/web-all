var curPicViewNode,
    picViewScale = 1;
var pv_isDragging = false;
var pv_initialX;
var pv_initialY;
var pv_offsetX = 0;
var pv_offsetY = 0;
var pv_currentX;
var pv_currentY;
const picViewImage = document.querySelector('#pic-view-modal .pic-view-wrap .pic-wrap img'),
    picViewContainer = document.querySelector('#pic-view-modal .modal-content .pic-wrap'),
    picViewIncrement = 0.1;

(function () {
    document.querySelector('#pic-view-modal .pre-pic-btn').addEventListener('click', function () {
        if (curPicViewNode.previousElementSibling) {
            resetPicViewModal()
            curPicViewNode = curPicViewNode.previousElementSibling;
            let picsrc = curPicViewNode.querySelector('img').getAttribute('src');
            document.querySelector('#pic-view-modal [data-name=zoom]').innerHTML = '100%';
            document.querySelector('#pic-view-modal .pic-wrap img').setAttribute('src', picsrc);
        } else {
            alert("don't have sibling node!")
        }
    })
    document.querySelector('#pic-view-modal .next-pic-btn').addEventListener('click', function () {
        if (curPicViewNode.nextElementSibling) {
            resetPicViewModal()
            curPicViewNode = curPicViewNode.nextElementSibling;
            let picsrc = curPicViewNode.querySelector('img').getAttribute('src');
            document.querySelector('#pic-view-modal [data-name=zoom]').innerHTML = '100%';
            document.querySelector('#pic-view-modal .pic-wrap img').setAttribute('src', picsrc);
        } else {
            alert("don't have sibling node!")
        }
    })

    picViewContainer.addEventListener('wheel', function (event) {
        event = event || window.event;
        // 阻止页面滚动
        event.preventDefault();
        var delta = event.deltaY || event.detail || event.wheelDelta;

        var mouseX = event.clientX - picViewContainer.left;
        var mouseY = event.clientY - picViewContainer.top;

        // 向上滚动，放大图片
        // 向下滚动，缩小图片
        picViewScale += picViewIncrement * (delta < 0 ? 1 : -1);

        if (picViewScale < 1) {
            picViewScale = 1
            return
        }

        // 设置图片的新大小
        picViewImage.style.transformOrigin = mouseX + "px " + mouseY + "px";
        picViewImage.style.transform = `translate(${pv_currentX}px, ${pv_currentY}px) scale(${picViewScale})`;
        document.querySelector('#pic-view-modal [data-name=zoom]').innerHTML = `${parseInt(picViewScale * 100)}%`

    })

    picViewImage.addEventListener('mousedown', function (event) {
        event.preventDefault();
        pv_isDragging = true;
        pv_initialX = event.clientX - pv_offsetX;
        pv_initialY = event.clientY - pv_offsetY;

        document.addEventListener('mousemove', drag);
        function drag(event) {
            event.preventDefault();
            if (pv_isDragging) {
                pv_currentX = event.clientX - pv_initialX;
                pv_currentY = event.clientY - pv_initialY;
                pv_offsetX = pv_currentX;
                pv_offsetY = pv_currentY;
                pic.style.transform = `translate(${pv_currentX}px, ${pv_currentY}px) scale(${picViewScale})`;
            }
        }

        function stopDrag(event) {
            event.preventDefault();
            pv_isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }
        document.addEventListener('mouseup', stopDrag);
    });
})()

function viewPic(e) {
    resetPicViewModal()
    let picsrc = e.querySelector("img").getAttribute("src");
    document.querySelector('#pic-view-modal [data-name=zoom]').innerHTML = '100%';
    document.querySelector('#pic-view-modal .pic-wrap img').setAttribute('src', picsrc);
    $('#pic-view-modal').modal('show');
    curPicViewNode = e;
}

function resetPicViewModal() {
    picViewImage.style.transform = `scale(1)`;
    document.querySelector('#pic-view-modal [data-name=zoom]').innerHTML = `100%`
    picViewScale = 1;
    pv_initialX = pv_initialY = 0;
    pv_currentX = pv_currentY = 0;
    pv_offsetX = pv_offsetY = 0;
}