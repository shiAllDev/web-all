const markdownOption = {
    path: "../lib/editor.md/lib/",
    htmlDecode: "style,script,iframe",  // you can filter tags decode
    emoji: false,
    taskList: false,
    tex: false,  // 默认不解析
    flowChart: false,  // 默认不解析
    sequenceDiagram: false,  // 默认不解析
    codeFold: true,
}, mdEditorOption = {
    height: '100%',
    width: '100%',
    codeFold: true,
    toolbar: true,     // 关闭工具栏
    watch: true,       // 关闭实时预览
    path: "../lib/editor.md/lib/",
    toolbarIcons: function () {
        return ["undo", "redo", "|", "hr", "del", "ucwords", "uppercase", "lowercase", "|", "preview", "watch", "fullscreen", "|", "image", "table", "datetime", "html-entities", "pagebreak", "search"]
    },
    imageUpload: true,
    imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
    imageUploadURL: "imageUploadUrl",
};

(function () {
    var editor = editormd("record-editor", mdEditorOption);
})();

function editRecord(rid) {
    $('#record-edit-modal').modal('show')

}

var lastViewRecord = {
    id: -1,
    record: {
        title: `记录标题 record title ${new Date().toLocaleTimeString()} 加长片段`,
        description: 'description',
        pubtime: '2023-05-18 21:13',
        content:
            `这是内容开始的部分
this is test record content content.
这是内容。
这是零一行的内容~
[url of 百度](https://www.baidu.com)
`,
    }
};
function viewRecord(rid) {
    document.querySelector('.record-view-wrap').classList.add('show')
    if (rid != lastViewRecord.id && rid != -1) {
        // do request
        lastViewRecord.id = rid
    }
    $('#record-view-wrap .wrap-content').html(`<div class="record-title" data-name="title"></div>
<div class="record-detail-wrap">
    <div class="record-description"><i class="fa fa-question-circle-o">&ensp;</i><span data-name="description"></span></div>
    <div class="record-time"><i class="fa fa-clock-o">&ensp;</i><span data-name="pubtime"></span></div>
</div>
<div id="record-viewer">
    <textarea style="display:none;" name="content"></textarea>
</div>`)
    $('.record-view-wrap [data-name=title]').text(lastViewRecord.record.title);
    $('.record-view-wrap [data-name=description]').text(lastViewRecord.record.description);
    $('.record-view-wrap [data-name=pubtime]').text(lastViewRecord.record.pubtime);

    editormd.markdownToHTML('record-viewer', {
        markdownOption,
        markdown: lastViewRecord.record.content + new Date().toUTCString(),
    });
}