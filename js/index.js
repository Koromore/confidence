
// 弹框
function showModel(html){
    $('.el-content').html(html);
    $('.el-model').show();
}
function randomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$('.el-success').on("click",function(e){
    $('.el-model').hide();
});

function ajax(url,data) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            type: 'POST',
            data:data || {},
            dataType: 'json',
            success: function (data) {
                resolve(data)
            },
            error:function (err) {
                reject(err)
            }
        });
    });
}


var baseUrl = window.location.href.split('index')[0];
var height = window.innerHeight;
var app = new PageSlider({
    pages: $('.page-wrap .page'),
    dev: 2,
    // musicUrl: 'music/bg.mp3?666',
    baseUrl: baseUrl, //
    shareUrl:'http://h5.weiyihui.cn/ztwxshare/index.php',
});


var shareText = [
    '这！这！这！！我上一世竟然是！！！',
    '紫霞！！等我！！！',
    '咦。。。地上的月饼盒是谁掉的',
    '穿的头昏！！gd总局不管管吗？',
    '不服！我要逆天改命！！',
    '呵呵，好一个月光宝盒！！',
]


app.wxShare('中秋月圆夜，映sir穿越时', shareText[randomNum(0,5)], app.baseUrl+'index.php', app.baseUrl + 'images/share.jpg');




var pre_resource = [
    'images/pause.png',
    'images/play.png',
    'images/orient.png',
];

app._loadimg(pre_resource,function(process){
    $(".load-tet").html('加载'+Math.floor(process)+"%");
},function(){
    $('.loading').fadeOut(100);
    $('.wrap').removeClass('none');
});



