// link click function #
jQuery(function() {
  jQuery('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = jQuery(this.hash);
      var $url = this.hash.slice(1);
      var $scrollTime = 500;
      function updateUrl(){ window.location.hash = encodeURIComponent($url); }
      $target = $target.length && $target || jQuery('[name=' + $url + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        jQuery('html,body').animate({
          scrollTop: targetOffset
        }, $scrollTime);
        setTimeout(updateUrl,$scrollTime+100)
        return false;
      }
    }
  });
});

// Slide show
function load_animations() {
  if (!$.browser.msie) {
    $('#header_images').css({
      height: '400px',
      opacity: '0'
    })
    $('#aside2').css({
      height: '500px',
      opacity: '0'
    });
    $('#overlay_bg').css({
      height: '400px'
    });
    $('#header_controls_left').animate({
      opacity: '1'
    });
    $('#header_controls_right').animate({
      opacity: '1'
    });
    $('#header_images').stop().animate({
      opacity: '1'
    }, 400, 'easeOutQuad');
    $('#header_images > .header_image:first-child').stop().animate({
      opacity: '1'
    }, 400, 'easeOutQuad');
    $('#aside2').stop().animate({
      opacity: '1'
    }, 400, 'easeOutQuad');
  } else {
    $('#header_images').css({
      height: '400px'
    });
    $('#aside2').css({
      height: '500px'
    });
    $('#overlay_bg').css({
      height: '400px'
    });
    $('#header_images .header_image').stop().animate({
      opacity: '0'
    }, 0);
    $('#header_images .header_image:first-child').stop().animate({
      opacity: '1'
    }, 0);
  }
  /// end animation in ///
  var header_count = $("#header_images > .header_image").size();
  var current_project = 1;
  var header_color = $('.header_image').attr('color');
  $('#aside2').css({
    'background-image': 'none',
    'background-color': header_color
  });
  $('#overlay_bg').click(function(event) {
    var link_target = $('#header_images > img:nth-child(' + current_project + ')').attr('target');
    if (link_target == '_blank') {
      window.open($('#header_images > img:nth-child(' + current_project + ')').attr('link'));
    } else {
      window.location = ($('#header_images > img:nth-child(' + current_project + ')').attr('link'));
    }
  });
  $('#aside2').hover(

  function(event) {
    $('#header_controls_left').show();
    $('#header_controls_right').show();
    if (!$.browser.msie) {
      $('#header_controls_left').stop().animate({
        left: '0px'
      }, 200, 'easeOutQuad');
      $('#header_controls_right').stop().animate({
        right: '0px'
      }, 200, 'easeOutQuad');
    }
  }, function(event) {
    $('#header_controls_left').hide();
    $('#header_controls_right').hide();
    if (!$.browser.msie) {
      $('#header_controls_left').stop().animate({
        left: '10px'
      }, 300, 'easeOutQuad');
      $('#header_controls_right').stop().animate({
        right: '10px'
      }, 300, 'easeOutQuad');
    }
  })
  $('#header_controls_right').click(function(event) {
    animate_header('right', 0);
    clearInterval(interval_header);
  })
  $('#header_controls_left').click(function(event) {
    animate_header('left', 0);
    clearInterval(interval_header);
  })
  document.onkeyup = handleArrowKeys;

  function handleArrowKeys(evt) {
    if (evt.keyCode == 37) {
      animate_header('left', 0);
      clearInterval(interval_header);
    }
    if (evt.keyCode == 39) {
      animate_header('right', 0);
      clearInterval(interval_header);
    }
  }

  function animate_header(direction, project) {
    $('.slider').removeClass('loading');
    if (!$.browser.msie) {
      $('#header_images > .header_image:nth-child(' + current_project + ')').stop().animate({
        opacity: '0',
        marginLeft: '-20px',
        marginTop: '-20px',
        width: '1312.5px',
        height: '450px'
      }, 250, 'easeInQuad', function() {
        $(this).css({
          marginLeft: '0px',
          marginTop: '0px',
          width: '1050px',
          height: '400px'
        })
        if (direction == 'logo') {
          current_project = project
        };
        if (direction == 'left') {
          current_project--
        };
        if (direction == 'right') {
          current_project++
        };
        if (current_project > header_count) {
          current_project = 1
        };
        if (current_project < 1) {
          current_project = header_count
        };
        var new_color = $('#header_images > .header_image:nth-child(' + current_project + ')').attr('color')
        //$('#aside2').animate({backgroundColor:new_color},80,'easeOutQuart');
        $('#aside2').css({
          backgroundColor: new_color
        });
        $('#header_images > .header_image:nth-child(' + current_project + ')').css({
          marginLeft: '100px',
          marginTop: '50px',
          width: '1050px',
          height: '400px'
        });
        $('#header_images > .header_image:nth-child(' + current_project + ')').stop().animate({
          opacity: '1',
          marginLeft: '0',
          marginTop: '0',
          width: '1050px',
          height: '400px'
        }, 250, 'easeOutQuad');
      });
    } else {
      $('#header_images > .header_image:nth-child(' + current_project + ')').stop().animate({
        opacity: '0'
      }, 150, 'easeInQuad', function() {
        if (direction == 'logo') {
          current_project = project
        };
        if (direction == 'left') {
          current_project--
        };
        if (direction == 'right') {
          current_project++
        };
        if (current_project > header_count) {
          current_project = 1
        };
        if (current_project < 1) {
          current_project = header_count
        };
        var new_color = $('#header_images > .header_image:nth-child(' + current_project + ')').attr('color')
        //$('#aside2').animate({backgroundColor: new_color},80,'easeOutQuart');
        $('#aside2').css({
          backgroundColor: new_color
        });
        $('#header_images > .header_image:nth-child(' + current_project + ')').stop().animate({
          opacity: '1'
        }, 150, 'easeInQuad');
      });
    }
  }
  var interval_header = setInterval(timerFunction, 6000);

  function timerFunction() {
    animate_header('right', 0);
  }
}

