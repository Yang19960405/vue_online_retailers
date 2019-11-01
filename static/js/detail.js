
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

$('#cart-add').on('click', function() {
	var data={
		goodsId:$(this).parents('.divGetId')[0].id,
		number:$("#goodCount").val(),
	}
	//ajax代码实现
	$.ajax({
		type:"POST",
		url:"/cart/addCart",
		data:JSON.stringify(data),
		dataType:"json",
		contentType:"application/json",
		success : function(result) {
			if (result == true) {
				showTip("已添加至购物车！");
			}
			else {
				showTip("请先登录");
			}
		}
	});
})

$('#cart-buy').on('click', function() {
	var data={
		goodsId:$(this).parents('.divGetId')[0].id,
		number:$("#goodCount").val(),
	}
	//ajax代码实现
	$.ajax({
		type:"POST",
		url:"/cart/buyGoodQuick",
		data:JSON.stringify(data),
		dataType:"json",
		contentType:"application/json",
		success : function(result) {
			if (result == true) {
				showTip("已成功购买！");
			}
			else {
				showTip("请先登录");
			}
		}
	});
})
