/*
    * 根据index获取 str
    * **/
function byIndexLeve(index){
	var str ="";
	switch (index)
	{
		case 0:
			str="差评";
			break;
		case 1:
			str="较差";
			break;
		case 2:
			str="中等";
			break;
		case 3:
			str="一般";
			break;
		case 4:
			str="好评";
			break;
	}
	return str;
}
//  星星数量
var stars = [
	['x2.png', 'x1.png', 'x1.png', 'x1.png', 'x1.png'],
	['x2.png', 'x2.png', 'x1.png', 'x1.png', 'x1.png'],
	['x2.png', 'x2.png', 'x2.png', 'x1.png', 'x1.png'],
	['x2.png', 'x2.png', 'x2.png', 'x2.png', 'x1.png'],
	['x2.png', 'x2.png', 'x2.png', 'x2.png', 'x2.png'],
];
$(".block li").find("img").hover(function(e) {
	var obj = $(this);
	var index = obj.index();
	if(index < (parseInt($(".block li").attr("data-default-index")) -1)){
		return ;
	}
	var li = obj.closest("li");
	var star_area_index = li.index();
	for (var i = 0; i < 5; i++) {
		li.find("img").eq(i).attr("src", "/static/images/" + stars[index][i]);//切换每个星星
	}
	$(".level").html(byIndexLeve(index));
}, function() {
})

$(".block li").hover(function(e) {
}, function() {
	var index = $(this).attr("data-default-index");//点击后的索引
	index = parseInt(index);
	console.log("index",index);
	$(".level").html(byIndexLeve(index-1));
	console.log(byIndexLeve(index-1));
	$(".order-evaluation ul li:eq(0)").find("img").attr("src","/static/images/x1.png");
	for (var i=0;i<index;i++){

		$(".order-evaluation ul li:eq(0)").find("img").eq(i).attr("src","/static/images/x2.png");
	}
})

$(".block li").find("img").click(function() {
	var obj = $(this);
	var li = obj.closest("li");
	var star_area_index = li.index();
	var index1 = obj.index();
	li.attr("data-default-index", (parseInt(index1)+1));
	var index = $(".block li").attr("data-default-index");//点击后的索引
	index = parseInt(index);
	console.log("index",index);
	$(".level").html(byIndexLeve(index-1));
	console.log(byIndexLeve(index-1));
	$(".order-evaluation ul li:eq(0)").find("img").attr("src","/static/images/x1.png");
	for (var i=0;i<index;i++){
		$(".order-evaluation ul li:eq(0)").find("img").eq(i).attr("src","/static/images/x2.png");
	}

});
//印象
// $(".order-evaluation-check").click(function(){
//if($(this).hasClass('checked')){
//当前为选中状态，需要取消
// $(this).removeClass('checked');
//}else{
// //当前未选中，需要增加选中
// $(this).addClass('checked');
// }
// });
//评价字数限制
function words_deal()
{
	var curLength=$("#TextArea1").val().length;
	if(curLength>140)
	{
		var num=$("#TextArea1").val().substr(0,140);
		$("#TextArea1").val(num);
		alert("超过字数限制，多出的字将被截断！" );
	}
	else
	{
		$("#textCount").text(140-$("#TextArea1").val().length);
	}
}


/*
    * 页面实现
    * **/
var obj='';
function ShoppingCarObserver(elInput) {
	this.elInput = elInput;
	var ids = elInput.id;//count:购物车Id
	this.cartId=ids.split(',')[0];
	this.goodsId=ids.split(',')[1];
	this.changeButton = function() {
		$("#evaluate-"+this.cartId).css("display","none");
		$("#detail-"+this.cartId).css("display","");
	}
}

function InitStar(index){
	$(".order-evaluation ul li:eq(0)").find("img").attr("src","/static/images/x1.png");
	for (var i=0;i<index;i++){
		$(".order-evaluation ul li:eq(0)").find("img").eq(i).attr("src","/static/images/x2.png");
	}
}

$('.shopping-car-container').on('click', '.item-evaluate', function() {
	var goodsInput = $(this).parents('.goods-item').find('.goods-operate')[0]
	addevaluation=new ShoppingCarObserver(goodsInput);
	obj=$(this);
	$("#order_evaluation").css('display','')
	InitStar(0);
	$(".level").html('');
	$("#TextArea1").text('');
	$('#myEva').modal('show');
})

;
//评价功能
var Evaluate = {
	checkInput:function() {
		if ($("#TextArea1").text()== "") {
			alert('内容不能为空');
			$("#TextArea1").focus();
			return false;
		}
		return true;
	},
	doEvaluate:function() {
		if (addevaluation !== null) {
			var data = {
				cartId: addevaluation.cartId,
				goodsId: addevaluation.goodsId,
				grade: $(".block li").attr("data-default-index"),
				comment: $("#TextArea1").val(),
			}
			//ajax代码实现
			$.ajax({
				type: "POST",
				url: "/order/addEvaluation",
				data: JSON.stringify(data),
				dataType: "json",
				contentType: "application/json",
				success: function (result) {
					if (result == true) {
						$("#order_evaluate_modal").html("感谢您的评价！").show().delay(3000).hide(500);
						$('#myEva').modal('hide');
						addevaluation.changeButton();
					} else {
						showTip('请先登录');
					}
				}
			});
		}
	},
	evaluate:function() {
		if (this.checkInput()) {
			this.doEvaluate();
		}
	}

};
$("#order_evaluation").click(function(){
	Evaluate.evaluate();
})

$('.shopping-car-container').on('click', '.item-detail', function() {
	var goodsInput = $(this).parents('.goods-item').find('.goods-operate')[0]
	showevaluation=new ShoppingCarObserver(goodsInput);
	//ajax代码实现
	var data={
		cartId:showevaluation.cartId,
	}
	$.ajax({
		type:"POST",
		url:"/order/getByCartId",
		data:JSON.stringify(data),
		//dataType:"text",
		dataType:"json",
		contentType:"application/json; charset=utf-8",
		success : function(result) {
			InitStar(result.grade);
			$(".level").html(byIndexLeve(result.grade-1));
			$("#TextArea1").text(result.comment);
		}
	});
	$("#order_evaluation").css('display','none')
	$('#myEva').modal('show');
})