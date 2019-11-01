  <template>
  <div id="home">
    <home-head></home-head>
    <div class="mhc"></div>
    <!-- Start Navigation -->
    <!-- End Navigation -->
    <div style="margin-top: 20px"></div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="ban" id="demo1">
            <div class="ban2" id="ban_pic1">
              <div class="prev1" id="prev1"><img src="/static/images/index_tab_l.png" width="28" height="51"  alt=""></div>
              <div class="next1" id="next1"><img src="/static/images/index_tab_r.png" width="28" height="51"  alt=""></div>
              <ul class="slide" v-model="goodsData">
                <li><a href="javascript:;"><img class="slide1"  width="500" height="500" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_1+''"></a></li>
                <li><a href="javascript:;"><img class="slide2"  width="500" height="500" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_2+''"></a></li>
                <li><a href="javascript:;"><img class="slide3"  width="500" height="500" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_3+''"></a></li>
                <li><a href="javascript:;"><img class="slide4"  width="500" height="500" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_4+''"></a></li>
              </ul>
            </div>
            <div class="min_pic">
              <div class="prev_btn1" id="prev_btn1"><img src="/static/images/feel3.png" width="9" height="18"  alt=""></div>
              <div class="num clearfix" id="ban_num1">
                <ul class="slide">
                  <li><a href="javascript:;"><img class="slide1" width="80" height="80" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_1+''"></a></li>
                  <li><a href="javascript:;"><img class="slide2" width="80" height="80" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_2+''"></a></li>
                  <li><a href="javascript:;"><img class="slide3" width="80" height="80" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_3+''"></a></li>
                  <li><a href="javascript:;"><img class="slide4" width="80" height="80" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_4+''"></a></li>
                </ul>
              </div>
              <div class="next_btn1" id="next_btn1"><img src="/static/images/feel4.png" width="9" height="18"  alt=""></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 divGetId" :id="goodsData.id">
          <ol class="Xcontent13">
            <div class="Xcontent14"><a href="#" id="Xcontent14"><p>{{goodsData.goodsName}}</p></a></div>
            <div class="Xcontent16"><p>{{goodsData.goodsIntroduce}}</p></div>
            <div class="Xcontent17">
              <p class="Xcontent18">售价</p>
              <p class="Xcontent19">￥<span>{{goodsData.goodsPrice}}</span></p>
              <div class="Xcontent20">
                <p class="Xcontent21">促销</p>
                <p class="Xcontent22">无</p>
              </div>
              <div class="Xcontent23">
                <p class="Xcontent24">服务</p>
                <p class="Xcontent25">30天无忧退货&nbsp;&nbsp;&nbsp;&nbsp;       48小时快速退款 &nbsp;&nbsp;&nbsp;&nbsp;        免邮</p>
              </div>

            </div>
            <div class="Xcontent30">
              <p class="Xcontent31">数量</p>
              <div class="Xcontent32"><button type="button" class="btn btn-default" id="count-decrease">-</button></div>
              <form>
                <input class="input" value="1" id="goodCount"></form>
              <div class="Xcontent33"><button type="button" class="btn btn-default" id="count-add">+</button></div>

            </div>
            <div class="Xcontent34"><button type="button" class="btn btn-danger " id="cart-buy" >立即购买</button></div>
            <div class="Xcontent35"> <button type="button" class="btn btn-default cart-add" id="cart-add">加购物车</button></div>

          </ol>

        </div>
      </div>
    </div>
    <div class="pop_up" id="demo2">
      <div class="pop_up_xx"><img src="/static/images/chacha3.png" width="40" height="40"  alt=""></div>
      <div class="pop_up2" id="ban_pic2">
        <div class="prev1" id="prev2"><img src="/static/images/index_tab_l.png" width="28" height="51"  alt=""></div>
        <div class="next1" id="next2"><img src="/static/images/index_tab_r.png" width="28" height="51"  alt=""></div>
        <ul class="slide">
          <li><a href="javascript:;"><img class="slide1" width="500" height="500" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_1+''"></a></li>
          <li><a href="javascript:;"><img class="slide2" width="500" height="500" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_2+''"></a></li>
          <li><a href="javascript:;"><img class="slide3" width="500" height="500" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_3+''"></a></li>
          <li><a href="javascript:;"><img class="slide4" width="500" height="500" alt="" :src="'static/images/slide_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+goodsData.slide_4+''"></a></li>
        </ul>
      </div>
    </div>

    <div class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active" data-id="tabContent1"><a href="#">详情</a></li>
      <li role="presentation" data-id="tabContent2"><a href="#">评价</a></li>
      <li role="presentation" data-id="tabContent3"><a href="#">推荐购买</a></li>
    </ul>
    <div class="tabs-contents">
      <!-- 标题1内容区域 -->
      <div class="tab-content active" id="tabContent1">
        <!--goods display-->
        <div v-if="goodsData.detailPicture.length!=0">
          <p v-for="detailPicture in goodsData.detailPicture">
            <img :src="'/static/images/detail_picture/'+goodsData.category.parentId+'/'+goodsData.categoryId+'/'+goodsData.id+'/'+detailPicture" width="800" height="180" alt="">
          </p>
        </div>
        <div v-else>
          <p><img src="/static/images/no_data.png" width="400" height="180" alt=""></p>
        </div>
      </div>

      <!-- 标题2内容区域 -->
      <div class="tab-content" id="tabContent2">

        <div class="container">
          <div class="row" id="evaluate">
            <div class="col-sm-6 col-md-4" v-for="evaluate in evaluates">
              <div class="thumbnail goods-item">
                <div class="caption div-desc" >
                  <p>{{evaluate.userName}}</p>
                  <li data-default-index="0">
                                    <span>
                                        <img src="/static/images/x2.png" v-for="i in evaluate.grade">
                                        <img src="/static/images/x1.png" v-for="i in 5-evaluate.grade">
                                    </span>
                    <em class="level"></em>
                  </li>
                  <p style="font-size:12px; color:dimgray">{{evaluate.comment}}</p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 标题3内容区域 -->
      <div class="tab-content" id="tabContent3">
        <div class="container">
          <div class="row" id="similars">
            <div class="col-sm-6 col-md-4" v-for="similar in similars">
              <div class="thumbnail goods-item">
                <a :href="'/home/productView/'+similar.id">
                  <img :src="'/static/images/cover_picture/'+similar.category.parentId+'/'+similar.categoryId+'/'+similar.id+'/'+similar.url" alt="...">
                </a>
                <div class="caption div-desc" :id="similar.id">
                  <h3>{{similar.userName}}</h3>
                  <p style="font-size:12px; color:dimgray">{{similar.goodsIntroduce}}</p>
                  <p style="color:red">&yen;{{similar.goodsPrice}}</p>
                  <p>
                      <button type="button" class="btn btn-danger cart-buy" >立即购买</button>
                      <button type="button" class="btn btn-default cart-add">加购物车</button>
                  </p>
                </div>
              </div>

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
  import '../../assets/js/pic_tab'
  import '../../assets/js/detail'
  import '../../assets/js/detail_2'
  import HomeHead1 from '../home/home.vue'
  import axios from 'axios'

  export default{
    name:'detail',
    components:{
      homeHead:HomeHead1
    },
    data(){
        return{
          goodsId:this.$route.params.goodId,
          goodsData:[],
          evaluates:[],
          similars:[]
        }
    },
    mounted:function () {
      this.getDetailData()
    },
    methods:{
      getDetailData:function () {
        var that_ = this;
        console.log(that_.goodsId)
        axios.get("/api/detail/data?gId="+that_.goodsId)
          .then(function (response) {
            var json=eval(response.data);
            that_.goodsData=json.goods4ListAO
            that_.evaluates=json.evaluateAOList
            that_.similars=json.similarList
        })
      }
    }
  }
</script>
<style lang="stylus">
  @import "../../assets/css/detail.css"
  @import "../../assets/css/shouye.css"

</style>
