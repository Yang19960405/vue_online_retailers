import axios from 'axios'


$('#count-decrease').on('click', function() {
	var i= parseInt($("#goodCount").val())
	if(i <= 1) {
		return
	} else {
		$("#goodCount").val(i-1);
	}


})

$('#count-add').on('click', function() {
	var i= parseInt($("#goodCount").val())
	$("#goodCount").val(i+1);
})

$( 'body').on('click','#cart-add', function() {
  var data = {
    goodsId: $(this).parents('.divGetId')[0].id,
    number: $("#goodCount").val(),
  }
  axios.get("/cart/addCart", {
    params: data
  })
    .then(function (result) {
      if (result.data == true) {
        showTip("已添加至购物车！");
      }
      else {
        showTip("请先登录");
      }

    })
})

$('body').on('click','#cart-buy', function () {
  var data = {
    goodsId: $(this).parents('.divGetId')[0].id,
    number: $("#goodCount").val(),
  }
  axios.get("/cart/buyGoodQuick", {
    params: data
  })
    .then(function (result) {
      if (result.data == true) {
        showTip("已成功购买！");
      }
      else {
        showTip("请先登录");
      }
    });
})






