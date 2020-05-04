init();
$(document).ready(function () {
    $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4'],
            navigation: true,
            navigationPosition: 'right',
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            autoScrolling:false
        }
    );
    var myCS= { thumbnail : {borderColor: '#F8F8FF' } };
    $("#nanogallery2").nanogallery2({
        thumbnailHeight:  200,
        thumbnailWidth: "auto",
        thumbnailLabel:{display:"false"},
        galleryTheme: myCS,
        thumbnailDisplayTransition:'slideRight',
        thumbnailDisplayTransitionDuration:500,
        thumbnailDisplayInterval:30,
        galleryDisplayMode:"rows",
        galleryMaxRows:4,
        items: [
            { src: './images/1.jpg', srct: './images/thumb/1.jpg', title: 'Title Image 1' },
            { src: './images/2.jpg', srct: './images/thumb/2.jpg', title: 'Title Image 1' },
            { src: './images/5.jpg', srct: './images/thumb/5.jpg', title: 'Title Image 1' },
            { src: './images/7.jpg', srct: './images/thumb/7.jpg', title: 'Title Image 1' },
            { src: './images/6.jpg', srct: './images/thumb/6.jpg', title: 'Title Image 1' },
            { src: './images/8.jpg', srct: './images/thumb/8.jpg', title: 'Title Image 1' },
            { src: './images/10.jpg', srct: './images/thumb/10.jpg', title: 'Title Image 1' },
            { src: './images/11.jpg', srct: './images/thumb/11.jpg', title: 'Title Image 1' },
            { src: './images/13.jpg', srct: './images/thumb/13.jpg', title: 'Title Image 1' },
            { src: './images/14.jpg', srct: './images/thumb/14.jpg', title: 'Title Image 1' },
            { src: './images/23.jpg', srct: './images/thumb/23.jpg', title: 'Title Image 1' },
            { src: './images/24.jpg', srct: './images/thumb/24.jpg', title: 'Title Image 1' },
            { src: './images/25.jpg', srct: './images/thumb/25.jpg', title: 'Title Image 1' },
            { src: './images/28.jpg', srct: './images/thumb/28.jpg', title: 'Title Image 1' },
            { src: './images/29.jpg', srct: './images/thumb/29.jpg', title: 'Title Image 1' },
            { src: './images/9.jpg', srct: './images/thumb/9.jpg', title: 'Title Image 1' },
            { src: './images/12.jpg', srct: './images/thumb/12.jpg', title: 'Title Image 1' },
            { src: './images/15.jpg', srct: './images/thumb/15.jpg', title: 'Title Image 1' },
            { src: './images/17.jpg', srct: './images/thumb/17.jpg', title: 'Title Image 1' },
            { src: './images/20.jpg', srct: './images/thumb/20.jpg', title: 'Title Image 1' },
            { src: './images/22.jpg', srct: './images/thumb/22.jpg', title: 'Title Image 1' },
            { src: './images/27.jpg', srct: './images/thumb/27.jpg', title: 'Title Image 1' },
        ]
    });

});

var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2019, 8, 3);
together.setHours(12);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
    var msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
    document.body.appendChild(msg);
    $("#code").css("display", "none")
    // $("#copyright").css("position", "absolute");
    // $("#copyright").css("bottom", "10px");
    document.execCommand("stop");
} else {
    setTimeout(function () {
        startHeartAnimation();
    }, 5000);

    timeElapse(together);
    setInterval(function () {
        timeElapse(together);
    }, 500);

    adjustCodePosition();
    $("#code").typewriter();
}
