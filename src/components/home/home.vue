<template>
  <div style="background-color: black;height:50px;">
    <div class="container" id="header_info" style="line-height:50px;text-align: right;color:#C9C9C9;">
      <a class="a-index">首页</a> &nbsp;&nbsp;|&nbsp;&nbsp;
      <a class="a-order">我的订单</a> &nbsp;&nbsp;|&nbsp;&nbsp;
      <a class="a-cart">购物车</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a class="a-login islogin_true">登录 / 注册 </a> <a class="a-loginOut islogin_felse" >注销</a>

    </div>
    <!-- 登陆界面 -->
    <div class="modal fade" id="myLogin">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <h4 class="modal-title" align="center">登录</h4>
            <br/>
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-offset-2 col-sm-2 control-label">账号</label>
                <div class="col-sm-5">
                  <input type="text" class="form-control" id="name" placeholder="请输您的入账号">
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="col-sm-offset-2 col-sm-2 control-label">密码</label>
                <div class="col-sm-5">
                  <input type="password" class="form-control" id="password" placeholder="请输入您的密码">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-4 col-sm-5">
                  <button id="btn-login" type="button" class="btn btn-default btn-block btn-primary">登陆</button>
                  <button id="btn-face-login" type="button" class="btn btn-default btn-block btn-primary">人脸快捷登陆</button>
                  <a id="jump">跳转至注册页面</a>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
        <!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <!-- 注册界面 -->
    <div class="modal fade" id="myReg">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <h4 class="modal-title" align="center">注册</h4>
            <br/>
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-offset-2 col-sm-2 control-label">账号</label>
                <div class="col-sm-5">
                  <input type="text" class="form-control" id="regName" placeholder="请输您的入账号">
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="col-sm-offset-2 col-sm-2 control-label">密码</label>
                <div class="col-sm-5">
                  <input type="password" class="form-control" id="regPwd" placeholder="请输入您的密码">
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="col-sm-offset-2 col-sm-2 control-label">确认密码</label>
                <div class="col-sm-5">
                  <input type="password" class="form-control" id="regPwdRepeat" placeholder="再次输入您的密码">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-4 col-sm-5">
                  <button id="btn-reg" type="button" class="btn btn-default btn-block btn-primary">注册</button>

                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
        <!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!--用户偏号选择-->


    <!--信息提示-->
    <div class="modal fade" tabindex="-1" role="dialog" id="infoTip" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="gridSystemModalLabel">提示</h4>
          </div>
          <div class="modal-body" id="divTip">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import 'jquery/dist/jquery'
  import 'bootstrap/dist/js/bootstrap'
  import '../../assets/js/bootsnav'
  import '../../assets/js/login'
  import {isLoginShow} from '../../assets/js/login'
  export default{
    name:'HomeHead1',
    props:{

    },
    mounted:function () {
      this.$axios.get("api/user/checkLogin",{})
        .then(function (result) {
          if (result.data==true) {
            isLoginShow(false)
          }else{
            isLoginShow(true)
          }
        })

    }
  }
</script>
<style>
@import "../../assets/css/chooseprefer.css";
</style>
