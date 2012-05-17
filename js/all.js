// ToolTip
var $text = [
  ['邀约嘉宾','讲干货的嘉宾不说虚的，会议全程内容优质紧凑无“尿点”'],
  ['全互动','全程互动与视频直播，商业价值APP支持的在线交互'],
  ['会议主题','HTLM5，语音技术、移动社交、用户体验等最热点的趋势workshop'],
  ['好运开门','20台小米手机，100个F码看你的运气。'],
  ['极客评测','在创新展台与那些创新产品的零距离体验'],
  ['抽奖环节','参与“极客评测”领走30台最新酷的终端产品'],
  ['title7','content7']
];
$('.eventnav li span').each(function(index) {
  var isSequenceComplete = true;
  $(this).mouseover(function(e) {
    e.preventDefault();
    if (isSequenceComplete === false) {
      return true;
    }
    isSequenceComplete = false;
    $(this).grumble({
      text: '<div class="title">'+$text[index][0]+'</div><div class="content">'+$text[index][1]+'</div>',
      angle: 0,
      distance: 84,
      showAfter: 500,
      hideAfter: 1000,
      size: 200,
      onHide: function() {
        isSequenceComplete = true;
      }
    });
  });
});
// Ajax Submit
$("#submit_button").click(function() {
  $(this).addClass('disabled');
  var email = $('#email').val();
  if (email == '') $('.alert').removeClass('alert-success').addClass('alert-error').html('请填写Email地址').slideUp().slideDown();
  $.post("/register.txt", {
    "email": email
  }, function(data) {
    var dataobj = eval("(" + data + ")");
    if (dataobj.success) {
      $('.alert').removeClass('alert-error').addClass('alert-success').html(dataobj.msg).slideUp().slideDown();
    } else {
      $('.alert').removeClass('alert-success').addClass('alert-error').html(dataobj.msg).slideUp().slideDown();
    }
  })
  .complete(function() { $("#submit_button").removeClass('disabled'); });
});