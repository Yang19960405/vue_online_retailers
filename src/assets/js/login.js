import axios from 'axios'
import router from '../../router'

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
$('body').on("click",".a-login",function(){
    $('#name').val('');
    $('#password').val('');
    $('#myLogin').modal('show') //显示模态框
})

//点击注销按钮
$('body').on("click",".a-loginOut",function(){
    axios.get("api/user/logout",{
    })
    isLoginShow(true)
    localStorage.removeItem("userId")
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
            username:$("#name").val(),
            password:$("#password").val(),
        }
        axios({
          url:'api/user/login',
          method:'post',
          data:data,
        })
          .then(function (response) {
            LOGIN.param.userId=response.data;
            if (response.data > 0) {
              localStorage.setItem("userId",response.data)
              isLoginShow(false);
              //更新个人推荐信息
              // $.ajax({
              //   url:'http://demo.j2eeall.com/personal/'+result,
              //   type:"get"
              // });

              $('#myLogin').modal('hide') //隐层模态框
              axios({
                url:'api/user/checkPrefer',
                method:'post',
                data:data
              })
                .then(function (response1) {
                  if (response1.data == true) {
                    $('#myPrefer').modal('show');
                  } else {
                    showTip("登录成功！");
                  }
                })
            }
            else {
              showTip("用户名或者密码错误");
            }
          })
    },
    login:function() {
        if (this.checkInput()) {
            this.doLogin();
        }
    }

};
//登录
$('body').on("click","#btn-login",function(){
    LOGIN.login();
});
//跳转至注册界面
$('body').on("click","#jump",function(){
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
      axios.get("api/user/check/"+escape($("#regName").val()),{
      }).then(function (response) {
        if (response.data==true) {
          //注册
          var regData={
            username:$("#regName").val(),
            password:$("#regPwd").val(),
          }
          axios({
            url:'api/user/register',
            data:regData,
            method:'post'
          }).then(function (result) {
            if (result.data == true) {
              showTip("用户注册成功，请登录！");
              $('#myLogin').modal('show') //显示模态框
              $('#myReg').modal('hide') //隐层模态框
            }
            else {
              showTip("注册失败！");
            }
          })
        } else {
          showTip("此用户名已经被占用，请选择其他用户名");
          $("#regName").select();
        }
      })
      axios.get("api/user/check/"+escape($("#regName").val()),{
        }).then(function (result) {
        if (result.data==true) {
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
      });

    },
    reg:function() {
        if (this.inputcheck() ) {
            this.beforeSubmit();
        }
    }
};

//注册
$('body').on("click","#btn-reg",function(){
    REGISTER.reg();
});

//check
$('body').on("click",".a-cart",function(){
    //检查用户是否登录
    axios.get("api/user/checkLogin",{
    }).then(function (result) {
      if (result.data==true) {
        window.location.href = "/cart/cartView/9/0";
      } else {
        showTip("请先登录！");
      }
    });

})

//我的订单
$('body').on("click",".a-order",function(){
    var self=this
    //检查用户是否登录
    axios.get( "api/user/checkLogin",{
    }).then(function (result) {
      if (result.data==true) {
        router.push({path:'/order/order'})
      } else {
        showTip("请先登录！");
      }
    }.bind(this));

})

//首页
$('body').on("click",".a-index",function(){
  router.push({path:'/'});
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
        axios({
            method:"post",
            url : "api/user/addPrefer",
            data:JSON.parse(myArray),
        });
        $("#myPrefer").modal('hide');
    }
    else
    {
        showTip('请选择偏好');
    }
});

export {
  isLoginShow
}





