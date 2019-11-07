<template>
<div class="home">
  <home-head></home-head>
  <div style="margin-top: 20px"></div>


  <div class="container">
    <div class="shopping-car-container">
      <div class="car-headers-menu">
        <div class="row">
          <div class="col-md-1 car-menu">
            <label><input type="checkbox" id="check-goods-all" /><span id="checkAll">全选</span></label>
          </div>
          <div class="col-md-2 car-menu">图片</div>
          <div class="col-md-3 car-menu">商品名称</div>
          <div class="col-md-1 car-menu">单价</div>
          <div class="col-md-2 car-menu">数量</div>
          <div class="col-md-1 car-menu">金额</div>
          <div class="col-md-2 car-menu">操作</div>
        </div>
      </div>
      <div class="goods-content">
        <!--goods display-->
        <div class="goods-item" v-for="cart in cartData">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="col-md-1 car-goods-info">
                <label><input type="checkbox" class="goods-list-item" :value="cart.id"/></label>
              </div>
              <div class="col-md-2 car-goods-info goods-image-column">
                <img class="goods-image"
                     :src="'/static/images/cover_picture/'+cart.parentCategoryId+'/'+cart.goods.categoryId+'/'+cart.goods.id+'/'+cart.goods.url"
                     style="width: 100px; height: 100px;" />
              </div>
              <div class="col-md-3 car-goods-info goods-params">{{cart.goods.goodsName}}</div>
              <div class="col-md-1 car-goods-info goods-price"><span>￥</span><span class="single-price">{{cart.goods.goodsPrice}}</span></div>
              <div class="col-md-2 car-goods-info goods-counts">
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-default car-decrease">-</button>
                  </div>
                  <input type="text" class="form-control goods-count" :value="cart.number">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-default car-add">+</button>
                  </div>
                </div>
              </div>
              <div class="col-md-1 car-goods-info goods-money-count"><span>￥</span><span class="single-total">{{cart.goods.goodsPrice*cart.number}}</span></div>
              <div class="col-md-2 car-goods-info goods-operate">
                <button type="button" class="btn btn-danger item-delete">删除</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-body bottom-menu-include">
          <div class="col-md-1 check-all-bottom bottom-menu">
            <label>
              <input type="checkbox" id="checked-all-bottom" />
              <span id="checkAllBottom">全选</span>
            </label>
          </div>
          <div class="col-md-1 bottom-menu">
				<span id="deleteMulty">
						删除
				</span>
          </div>
          <div class="col-md-4 bottom-menu">

          </div>
          <div class="col-md-2 bottom-menu">
            <span>已选商品 <span id="selectGoodsCount">0</span> 件</span>
          </div>
          <div class="col-md-2 bottom-menu">
            <span>合计：<span id="selectGoodsMoney">0.00</span></span>
          </div>
          <div class="col-md-2 bottom-menu submitData submitDis" id="updateMulty">
            结算
          </div>
        </div>
      </div>
      <!--删除确认弹框-->
      <div class="modal fade" tabindex="-1" role="dialog" id="deleteItemTip" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="gridSystemModalLabel">提示</h4>
            </div>
            <div class="modal-body">
              确认删除此商品？
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary deleteSure">确定</button>
            </div>
          </div>
        </div>
      </div>
      <!--是否勾选商品提示-->
      <div class="modal fade" tabindex="-1" role="dialog" id="selectItemTip" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="gridSystemModalLabel2">提示</h4>
            </div>
            <div class="modal-body">
              请选择要删除的商品！
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
            </div>
          </div>
        </div>
      </div>
      <!--批量删除商品-->
      <div class="modal fade" tabindex="-1" role="dialog" id="deleteMultyTip" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="gridSystemModalLabel3">提示</h4>
            </div>
            <div class="modal-body">
              确认删除选择的商品！
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary deleteMultySure">确定</button>
            </div>
          </div>
        </div>
      </div>
      <!--批量购买商品-->
      <div class="modal fade" tabindex="-1" role="dialog" id="updateMultyTip" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="gridSystemModalLabel4">提示</h4>
            </div>
            <div class="modal-body">
              确认购买这些商品？
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary updateMultySure">确定</button>
            </div>
          </div>
        </div>
      </div>


    </div>
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
  import '../../assets/js/cart'
  import axios from 'axios'
  import HomeHead1 from '../home/home.vue'

  export default{
    name:"cart",
    props: {},
    components:{
      homeHead:HomeHead1
    },
    data(){
        return{
          cartData:[]
        }
    },
    mounted:function () {
      this.getData()
    },
    methods:{
      getData:function () {
        var that_ = this;
        axios.get("api/cart/cartView/9/0",{
        })
          .then(function (result) {
            var json=eval(result.data)
            that_.cartData=JSON.parse(json.data)
          })
      }
    }
  }
</script>
<style lang="stylus">
@import "../../assets/css/cartstyle.css";
</style>
