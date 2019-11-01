
function isLoginShow(bool){
    if (bool==true){
        $(".a-login").css('display','');
        $(".a-loginOut").css('display','none');
    }
    else{
        $(".a-loginOut").css('display','');
        $(".a-login").css('display','none');
    }
}

function showTip(content)
{
    $('#divTip').html(content);
    $('#infoTip').modal('show') //显示模态框
}
//点击登录注册按钮
$(".a-login").click(function(){
    $('#name').val('');
    $('#password').val('');
    $('#myLogin').modal('show') //显示模态框
})

//点击注销按钮
$(".a-loginOut").click(function(){
    $.ajax({
        type:"POST",
        url:"/user/logout",
    });
    isLoginShow(true)
})


//登录功能
var LOGIN = {
    param:{
        //用户编号
        userId:""
    },
    checkInput:function() {
        if ($("#name").val() == "") {
            showTip('用户名不能为空')

            $("#name").focus();
            return false;
        }
        if ($("#password").val() == "") {
            showTip('密码不能为空')
            $("#password").focus();
            return false;
        }
        return true;
    },
    doLogin:function() {
        var data={
            userName:$("#name").val(),
            password:$("#password").val(),
        }
        $.ajax({
            type:"POST",
            url:"/user/login",
            data:JSON.stringify(data),
            dataType:"json",
            contentType:"application/json",
            success : function(result) {
                LOGIN.param.userId=result;
                if (result > 0) {
                    isLoginShow(false);
                    //更新个人推荐信息
                    $.ajax({
                        url:'http://demo.j2eeall.com/personal/'+result,
                        type:"get"
                    });

                    $('#myLogin').modal('hide') //隐层模态框
                    $.ajax({
                        type: "POST",
                        url: "/user/checkPrefer",
                        data: JSON.stringify(data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (choose) {
                            if (choose == true) {
                                $('#myPrefer').modal('show');
                            } else {
                                showTip("登录成功！");
                            }
                        }
                    });
                    }
                else {
                    showTip("用户名或者密码错误");
                  }
          }
        });

    },
    login:function() {
        if (this.checkInput()) {
            this.doLogin();
        }
    }

};
//登录
$("#btn-login").click(function(){
    LOGIN.login();
});
//跳转至注册界面
$("#jump").click(function(){
    $('#regName').val('');
    $('#regPwd').val('');
    $('#regPwdRepeat').val('');
    $('#myLogin').modal('hide') //隐层模态框
    $('#myReg').modal('show') //显示模态框
});

//注册功能
var REGISTER={
    inputcheck:function(){
        //不能为空检查
        if ($("#regName").val() == "") {
            showTip("用户名不能为空");

            $("#regName").focus();
            return false;
        }
        if ($("#regPwd").val() == "") {
            showTip("密码不能为空");
            $("#pwd").focus();
            return false;
        }
        //密码检查
        if ($("#regPwd").val() != $("#regPwdRepeat").val()) {
            showTip("确认密码和密码不一致，请重新输入！");
            $("#regPwdRepeat").select();
            $("#regPwdRepeat").focus();
            return false;
        }
        return true;
    },
    beforeSubmit:function() {
        //检查用户是否已经被占用
        $.ajax({
            type:"POST",
            url : "/user/check/"+escape($("#regName").val()),
            success : function(result) {
                if (result==true) {
                    //注册
                    var regData={
                        userName:$("#regName").val(),
                        password:$("#regPwd").val(),
                    }
                    $.ajax({
                        type:"POST",
                        url:"/user/register",
                        data:JSON.stringify(regData),
                        dataType:"json",
                        contentType:"application/json",
                        success : function(result) {
                            if (result == true) {
                                showTip("用户注册成功，请登录！");
                                $('#myLogin').modal('show') //显示模态框
                                $('#myReg').modal('hide') //隐层模态框
                            }
                            else {
                                showTip("注册失败！");
                            }
                        }
                    });
                } else {
                    showTip("此用户名已经被占用，请选择其他用户名");
                    $("#regName").select();
                }
            }
        });

    },
    reg:function() {
        if (this.inputcheck() ) {
            this.beforeSubmit();
        }
    }
};
//注册
$("#btn-reg").click(function(){
    REGISTER.reg();
});

//check
$(".a-cart").click(function(){
    //检查用户是否登录
    $.ajax({
        type:"POST",
        url : "/user/checkLogin",
        success : function(result) {
            if (result==true) {
                window.location.href = "/cart/cartView/9/0";
            } else {
                showTip("请先登录！");
            }
        }
    });

})

//我的订单
$(".a-order").click(function(){
    //检查用户是否登录
    $.ajax({
        type:"POST",
        url : "/user/checkLogin",
        success : function(result) {
            if (result==true) {
                window.location.href = "/order/orderView/9/0";
            } else {
                showTip("请先登录！");
            }
        }
    });

})

//首页
$(".a-index").click(function(){
    window.location.href = "/home";
})


$('.prefer-choose-checkbox').on('click', '.prefer-choose-check', function() {
    var id= $(this)[0].id;
    if($("#"+id).hasClass('checked')){
        //当前为选中状态，需要取消
        $("#"+id).removeClass('checked');
    }else{
        //当前未选中，需要增加选中
        $("#"+id).addClass('checked');
    }

})

//用户偏好
$("#btnPrefer").on('click', function() {
    var myArray = new Array();
    for (var i = 0; i < $('.prefer-choose-check').length; i++) {
        var id=$('.prefer-choose-check').eq(i)[0].id;
        if($("#"+id).hasClass('checked')) {
            //添加选中的值
            myArray.push({categoryId:id})
        }
        }
    if (myArray.length>0){
        $.ajax({
            type:"POST",
            url : "/user/addPrefer",
            data:JSON.stringify(myArray),
            dataType:"json",
            contentType:"application/json",
        });
        $("#myPrefer").modal('hide');
    }
    else
    {
        showTip('请选择偏好');
    }
});






