// window load函数入口
(function () {
    var options = {
        controls: true,
        autoplay: false,
        loop: false,
        preload: "metadata",
        techOrder: ["html5"],
        sources: [
            {
                // src: "//samplelib.com/lib/preview/mp4/sample-10s.mp4",
                src: "/web-design/素材/video.mp4",
                type: "video/mp4",
            },
        ],
        playbackRates: [0.5, 1, 2, 4],
        controlBar: {
            progressControl: true,                       // 进度条
            volumePanel: { inline: false },
            currentTimeDisplay: true,                    // 当前时间
            timeDivider: true,                           // 时间分割线
            durationDisplay: true,                       // 总时间
            remainingTimeDisplay: true,                  // 剩余时间
            playbackRateMenuButton: true,                // 视频播放速度
            fullscreenToggle: true,                      // 全屏按钮
        },
        plugins: {
        },
    };

    // 创建一个名为ScreenshotButton的控制条组件
    class ScreenshotButton extends videojs.getComponent('Button') {
        constructor(player, options) {
            super(player, options);
            this.controlText(options.controlText || 'Screenshot');
            this.addClass('fa');
            this.addClass('fa-camera');
            this.addClass('vjs-screenshot-button');
        }

        // 点击按钮时执行的函数
        handleClick() {
            // 获取video.js的video元素
            const video = this.player().el().querySelector('video');

            // 创建canvas元素，并设置宽高等于video元素的宽高
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // 绘制视频截图到canvas上
            canvas.getContext('2d').drawImage(video,
                0, 0,
                canvas.width, canvas.height
            );

            const schotList = document.querySelector('#video-scshot-wrap .screenshot-list');
            schotList.innerHTML = getScreenshotItemHtml(this.player().currentTime(), canvas.toDataURL('image/png')) + schotList.innerHTML;
        }
    }

    // 将ScreenshotButton组件添加到video.js的controlBar中
    videojs.registerComponent('ScreenshotButton', ScreenshotButton);

    var player = videojs('video-player', options, function onPlayerReady() {
        // 在controlBar中添加ScreenshotButton组件
        player.controlBar.addChild('ScreenshotButton', {});
    });
})();

function Comment() {
    let e = document.querySelector('#comment')
    e.readOnly = !e.readOnly;
}

/*******
 * 获取视频截图项HTML
 * @param  {decimal} currentTime 截图时间
 * @param  {string} imgURL
 * @return {string}
 */
function getScreenshotItemHtml(currentTime, imgURL) {
    return `<div class="screenshot-item" data-t="${currentTime}">
    <div class="kit-box-wrap pos-abs">
        <div class="kit-item fa fa-trash" onclick="removeAncestor(this, 2)"></div>
        <div class="kit-item fa fa-cloud-download"></div>
    </div>
    <div class="video-cover-wrap">
        <img src="${imgURL}" alt="" class="video-cover" />
    </div>
</div>`
}