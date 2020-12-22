
init();
$(document).ready(function () {
    $('#fullpage').fullpage({
            licenseKey: 'a?%qqlF?n7',
            anchors: ['page1', 'page2', 'page3', 'page4'],
            navigation: true,
            navigationPosition: 'right',
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            autoScrolling:false
        }
    );
    var myCS= { thumbnail : {borderColor: '#F8F8FF' } };
    var fz=window.document.body.clientWidth;
    if(fz<560){
        var h=125;
    }else{
        var h=200;
    }
    $("#nanogallery2").nanogallery2({
        thumbnailHeight:  h,
        thumbnailWidth: "auto",
        thumbnailLabel:{display:"false"},
        galleryTheme: myCS,
        thumbnailDisplayTransition:'slideRight',
        thumbnailDisplayTransitionDuration:500,
        thumbnailDisplayInterval:30,
        galleryDisplayMode:"rows",
        galleryMaxRows:4,
        items: [
            { src: './images/Image-1.jpg', srct: './images/thumb/Image-1.jpg', title: 'Manchester' },
            { src: './images/Image-2.jpg', srct: './images/thumb/Image-2.jpg', title: 'York Museum' },
            { src: './images/Image-3.jpg', srct: './images/thumb/Image-3.jpg', title: 'Bamford' },
            { src: './images/Image-4.jpg', srct: './images/thumb/Image-4.jpg', title: 'LLandudno' },
            { src: './images/Image-5.jpg', srct: './images/thumb/Image-5.jpg', title: 'LLandudno' },
            { src: './images/Image-6.jpg', srct: './images/thumb/Image-6.jpg', title: 'LLandudno' },
            { src: './images/Image-7.jpg', srct: './images/thumb/Image-7.jpg', title: 'LLandudno' },
            { src: './images/Image-8.jpg', srct: './images/thumb/Image-8.jpg', title: 'LLandudno' },
            { src: './images/Image-9.jpg', srct: './images/thumb/Image-9.jpg', title: 'Edinburgh' },
            { src: './images/Image-10.jpg', srct: './images/thumb/Image-10.jpg', title: 'Scotland' },
            { src: './images/Image-11.jpg', srct: './images/thumb/Image-11.jpg', title: 'Scotland' },
            { src: './images/Image-12.jpg', srct: './images/thumb/Image-12.jpg', title: 'Edinburgh' },
            { src: './images/Image-13.jpg', srct: './images/thumb/Image-13.jpg', title: 'St Andrews' },
            { src: './images/Image-14.jpg', srct: './images/thumb/Image-14.jpg', title: 'St Andrews' },
            { src: './images/Image-15.jpg', srct: './images/thumb/Image-15.jpg', title: 'Scotland' },
            { src: './images/Image-16.jpg', srct: './images/thumb/Image-16.jpg', title: 'Windermere' },
            { src: './images/Image-17.jpg', srct: './images/thumb/Image-17.jpg', title: 'Windermere' },
            { src: './images/Image-18.jpg', srct: './images/thumb/Image-18.jpg', title: 'Scotland' },
            { src: './images/Image-19.jpg', srct: './images/thumb/Image-19.jpg', title: 'Windermere' },
            { src: './images/Image-20.jpg', srct: './images/thumb/Image-20.jpg', title: 'Windermere' },
            { src: './images/Image-21.jpg', srct: './images/thumb/Image-21.jpg', title: 'Scotland' },
            { src: './images/Image-22.jpg', srct: './images/thumb/Image-22.jpg', title: 'Windermere' },
            { src: './images/Image-23.jpg', srct: './images/thumb/Image-23.jpg', title: 'Windermere' },
            { src: './images/Image-24.jpg', srct: './images/thumb/Image-24.jpg', title: 'Windermere' },
            { src: './images/Image-25.jpg', srct: './images/thumb/Image-25.jpg', title: 'Scotland' },
            { src: './images/Image-26.jpg', srct: './images/thumb/Image-26.jpg', title: 'York' },
            { src: './images/Image-27.jpg', srct: './images/thumb/Image-27.jpg', title: 'York' },
            { src: './images/Image-28.jpg', srct: './images/thumb/Image-28.jpg', title: 'York' },
        ]
    });

});

var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2019, 7, 3);
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
