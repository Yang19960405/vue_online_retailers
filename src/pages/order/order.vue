<template>
  <div id="home">
    <home-head></home-head>
    <div style="margin-top: 20px"></div>


  <div class="container">

    <h1>我的订单</h1>
    <div class="shopping-car-container">
      <div class="car-headers-menu">
        <div class="row">
          <div class="col-md-2 car-menu">图片</div>
          <div class="col-md-3 car-menu">商品名称</div>
          <div class="col-md-2 car-menu">单价</div>
          <div class="col-md-1 car-menu">数量</div>
          <div class="col-md-2 car-menu">金额</div>
          <div class="col-md-2 car-menu">操作</div>
        </div>
      </div>
      <div class="goods-content">
        <!--goods display-->
        <div class="goods-item" v-for="order in orderDatas">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="col-md-2 car-goods-info goods-image-column">
                <img class="goods-image"
                     :src="'/static/images/cover_picture/'+order.parentCategoryId+'/'+order.goods.categoryId+'/'+order.goods.id+'/'+order.goods.url"
                     style="width: 100px; height: 100px;" alt="..."/>
              </div>
              <div class="col-md-3 car-goods-info goods-params">{{order.goods.goodsName}}</div>
              <div class="col-md-2 car-goods-info goods-price"><span>￥</span><span class="single-price">{{order.goods.goodsPrice}}</span></div>
              <div class="col-md-1 car-goods-info goods-counts">{{order.number}}</div>
              <div class="col-md-2 car-goods-info goods-money-count"><span>￥</span><span class="single-total">{{order.goods.goodsPrice*order.number}}</span></div>
              <div class="col-md-2 car-goods-info goods-operate" :id="order.id+','+order.goodsId">
                <div v-if="order.evaluateId==null">
                <button type="button" class="btn btn-danger item-evaluate" style="" :id="'evaluate-'+order.id" >待评价</button>
                <button type="button" class="btn btn-primary item-detail" style="display: none" :id="'detail-'+order.id">评价详情</button>
                </div>
                <div v-else>
                  <button type="button" class="btn btn-danger item-evaluate" style="display: none">待评价</button>
                  <button type="button" class="btn btn-primary item-detail" style="">评价详情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
     <!--评价界面-->
    <div class="modal fade" id="myEva">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">

            <div class="order-evaluation clearfix">
              <h4>评价信息</h4>
              <div class="block">
                <ul>
                  <li data-default-index="0">
                                    <span>
                                        <img src="/static/images/x1.png">
                                        <img src="/static/images/x1.png">
                                        <img src="/static/images/x1.png">
                                        <img src="/static/images/x1.png">
                                        <img src="/static/images/x1.png">
                                    </span>
                    <em class="level"></em>
                  </li>
                </ul>
              </div>
              <%--
              <div class="order-evaluation-text">
                本次交易，乖，摸摸头 给您留下了什么印象呢？
              </div>
              <div class="order-evaluation-checkbox">
                <ul class="clearfix">
                  <li class="order-evaluation-check" data-impression="1">专业水平高<i class="iconfont icon-checked"></i></li>
                  <li class="order-evaluation-check" data-impression="2">交付准时<i class="iconfont icon-checked"></i></li>
                  <li class="order-evaluation-check" data-impression="3">效果明显<i class="iconfont icon-checked"></i></li>
                  <li class="order-evaluation-check" data-impression="4">数据分析准确<i class="iconfont icon-checked"></i></li>
                  <li class="order-evaluation-check" data-impression="5">能力待提高<i class="iconfont icon-checked"></i></li>
                  <li class="order-evaluation-check" data-impression="6">工期延误<i class="iconfont icon-checked"></i></li>
                </ul>
              </div>
              --%>
              <div class="order-evaluation-textarea">
                <textarea name="content" id="TextArea1" onKeyUp="words_deal();" ></textarea>
                <span>输入<em id="textCount">140</em>个字</span>
              </div>
              <a href="javascript:;" id="order_evaluation">评价完成</a>
            </div>
            <div id="order_evaluate_modal" class="dmlei_tishi_info"></div>
          </div>
          <div class="modal-footer">
          </div>
        </div>
        <!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <!-- Site footer -->
    <footer class="footer">
      <p>&copy; 2019 Company, Inc.</p>
    </footer>

  </div>
  </div>
</template>
<script>
  import 'jquery/dist/jquery'
  import 'bootstrap/dist/js/bootstrap'
  import '../../assets/js/bootsnav'
  import '../../assets/js/order'
  import axios from 'axios'
  import HomeHead1 from '../home/home.vue'

  export default{
      name:'order',
      data(){
          return{
            code:0,
            status:0,
            orderDatas:[]
          }
      },
      components:{
        homeHead:HomeHead1
      },
      mounted:function () {
        this.getData()
      },
      methods:{
        getData:function () {
          var that_ = this;
          axios.get("api/order/orderView/9/0",{
          })
            .then(function (result) {
              var json=eval(result.data)
              console.log(JSON.parse(result.data.data))
              that_.code=json.code
              that_.status=json.status
              that_.orderDatas=JSON.parse(result.data.data)
            })
        }
      }
  }
</script>
<style lang="stylus">
  @import "../../assets/css/evaluatestyle.css";
</style>
