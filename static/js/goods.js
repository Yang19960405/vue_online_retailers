

$('.container').on('click', '.cart-add', function() {
	var elInput= $(this).parents('.goods-item').find('.div-desc')[0];
	var data={
		goodsId:elInput.id,
		number:1,
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
				$('#addCartTip').modal('show');
			}
			else {
				$('#loginTip').modal('show');
			}
		}
	});
})

$('.container').on('click', '.cart-buy', function() {
	var elInput= $(this).parents('.goods-item').find('.div-desc')[0];

	var data={
		goodsId:elInput.id,
		number:1,
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
				$('#buyCartTip').modal('show')
			}
			else {
				$('#loginTip').modal('show')
			}
		}
	});
})

