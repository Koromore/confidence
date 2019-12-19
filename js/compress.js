function compress(src) {
  
  return new Promise(function (resolve, reject) {
    // 缩放图片需要的canvas
    var canvas = document.createElement('canvas');
    canvas.width = 750;
    canvas.height = 1448;
    var context = canvas.getContext('2d');
    var img = new Image();
    img.setAttribute('crossorigin', 'anonymous'); //解决跨域
    img.onload = function () {
      // 清除画布
      // context.clearRect(0, 0, targetWidth, targetHeight);
      // 图片压缩
      context.drawImage(img, 0, 0, 750, 1448);

      //用户名称
      // 计算字符串实际长度
      function get_length(str) {
        var char_length = 0;
        for (var i = 0; i < str.length; i++) {
          var son_char = str.charAt(i);
          //如果是汉字，长度大于2，其他任何字符（包括￥等特殊字符，长度均为1）另外：根据需求规则，限制n个字，一个字=2个字符
          encodeURI(son_char).length > 2 ? char_length += 1 : char_length += 0.5;
        }
        return char_length;
      }
      // 名称
      var name_text = '解雨臣'
      var name_text_length = get_length(name_text)
      var x_ = 375 - (name_text_length * 36 / 2)
      context.font = "normal 36px '黑体'";
      context.fillStyle = "#ffffff";
      context.fillText(name_text, x_, 400);
      context.textAlign = 'center'; // 文本水平对齐方式
      context.textBaseline = 'middle'; // 文本垂直方向，基线位置 
      var base64 = canvas.toDataURL("image/jpeg");
      resolve(base64);
    };
    img.src = src;
  })
}
