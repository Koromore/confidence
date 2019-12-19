var imgwidth = 750;//图片宽度
$(function () {
  var shade = $('.shade')
  var shade_num = 0
  var shade_num_add = 3
  // console.log(shade.css("top"))

  var shade_time = setInterval(function () {
    if (shade_num == 0) {
      shade_num_add = 3
    } else if (shade_num == 345) {
      shade_num_add = -3
    }
    shade_num = shade_num + shade_num_add
    shade.css('top', shade_num + 'px')
  }, 50)
  let next = $('.next')

  next.on({
    touchstart: function (e) {
      // 长按事件触发  
      timeOutEvent = setTimeout(function () {
        timeOutEvent = 0;
        console.log('你长按了')
        // 页面跳转
        app.moveTo(1)
        clearInterval(shade_time);
      }, 2000)
      //长按400毫秒   
      // e.preventDefault();
    },
    // 点击滑动
    touchmove: function () {
      clearTimeout(timeOutEvent)
      timeOutEvent = 0
      // console.log(timeOutEvent)
    },
    // 点击事件
    touchend: function () {
      clearTimeout(timeOutEvent)
      if (timeOutEvent != 0) {
        // console.log('你点击了'+timeOutEvent)

      }
      return false;
    }
  })

  let el_model = $('.el-model')

  let rule = $('.rule')
  rule.click(function () {
    el_model.css('display', 'block')
  })



  // 流程显示按钮
  var hint_list = function hint_list(list) {
    var hint = $('.hint')
    for (let i = 0; i < hint.length; i++) {
      hint[i].style.display = 'none'
    }
    if (list == 1) {
      hint[list].style.display = 'flex'
    } else {
      hint[list].style.display = 'block'
    }

  }
  hint_list(0)
  var base64 = ''

  // 图片上传
  $('.add_file').on("change", function () {
    var file = this.files[0];
    // console.log(file);
    // readFile(file, $(this));
    lrz(file, {
      width: 640,
      quality: 0.8,
      before: function () {

      },
      fail: function (err) {
        console.error(err);
      },
      always: function () {

      },
      done: function (results) {
        // console.log(results.base64)
        $('.add_file').val('')
        $('.cover_add').attr('src', results.base64)
        base64 = results.base64
      }

    });
    // console.log(base64)
    hint_list(1)
    // console.log("1")
  })

  //  重新上传
  $('.upload_again').click(function () {
    $(".add_file").trigger("click");
    // console.log(base64)
  })


  // ////////////////////

  $('#scan').click(function () {
    // $('#percentum').text('0')
    ajax(base64)
  })
  // console.log(123)



  var ajax = function ajax(img) {
    hint_list(2)
    var time_num = 0

    var percentum = setInterval(function () {
      $('#percentum').text(time_num++)
      if (time_num == 101) {
        clearInterval(percentum);
        var opo = 1
        if (opo == 1) {
          app.moveTo(2)
        } else if (opo == 0) {
          hint_list(3)
        }
      }
    }, 49)
    // 出结果 start
    // 随机整数
    var x = 8;
    var y = 1;
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    // console.log(rand)
    var img_url = `images/result${rand}.png`
    compress(img_url).then(function (data) {
      $('.result_img').attr("src", data);
    })
    // 出结果 end
    // console.log(img)
    // 如果传入的图片非人脸
    // if (time_num == 100) {
    // var opo = 1
    // if (opo == 1) {
    //   app.moveTo(2)
    // } else if (opo == 0) {
    //   hint_list(3)
    // }
    // }


    // var x = 8;
    // var y = 1;
    // var rand = parseInt(Math.random() * (x - y + 1) + y);
    // console.log(rand)
    // var img_url = `images/result${rand}.png`
    // compress(img_url).then(function (data) {
    //   $('.result_img').attr("src", data);
    // })
    // 出结果 end

    // $("#b").html("").append("<div>" + rand + "</div>");
    $.ajax({
      url: 'http://xk.guoxinad.com.cn/TencentYoutu/test.php?ac=face',
      type: 'POST',
      dataType: 'json',
      data: {
        img: img
      },
      success: function (data) {
        //  $(".img-loading").fadeOut(300);
        //  var str = "";
        //  if (data.errormsg!="OK") {
        //      alert("请上传人脸正面照！");
        //      // imgeditor.reset();
        //      $('#file').val("");
        //  }else{

        //      if (data.face.length>1) {
        //          alert("请上传单张人脸图片！");
        //          imgeditor.reset();
        //          $('#file').val("");
        //      }else{
        //          if (data.face[0].gender<=50) {
        //              $(".res-2").html("性别：女");
        //          }else{
        //              $(".res-2").html("性别：男");
        //          }
        //          $(".res-1").html("年龄："+data.face[0].age);
        //          $(".res-5").html("魅力打分：<span>"+data.face[0].beauty+"</span>");
        //         if(data.face[0].expression<=20){
        //             $(".res-3").html("笑容：微笑");
        //         }else if (data.face[0].expression<=50) {
        //             $(".res-3").html("笑容：开心");
        //         }else{
        //             $(".res-3").html("笑容：哈哈大笑");
        //         }
        //         if (data.face[0].glass) {
        //             if (data.face[0].glasses==0) {
        //                 $(".res-4").html("配饰：未佩戴眼镜");
        //             }else if (data.face[0].glasses==1) {
        //                 $(".res-4").html("配饰：戴眼镜");
        //             }else if (data.face[0].glasses==2) {
        //                 $(".res-4").html("配饰：戴墨镜");
        //             }
        //          }else{
        //              $(".res-4").html("配饰：未佩戴眼镜");
        //          }

        //         $(".btn-back").fadeIn(50);
        //         $(".resImg img").attr("src",img);
        //         $(".page2").fadeOut(100);
        //      }
        //  }
        console.log(data);
      }
    })
  }

  // page3
  $('#to_calculate').click(function () {
    app.moveTo(1)
    hint_list(0)
    $('.cover_add').attr("src", "./images/add.png")
  })

  $('#to_end').click(function () {
    app.moveTo(3)
  })

  // page4
  // 轮播图
  var index = 0;
  // first() 将匹配元素集合缩减为集合中的第一个元素。
  // clone() 克隆
  $('.banner ul li').first().clone().appendTo('.banner ul');//克隆第一张图片添加到列表中去
  var length = $('.banner ul li').length;//返回判断的数量

  // 循环图片容器的数量 并向提示按钮的容器添加子元素
  for (var i = 0; i < length - 1; i++) {
    $('.banner ol').append('<li></li>');
  }
  $('.banner ol li').first().addClass('on');

  // 鼠标触碰提示按钮
  $('.banner ol li').hover(function () {
    index = $(this).index();
    $('.banner ul').stop().animate({ left: - index * imgwidth }, 800)
    $('.banner ol li').eq(index).addClass('on').siblings().removeClass('on');

  })

  // 给左右按钮绑定事件
  $('.btn_l').click(function () {
    index--
    move()
    // console.log(index)
  })
  $('.btn_r').click(function () {
    index++
    move()
    // console.log(index)
  })

  // 移动事件
  function move() {
    // console.log(index)
    if (index == length) {
      $('.banner ul').css({ left: 0 });
      index = 1;
    }
    if (index == -1) {
      $('.banner ul').css({ left: -(length - 1) * imgwidth })
      index = length - 2
    }
    $('.banner ul').stop().animate({ left: - index * imgwidth }, 800)

    if (index == length - 1) {
      // 如果索引值为最大值，那么就给第一个小圆点添加类名，其他兄弟删除类名
      $('.banner ol li').eq(0).addClass('on').siblings().removeClass('on');
      // index = 0;
    } else {
      $('.banner ol li').eq(index).addClass('on').siblings().removeClass('on');
    }

    var banner_text_li = $('.banner_text').find('li')
    // for (let i = 0; i < banner_text_li.length; i++) {
    //   banner_text_li[i].css("display","none")
    //   console.log(banner_text_li[i])
    // }
    console.log(index)
    banner_text_li.css("display", "none")
    if (index == 0 || index == 8) {
      banner_text_li[0].style.display = "block"
    } else {
      banner_text_li[index].style.display = "block"
    }


    // banner_text_li[0].css("display","black")
    // console.log(banner_text_li[0].style.display)
  }
  // 即可带走
  $('#end_but').click(function () {
    var url = 'http://www.toyota-finance.com.cn/toyota/online_application'
    window.location.href = url;
  })

})





