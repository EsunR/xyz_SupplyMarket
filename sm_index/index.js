$(document).ready(function () {
  // 新手提示
  $('#dontshow').click(function () {
    $('#new_user_to_show').slideUp();
    $.cookie('sm_new_user', '0', { expires: 365 });
  })
  if (!$.cookie('sm_new_user')) {
    $('#new_user_brand').slideDown();
  }

});