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
  $.getJSON("http://mimas.businessvalue.com.cn/api?api_key=84021e748610b3ab89b11695a73c3c31&api_sig=ecbf9d86cd57f048bf8450e85e6d91fd&method=user.register&event_key=94finaw6qhm1t3t2xbgksvv8aytga4eu&jsoncallback=?", {
    "name": name,
    "mobile": mobile,
    "email": email,
    "company": company,
    "title": title
  }, function(data) {
    console.log('test')
    if (!data['error']) {
      $('.alert').removeClass('alert-error').addClass('alert-success').html('<div class="success-title"><i class="icons success-icon"></i><span>提交成功</span></div>'+data['info']).slideUp().slideDown();
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
            return '<li class="child">'+sign+" : "+detail+'<span class="name">'+author+'</span></li>';
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
    
    $.getJSON("http://mimas.businessvalue.com.cn/api?api_key=098f6bcd4621d373cade4e832627b4f6&api_sig=8af5f06d5a4c48fa826c015bebef03df&method=agenda.list&event_key=94finaw6qhm1t3t2xbgksvv8aytga4eu&jsoncallback=?",function(result){
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
