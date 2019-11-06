import axios from 'axios'
import {showTip} from '../../assets/js/login'


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
  axios( {
    url:"api/cart/addCart",
    data: data,
    method:"post"
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
  axios({
    url:"api/cart/buyGoodQuick",
    data: data,
    method:"post"
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






