const markdownOption = {
    htmlDecode: "style,script,iframe",  // you can filter tags decode
    emoji: false,
    taskList: false,
    tex: false,  // 默认不解析
    flowChart: false,  // 默认不解析
    sequenceDiagram: false,  // 默认不解析
    codeFold: true,
};

(function () {
    var mdEditorOption = {
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
    var editor = editormd("record-editor", mdEditorOption);
})();

function showRecordModal() {
    $('#record-edit-modal').modal('show')
}

function editRecord(rid) {
    $('#record-edit-modal').modal('show')

}

var lastViewRecord = {
    id: -1,
    record: {
        title: 'record title',
        description: 'description',
        pubtime: '2023-05-18 21:13',
        content: 
`## this is test record content title
this is test record content content.
[url](baidu.com)
`,
    }
};
function viewRecord(rid) {
    if (rid != lastViewRecord.id) {
        // do request
    }
    $('#record-viewer').html(`<textarea style="display:none;" name="content"></textarea>`);
    $('#record-view-modal [data-name=title]').text(lastViewRecord.record.title);
    $('#record-view-modal [data-name=description]').text(lastViewRecord.record.description);
    $('#record-view-modal [data-name=pubtime]').text(lastViewRecord.record.pubtime);

    editormd.markdownToHTML('record-viewer', {
        markdownOption,
        markdown: lastViewRecord.record.content,
    });

    $('#record-view-modal').modal('show')
}