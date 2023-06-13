# MY WEB

## 网页设计

### 侧边悬停按钮 side-btn

-   side-btn-wrap
    -   属性`drag="true"`设置可拖拽
    -   btn-list-wrap
        -   btn-item
        -   btn-sub-wrap
            设置按钮附加内容
        -   btn-sub-wrap
            btn-list-wrap 设置按钮附加列表

### 视频自适应列表 fluid-video-list

-   video-list-wrap
    `box-shadow="bshadow"`设置阴影
    -   wrap-header
        -   wrap-title
    -   video-list
        -   video-item
            -   video-cover-wrap
                -   img.video-cover
                -   video-bubble-info
                    -   bubble-item
                        `.to-right` 固定在最右边
            -   video-info-wrap
                -   `a.video-title`
                -   video-detail
                    -   detail-item
                    -   video-tag-list
                        -   `a.tag-item`

### 侧边次级导航栏 side-nav

-   side-nav-wrap
    -   side-nav-list
        -   a.nav-item
    -   toggle-side-nav-icon-btn
        控制 icon 文本显示/隐藏
        为 side-nav-list 添加`.icon`
-   toggle-side-nav-btn
    控制 wrap 显示/隐藏
    为 side-nav-wrap 添加`.show`

### bootstrap+nav 主导航栏

-   导航栏 `top-navbar`
    -   网站图标
        `.navbar-brand`
    -   显示全部顶部导航栏
        `button#top-navbar-toggle`
        当屏幕宽度小于`640px`时只显示网站图标
    -   导航按钮列表
        `.navbar-nav-wrap`
        -   二级导航`.dropdown-nav-list`
            父元素`.nav-item`添加`.sub-nav-wrap`
    -   鼠标滚动导航栏显示/隐藏，导航栏添加`.scrollhide`类
        -   鼠标向上滚动时，删除`.transparent`类
        -   鼠标向下滚动时，添加`.transparent`类
-   搜索框`.nav-search-form`
    -   输入框`.nav-search-input`
    -   搜索按钮`.nav-search-button`
    -   鼠标放入 form 中或输入框中含有内容时，展开搜索框，否则折叠搜索框

### item 操作按钮 kit-box

-   `.kit-box-wrap>.kit-item`
-   默认为相对定位，水平方向
-   垂直方向
    属性`vertical`
-   绝对定位
    `.pos-abs`
-   kit-item
    -   `.text-kit`文本按钮，宽度 auto
-   无边框阴影`.kit-box-wrap.no-shadow`

### bootstrap+modal 模态框

-   更改项
    -   modal-header
        -   更改内容：增加`.modal-control-wrap`项，包含多个按钮
        -   button 的 font-weight 为 100
        -   `padding: 0.5rem`
    -   modal-body
        -   `padding: 0`
        -   modal-content 的 border 修改为 box-shadow
    -   modal-dialog
        -   `margin: 0.5rem auto`
        -   `max-width: calc(100% - 1rem)`
        -   `max-height: calc(100vh - 1rem)`
        -   `min-height: calc(100% - 1rem)`
-   modal-fluid
    -   自适应 modal
    -   modal-dialog: `width: fit-content; max-width: calc(100% - 1rem)`
-   modal-fullscreen
    -   全屏 modal
    -   modal-dialog:
        -   `width: 100%; max-width: calc(100% - 1rem)`
        -   modal-content: `height: 100%`
    -   通过按钮`button.mdbtn-toggle-fullscreen`来进行控制
        为祖先元素类`.modal`添加`.modal-fullscreen`

### bootstrap+form+tag

-   form 样式
    -   修改 input、label 等的 font-size、padding 和 margin
    -   删除.btn 的 font-size
    -   删除.form-control focus 情况下的 box-shadow
-   video-info-wrap
    -   video-info-form
        -   视频相关信息，并集成 tag 列表
    -   video-cover-manage-wrap
        -   video-cover-wrap
        -   上传本地视频封面
        -   通过爬虫或者网络图片地址进行下载图片等相关信息
    -   tag 标签操作
-   tag 标签操作
    -   tag-input-wrap
        -   tag-list#tg-input-{tag name}
            -   tag-item
                -   span(tag title)
                -   .rm-tag
                    -   onclick=unselectTag(this) 取消选择
                    -   data-aim=#tg-list-{tag name}
                    -   data-name={tag name}
    -   tag-list-wrap
        -   tag-list-header
            -   list-title(onclic=toggleAncestorClass(this, 'fold', 2))
            -   tag-filter-wrap
                -   input
                    根据输入进行删除
                -   button
                    进行添加 tag
                    -   onclick=addTag(tag_name)
        -   tag-list
            -   同时含有.show-add 为 tag-item 添加含+伪类
            -   tag-item
                -   onclick=selectTag(this)
                -   data-aim=#tg-input-{tag name}
                -   data-name={tag name}
                -   select=true 不可以进行添加操作
        -   .fold 类，存在则进行折叠，只显示 header
    -   select/unselect tag
        选择或不选择标签，将会将标签添加/删除于 tg-input-tag_name 中，tg-list-tag_name 将会激活/禁用 tag

