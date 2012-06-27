<?php
    $oauth_token = isset($oauth_token) ? $oauth_token : '';
    $oauth_token_secret = isset($oauth_token_secret) ? $oauth_token_secret : '';
    $auth_url = isset($auth_url) ? $auth_url : '';
    $weibo_class = (isset($weibo_flag) && $weibo_flag) ? 'weibo success' : 'weibo';
?>
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>MIIC-移动互联网创新大会</title>
  <meta name="viewport" content="width=device-width, user-scalable=no, maximum-scale=1">
  <meta name="keywords" content="移动互联网大会,MIIC,移动互联大会,移动互联网创新大会,移动互联创新大会,HTML5,语音技术,移动互联网,国际市场,Windows Phone,移动社交,移动游戏,移动广告,智能终端,随需扩展,硬件革命,创新机会,商业价值">
  <meta name="description" content="2012年移动互联网创新大会，持续2天，超过3000人次的产业盛会，行业领袖的趋势分享与多达6个分论坛的深入探讨，结合两天的移动互联网创新嘉年华（终端与应用创新展）一起揭示移动互联网创新的趋势与商业价值释放路径。">
  <link rel="shortcut icon" href="../../../favicon.ico">
  <link rel="apple-touch-icon" href="../../../apple-touch-icon-iphone.png"/>
  <link rel="apple-touch-icon" sizes="72x72" href="../../../apple-touch-icon-ipad.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="../../../apple-touch-icon-iphone4.png" />
  <link rel="stylesheet" href="../../../css/bootstrap.css">
  <link rel="stylesheet" href="../../../css/mobile-style.css">
  <script src="../../../js/jquery-1.7.2.min.js" type="text/javascript"></script>
  <script src="../../../js/modernizr-2.5.3.min.js" type="text/javascript"></script>
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
<body class="<?php echo $weibo_class; ?>">
  <img style="display:none;" src="../../../css/images/sprites.png" alt="load">
  <header class="header">
    <img src="../../../images/m-miic-banner.png" alt="MIIC-移动互联网创新大会"></header>
  <div class="content">
    <article>
      <div class="tip">参与移动互联网大会，写下你的评论及感想赢取小米手机，200套全年商业价值杂志的免费赠阅资格。</div>
      <div class="alert alert-success"><div class="success-title"><i class="icons success-icon"></i><span>提交成功</span></div>分享更多精彩，赢取精美礼品！</div>
    </article>
    <h3>我的感想</h3>
    <a class="weibo-bt" href="<?php echo $auth_url; ?>"><img src="../../../images/wiebo-bt.png" alt="登录到新浪微博"></a>
    <article id="submit-box">
      <form class="form-inline">
        <input type="hidden" name="oauth_token" value="<?php echo $oauth_token; ?>" />
        <input type="hidden" name="oauth_token_secret" value="<?php echo $oauth_token_secret; ?>" />
        <input type="hidden" name="via" value="<?php echo $via; ?>" />
        <div class="textarea-box">
        <div class="text-count">
          还剩
          <i>131</i>
          字
        </div>
      </div>
        <textarea id="weibo_submit_textarea" name="message">#移动互联网创新大会#</textarea>
        <div class="tag">添加标签 #移动互联网创新大会#</div>
        <div class="item submit b-bottom">
          
          <button id="weibo_submit_button" type="button" class="button submit">提交</button>
          <img src="../../../css/images/loading.gif" alt="loading">
        </div>
      </form>
    </article>
  </div>
  <footer class="footer">
    <div class="copyright">Copyright © 2012  《商业价值》杂志社</div>
  </footer>
  <script src="../../../js/m-all.js" type="text/javascript"></script>
</body>
</html>