// ToolTip
var $text = [
  ['明星嘉宾','讲干货的嘉宾不说虚的，会议全程内容优质紧凑无“尿点”'],
  ['热门主题','HTLM5，语音技术、移动社交、用户体验等最热点的趋势探讨'],
  ['公开课','面向开发者最实用、最涨血的免费课程'],
  ['全互动','全程互动与视频直播，商业价值APP支持的在线交互'],
  ['评测即送','参与“极客评测”领走30台最新、最酷的终端产品'],
  ['疯狂派送','20台小米手机，100个F码，更有200套全年《商业价值》等你赢'],
  ['迷你路演','精选创业项目，与VC和产品大牛面对面']
];
$('.eventnav li span').each(function(index) {
  var isSequenceComplete = true;
  $(this).mouseenter(function(e) {
    e.preventDefault();
    if (isSequenceComplete === false) {
      return true;
    }
    isSequenceComplete = false;
    $(this).grumble({
      text: '<div class="title">'+$text[index][0]+'</div><div class="content">'+$text[index][1]+'</div>',
      angle: 0,
      distance: 84,
      showAfter: 250,
      hideOnClick: true,
      size: 200,
      onHide: function() {
        isSequenceComplete = true;
      }
    });
  })
  .mouseleave(function(){
    $('.grumble-text').remove();
    $('.grumble').remove();
    $('.grumble-button').remove();
    isSequenceComplete = true;
  });
});




// Ajax Submit
$("#submit_button").click(function() {
  $(this).addClass('disabled');
  var name = $('#name').val();
      mobile = $('#mobile').val();
      email = $('#email').val();
      company = $('#company').val();
      title = $('#title').val();

      function isEmail(strEmail) {
        if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) return true;
        else return false;
      }
      function isMobile(strMobile) {
        if (strMobile.search(/^[0-9]{11}$/) != -1) return true;
        else return false;
      }
  if(name == '' || mobile == '' || email == '' || company == '' || title == ''){
    $('.alert').removeClass('alert-success').addClass('alert-error').html('请将带*号的必填项目填写完整').slideUp().slideDown();
    $("#submit_button").removeClass('disabled');
    return;
  }
    if (isEmail(email) ==  false){
    $('.alert').removeClass('alert-success').addClass('alert-error').html('请填写正确的Email地址').slideUp().slideDown();
    $("#submit_button").removeClass('disabled');
    return;
  }

    if (isMobile(mobile) ==  false){
    $('.alert').removeClass('alert-success').addClass('alert-error').html('请填写正确的手机号码').slideUp().slideDown();
    $("#submit_button").removeClass('disabled');
    return;
  }
  $(".submit img").show();
  $.post("/register.php", {
    "name": name,
    "mobile": mobile,
    "email": email,
    "company": company,
    "title": title
  }, function(data) {
    var dataobj = eval("(" + data + ")");
    if (!dataobj.hasOwnProperty('error')) {
      $('.alert').removeClass('alert-error').addClass('alert-success').html(dataobj['info']).slideUp().slideDown();
      $('#name,#mobile,#email,#company,#title').val('');
    } else {
      $('.alert').removeClass('alert-success').addClass('alert-error').html('您已使用该邮箱进行过报名').slideUp().slideDown();
    }
  })
  .complete(function(){ 
    $("#submit_button").removeClass('disabled');
    $(".submit img").fadeOut();
  });
});