### video player modal

-   video-play-wrap
    最外层容器
-   play video
    `.play-video-wrap`
    -   `video#video-player.video-vjs.vjs-big-play-centered`
        视频播放
    -   `.video-timenode-wrap.hide-wrap.pos-right`
        视频播放时间节点，隐藏于右边
        -   `.wrap-toggle-btn`
            通过鼠标移入该按钮，进行显示该列表
        -   `.timdenode-list`
        -   `.timdenode-item>.video-cover-wrap>img.video-cover+.timenode`
-   `.operate-video-wrap>.kit-box-wrap`
    视频操作按钮组容器
    -   commet 评价
        显示评价弹窗
    -   snapshot 截图
    -   time marker 时间结点
    -   fullscreen 全屏
-   `.related-video-wrap`
    `.video-list-wrap.hide-wrap.pos-bottom`

    -   `.wrap-toggle-btn`
        鼠标移动入该按钮，则显示该列表
    -   `.video-list`
        `.horizon-scroll`如果当前屏幕宽度小于 960px，该列表将水平滚动
        -   `.video-item`常规视频项

-   `.screenshot-wrap#video-scshot-wrap`
    -   `.kit-box-wrap`
    -   `.screenshot-item`
        -   `.kit-box-wrap`
            -   删除按钮
            -   下载到本地按钮
        -   `.video-cover-wrap>img`
-   `.comment-video-wrap`
    视频评价

### bootstrap+pagination 分页

-   分页按钮
    `.pagination>.page-item>a.page-link`
-   pagination 生成函数
    -   setPagination

### 爬虫界面框

-   框架
    -   `.flex-wrap`
        -   `.wrap-header`
            -   `.wrap-title`
            -   `.control-btn-wrap` e.g.
        -   `.wrap-content`
-   数据框`.data-overview-wrap`
    -   `.filter-wrap`
    -   `.data-list-wrap`
    -   `.pagination-wrap#pagination-wrap`
-   控制面板`.control-panel-wrap`
    -   `.wrap-header > .progress` 进度条，不显示百分比
    -   `.ctrl-form`
        -   `.ctrl-item.form-group`
            -   `.ctrl-item-title` 控制条目标题
            -   `.ctrl-item-content` 控制条目内容
-   消息框`.msg-wrap`
    -   `.msg-list`
        -   `.msg-item`
            -   `.msg-time`
            -   `.msg-content`
    -   msg-item 类型类
        -   默认无
        -   msg-info
        -   msg-danger
        -   msg-warn
        -   msg-success
-   结果框
    -   结果列表框
    -   实时动态列表框

### 记录界面

-   `# .record-edit-modal`
    -   `.modal-header`
        -   `.modal-control-wrap`
    -   `.modal-body`
        -   `.record-editor-wrap`
            -   `.editor-control`
            -   `.record-form-wrap`
            -   `.editor-wrap>#record-editor`
                使用的是开源组件 editor.md
-   `.drawer-record-wrap`
    -   `.record-list-wrap`
        -   `.wrap-header>.wrap-title`
        -   `.wrap-content.record-list`
            -   `.record-item`
                -   `.item-header`
                    -   `.item-title onclick="viewRecord(record_id)"`
                    -   `.kit-box-wrap`
                        -   编辑 `onclick="editRecord(record_id)"`
                        -   删除
                -   `.item-description`
                -   `.item-pubtime`
                -   `.item-tag-list>.tag-item`
    -   `# .record-view-wrap`
        如果屏幕宽度小于 720px，将会以绝对定位隐藏
        -   `.wrap-header>.kit-box-wrap`
            -   复制
            -   编辑
            -   隐藏，这是在屏幕宽度小于 720px 的情况下才会显示
        -   `.wrap-content`
            通过 editor.md 将 markdown 文本转换为 html 文本
    -   `.record-control-wrap`
        -   `.add-record-btn`
            edit modal toggle 按钮

### 图片展示界面

-   展示界面`#pic-view-modal`
    -   `.pic-view-wrap`
        -   `.kit-box-wrap`
            -   `.kit-item onclick="resetPicViewModal()"`
        -   `.pic-zoom[data-name=zoom]`展示缩放比例
        -   `.pre-pic-btn`
        -   `next-pic-btn`
        -   `.pic-wrap>img`
-   前/后同伴图片
    -   主要展示格式为`.pic-item[onclick=viewPic(this)]>img`的图片列表
-   放大/缩小/拖动
    -   鼠标滚动时进行图片缩放，最小缩放大小为原样
    -   鼠标可以对图片进行拖拽
