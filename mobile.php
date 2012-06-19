<?php
    $name       = urldecode(@$_GET['name']);
    $mobile     = urldecode(@$_GET['mobile']);
    $email      = urldecode(@$_GET['email']);
    $company    = urldecode(@$_GET['company']);
    $position   = urldecode(@$_GET['position']);
?>
<!DOCTYPE HTML>
<html lang="zh-CN" xmlns:wb="http://open.weibo.com/wb">
<head>
  <meta charset="UTF-8" />
  <title>MIIC-移动互联网创新大会</title>
  <meta name="viewport" content="width=device-width, user-scalable=no, maximum-scale=1">
  <meta name="keywords" content="移动互联网大会,MIIC,移动互联大会,移动互联网创新大会,移动互联创新大会,HTML5,语音技术,移动互联网,国际市场,Windows Phone,移动社交,移动游戏,移动广告,智能终端,随需扩展,硬件革命,创新机会,商业价值">
  <meta name="description" content="2012年移动互联网创新大会，持续2天，超过3000人次的产业盛会，行业领袖的趋势分享与多达6个分论坛的深入探讨，结合两天的移动互联网创新嘉年华（终端与应用创新展）一起揭示移动互联网创新的趋势与商业价值释放路径。">
  <meta name="robots" content="index, follow">
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="apple-touch-icon-iphone.png"/>
  <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-ipad.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-iphone4.png" />
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/mobile-style.css">
  <script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
  <script src="js/modernizr-2.5.3.min.js" type="text/javascript"></script>
  <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=3235681089" type="text/javascript" charset="utf-8"></script>
  <script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-31833303-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  </script>
</head>
<body>
  <img style="display:none;" src="css/images/sprites.png" alt="load">
  <header class="header">
    <img src="images/m-miic-banner.png" alt="MIIC-移动互联网创新大会"></header>
  <div class="content">
    <h2>会议特色</h2>
    <article class="m-feature">
      <ul>
        <li>
          <i class="icons item1"></i>
          <div>
            <h3>明星嘉宾</h3>
            <div class="des">讲干货的嘉宾不说虚的，会议全程内容优质紧凑无“尿点”</div>
          </div>
        </li>
        <li>
          <i class="icons item2"></i>
          <div>
            <h3>热门主题</h3>
            <div class="des">HTML5、语音技术、移动社交、用户体验等热点趋势探讨</div>
          </div>
        </li>
        <li>
          <i class="icons item3"></i>
          <div>
            <h3>公开课</h3>
            <div class="des">面向开发者最实用、最涨血的免费课程</div>
          </div>
        </li>
        <li>
          <i class="icons item4"></i>
          <div>
            <h3>全互动</h3>
            <div class="des">全程互动与视频直播，商业价值APP支持的在线交互</div>
          </div>
        </li>
        <li>
          <i class="icons item5"></i>
          <div>
            <h3>评测即送</h3>
            <div class="des">参与“极客评测”领走30台最新、最酷的终端产品</div>
          </div>
        </li>
        <li>
          <i class="icons item6"></i>
          <div>
            <h3>疯狂派送</h3>
            <div class="des">15台小米手机，200套全年《商业价值》等你赢</div>
          </div>
        </li>
        <li>
          <i class="icons item7"></i>
          <div>
            <h3>迷你路演</h3>
            <div class="des">精选创业项目，与VC和产品大牛面对面</div>
          </div>
        </li>
      </ul>
    </article>
    <h2>会议日程</h2>
    <article class="event-time">
      <ul class="event-content icons">
        <li class="current">
          
          <ul>
            <li class="f">7月6日下午：移动互联网创新大会开发者日</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>分论坛一：极客公园公开课</li>
            <li>分论坛二：创新应用迷你路演</li>
            <li>&nbsp;</li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="f">7月7日上午：移动互联网创新大会主论坛——趋势论坛</li>
            <li>&nbsp;</li>
          </ul>
        </li>
        <li>
          
          <ul>
            <li class="f">7月7日下午：移动互联网创新大会分论坛</li>
            <li>分论坛一：商业价值论坛</li>
            <li>分论坛二：国际化论坛</li>
            <li>分论坛三：用户体验论坛</li>
          </ul>
        </li>
      </ul>
      <div class="b-bottom"><a href="detail.html"><span class="button more">查看详细日程</span></a></div>
    </article>
    <h2>现在报名</h2>
    <article id="submit-box">
      <form class="form-inline">
        <div class="submit-box">
          <div class="item">
            姓名 <i>*</i>
            <input id="name" type="text" class="input-small" value="<?php echo $name; ?>" name="name"></div>
          <div class="item">
            手机 <i>*</i>
            <input id="mobile" type="text" class="input-small" value="<?php echo $mobile; ?>" name="mobile"></div>
          <div class="item">
            邮箱
            <i>*</i>
            <input id="email" type="text" class="input-small" value="<?php echo $email; ?>" name="email"></div>
          <div class="item">
            公司
            <i>*</i>
            <input id="company" type="text" class="input-small" value="<?php echo $company; ?>" name="company"></div>
          <div class="item">
            职位
            <i>*</i>
            <input id="title" type="text" class="input-small" value="<?php echo $position; ?>" name="title"></div>
          <div class="alert"></div>
          <div class="item submit b-bottom">
            <img src="css/images/loading.gif" alt="loading">
            <button id="submit_button" type="button" class="button submit">提交</button>
            <div class="share-btn" style="display:none;"><script type="text/javascript">
              (function(){
              var _w = 106 , _h = 24;
                var param = {
                  url:'',
                  type:'5',
                  count:'',
                  appkey:'3235681089',
                  title:'#移动互联网创新大会#我报名参加了由《商业价值》杂志举办的2012移动互联网创新大会，参与互动，赢取小米手机，《商业价值》全年杂志，猛击这里：http://t.cn/zODI78l',
                  pic:'',
                  ralateUid:'',
                language:'zh_cn',
                  rnd:new Date().valueOf()
                }
                var temp = [];
                for( var p in param ){
                  temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
                }
                document.write('<iframe allowTransparency="true" frameborder="0" scrolling="no" src="http://hits.sinajs.cn/A1/weiboshare.html?' + temp.join('&') + '" width="'+ _w+'" height="'+_h+'"></iframe>')
              })()
            </script></div>
          </div>
        </div>
      </form>
    </article>
  </div>
  <footer class="footer">
    <div class="copyright">Copyright © 2012  《商业价值》杂志社</div>
  </footer>
  <script src="js/m-all.js" type="text/javascript"></script>
  
</body>
</html>
