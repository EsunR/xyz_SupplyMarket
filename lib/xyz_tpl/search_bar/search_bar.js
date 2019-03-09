$(document).ready(function () {

  $('#search_input').bind('input propertychange', function () {
    let str = $('#search_input').val();
    if (str.trim() !== '') {
      getSearchData(str);
    } else {
      $('#associative_box').hide();
    }
  });

  $('#search_input').focus(function () {
    if ($('#search_input').val().trim() !== '') {
      getSearchData($('#search_input').val());
    }
  })

  $('#search_input').blur(function () {
    setTimeout(() => {
      $('#associative_box').hide();
    }, 100);
  })

  $('#associative_list').on('click', '.associative_item', function () {
    $('#search_input').val($(this).text());
    $('#associative_box').hide();
  })
  
  $("#search .btn-outline-light").click(function () {  
	  let search = $("#search_input").val();
	  window.location.href = loca+'/Searchs/'+ search;
  })
});

