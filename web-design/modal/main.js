// window load函数入口
(function () {
    // toggle modal
    $('.mdbtn-toggle-fullscreen').on('click', function() {
        $(this).toggleClass('fa-window-maximize')
        $(this).toggleClass('fa-window-restore')
        $(this).closest(".modal").toggleClass("modal-fullscreen");
    })
})();