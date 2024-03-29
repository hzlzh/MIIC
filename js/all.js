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
  ['热门主题','HTML5、语音技术、移动社交、用户体验等热点趋势探讨'],
  ['公开课','面向开发者最实用、最涨血的免费课程'],
  ['全互动','全程互动与视频直播，商业价值APP支持的在线交互'],
  ['评测即送','参与“极客评测”领走30台最新、最酷的终端产品'],
  ['疯狂派送','15台小米手机，200套全年《商业价值》等你赢'],
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
  $.getJSON("http://mimas.businessvalue.com.cn/api?api_key=098f6bcd4621d373cade4e832627b4f6&api_sig=51629988468cd89fdb81a24765a3bb07&method=user.register&event_key=94finaw6qhm1t3t2xbgksvv8aytga4eu&jsoncallback=?", {
    "name": name,
    "mobile": mobile,
    "email": email,
    "company": company,
    "title": title
  }, function(data) {
    console.log('test')
    if (!data['error']) {
      $('.alert').removeClass('alert-error').addClass('alert-success').html(data['info']).slideUp().slideDown();
      $('#name,#mobile,#email,#company,#title').val('');
    } else {
      if(data['error_code'] == 10103)
        $('.alert').removeClass('alert-success').addClass('alert-error').html('您已使用该邮箱进行过报名').slideUp().slideDown();
      else
        $('.alert').removeClass('alert-success').addClass('alert-error').html('提交失败').slideUp().slideDown();
    }
  })
  .complete(function(){ 
    $("#submit_button").removeClass('disabled');
    $(".submit img").fadeOut();
  });
});

//api地址

var API_URL = "http://mimas.businessvalue.com.cn/api";

//日程列表 动态载入
function agendaLoading(boxClass){
    var $agenda = $(boxClass);
    var getLocalTime = function(Unixtimestamp){
        var unixTimestamp = new Date(Unixtimestamp * 1000),
            commonTime    = unixTimestamp,
            month         = commonTime.getMonth(),
            day           = commonTime.getDate(),
            hours         = commonTime.getHours()*1 >= 10 ? commonTime.getHours() : "0"+commonTime.getHours(),
            minutes       = commonTime.getMinutes()*1 >= 10 ? commonTime.getMinutes() : "0"+commonTime.getMinutes();
        return {
            month  :month,
            day    :day,
            hours  :hours,
            minutes:minutes
        }
        
    }    
    var agenda_list = function(time,content,author,descript){
        if(!author){
            return '<li><span class="time">'+time+'</span><span class="subject">'+content+'</span></li>';
        }else{
            return '<li><span class="time">'+time+'</span><span class="subject">'+content+'<span class="title">'+descript+'</span><span class="name">'+author+'</span></span></li>';
        }
    };
    var child_list  = function(detail,author,sign){
            return '<li class="child" style="margin-left:160px;">'+sign+" : "+detail+'<span class="name">'+author+'</span></li>';
    };
    var each_agenda = function(json){
        var str = "<li>"+json.title+"<ul>";
        $.each(json.agendas,function(j,jtem){
            var bDate = getLocalTime(jtem.time_started),
                eDate = getLocalTime(jtem.time_ended),
                btime = bDate.hours+" : "+bDate.minutes,
                etime = eDate.hours+" : "+eDate.minutes;
            str += agenda_list(btime+" ~ "+etime,jtem.title);
            if(jtem.guests){
                $.each(jtem.guests,function(k,ktem){
                    var tit = ktem.title;
                    if(tit == '主持人'){
                        tit += "　";
                    }
                    str += child_list(ktem.position,ktem.name,tit);
                });
            };
        });
        return str;
    };
    
    $.getJSON(API_URL+"?api_key=098f6bcd4621d373cade4e832627b4f6&api_sig=8af5f06d5a4c48fa826c015bebef03df&method=agenda.list&event_key=94finaw6qhm1t3t2xbgksvv8aytga4eu&jsoncallback=?",function(result){
        var list_one = "",list_next_one = "",same_day;
        $.each(result,function(i,item){
            var day = 6;
            if(day != getLocalTime(item.time_ended).day){
                list_next_one += each_agenda(item);
            }else{
                list_one += each_agenda(item);
            }
            list_one      += "</ul></li>";        
            list_next_one += "</ul></li>";        
        });
        $agenda.eq(0).html(list_one);
        
        $agenda.eq(1).html(list_next_one);
    });
}
agendaLoading("#meeting-agenda .agenda-box .agenda-box-list");

//嘉宾动态载入
function guestLoading(list){
    var $list = $(list);
    var guest_html = function(src,title,position,company,w,h){
        return  '<li>'
               +'   <ul>'
               +'     <li class="avatar"><img alt="'+title+'" src="'+src+'" width="'+w+'" height="'+h+'"></li>'
               +'     <li class="name">'+title+'</li>'
               +'     <li class="title">'+company+position+'</li>'
               +'   </ul>'
               +'</li>';
    }
    var url = API_URL+"?api_key=d7d1fe3f36fdb557f56ef72922a556b0&api_sig=ebac318d6defaec8e8013a5942933711&method=event.guest&event_key=94finaw6qhm1t3t2xbgksvv8aytga4eu";
    $.getJSON(url+"&jsoncallback=?",function(result){
        var guests = "";
        $.each(result,function(i,item){
            if(typeof item.name !== "undefined"){
               guests += guest_html(item.relative_path,item.name,item.title,item.company,item.width,item.height);
            }
        });
        guests += '<li><ul><li class="more">更有超过30位演讲嘉宾超过20场产品宣讲</li></ul></li>'
        $list.html(guests);
    })
   
}
guestLoading(".guest-profile-box-list");

//合作伙伴动态载入
function cooperativeLoading(list){
    var $list = $(list);
    var cooperativeLoading_html = function(arr,result){
        var content = '';
        var li_list = function(item){
            return '<li><a title="'+item.title+'" target="_blank" href="'+item.url+'"><img src="'+item.relative_path+'" alt="'+item.title+'"></a></li>'
        }
        $.each(result,function(i,item){
            if(item.data == arr){
                content += li_list(item);
            }
        })
        return   ' <li> '
                +'  <ul> '
                +'    <li class="title">'+arr+'</li> '
                +     content
                +'  </ul> '
                +'  <div class="long-line icons"></div> '
                +' </li>';
    }
    var url = API_URL+"?api_key=d7d1fe3f36fdb557f56ef72922a556b0&api_sig=4b094f53019d915061653161fd89c80d&method=event.partner&event_key=94finaw6qhm1t3t2xbgksvv8aytga4eu";
    $.getJSON(url+"&jsoncallback=?",function(result){
        var cooperative = "",arr = [];
        $.each(result,function(i,item){
            arr[i] = item.data;
        });
        Array.prototype.uniq = function() {  
            var temp = {}, len = this.length;
    
            for(var i=0; i < len; i++)  {  
                if(typeof temp[this[i]] == "undefined") {
                    temp[this[i]] = 1;
                }  
            }  
            this.length = 0;
            len = 0;
            for(var i in temp) {  
                this[len++] = i;
            }  
            return this;  
        }  
        arr.uniq();
        for(var j=0;j<arr.length;j++){
            cooperative += cooperativeLoading_html(arr[j],result);
        }
        $list.html(cooperative);
    })
    
}
cooperativeLoading(".cooperative-partner-box-list");





