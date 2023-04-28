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

-   默认为绝对定位，垂直方向
-   垂直方向
    属性`vertical:"true"`
-   kit-item

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

-   play video
-   related video
-   operate video
-   screenshoots

### bootstrap+pagination 分页

-   分页按钮
-   跳转按钮

### 爬虫界面框

-   控制面板
-   消息框
-   信息框
-   结果框
    -   结果列表框
    -   实时动态列表框

### 图片展示界面

-   前/后同伴图片
-   放大/缩小/拖动
