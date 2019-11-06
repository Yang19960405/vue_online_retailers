<template>
    <div id="home">
        <home-head></home-head>
        <!-- Start Navigation -->
        <nav class="navbar navbar-default navbar-brand-top bootsnav">
            <!-- End Header Navigation-->
            <div class="container">
                <div style="height: 30px"></div>
                <div id="custom-search-input">
                    <div class="input-group col-md-12">
                        <input type="text" class="search-query form-control"
                               placeholder="Search"/> <span class="input-group-btn">
            <button class="btn btn-danger btn-search" type="button">
              <span class=" glyphicon glyphicon-search"></span>
            </button>
          </span>
                    </div>
                </div>
            </div>

            <div class="container">

                <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp" id="category">
                        <li class="dropdown megamenu-fw" v-for="item in headsearch">
                            <a href="#" class=""
                               data-toggle="dropdown">{{item.title}}
                            </a>

                            <ul class="dropdown-menu megamenu-content" role="menu">
                                <li>
                                    <div class="row">
                                        <div class="col-menu col-md-3" v-for="group in item.groups">
                                            <h6 class="title">{{group.groupName}}
                                            </h6>
                                            <div class="content">
                                                <ul class="menu-col">
                                                    <li v-for="categorie in group.categories"><a
                                                            :href="'/home/product/'+categorie.id+'/9/0'">{{categorie.title}}
                                                    </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- end col-3 -->
                                    </div>
                                    <!-- end row -->
                                </li>
                            </ul>

                        </li>
                    </ul>

                </div>
                <!-- /.navbar-collapse -->

            </div>
        </nav>
        <!-- End Navigation -->

        <div style="margin-top: 20px"></div>

        <div class="clearfix"></div>


        <div class="container">
            <div id="carousel-example-generic" class="carousel slide"
                 data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0"
                        class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides-->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="/static/images/img_fjords_wide.jpg" alt="第一个商品">
                        <div class="carousel-caption"></div>
                    </div>
                    <div class="item">
                        <img src="/static/images/img_nature_wide.jpg" alt="第二个商品">
                        <div class="carousel-caption"></div>
                    </div>
                    <div class="item">
                        <img src="/static/images/img_mountains_wide.jpg" alt="第三个商品">
                        <div class="carousel-caption"></div>
                    </div>
                </div>


                <!-- Controls -->
                <a class="left carousel-control" href="#carousel-example-generic"
                   role="button" data-slide="prev"> <span
                        class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a> <a class="right carousel-control" href="#carousel-example-generic"
                        role="button" data-slide="next"> <span
                    class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>

        <div class="container">
            <h1>热门商品</h1>
            <div class="row" id="hotgoods">
                <div v-for="item in hotgoods">
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail goods-item">
                            <router-link :to="{name:'detail',params:{goodId:item.id}}">
                                <img :src="'/static/images/cover_picture/'+item.category.parentId+'/'+item.categoryId+'/'+item.id+'/'+item.url"
                                     alt="...">
                            </router-link>
                            <div class="caption div-desc" :id="item.id">
                                <h3>{{item.name}}</h3>
                                <p style="font-size:12px; color:dimgray">{{item.description}}</p>
                                <p style="color:red">&yen;{{item.price}}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <!-- Jumbotron -->
            <div>
                <h1>新品推荐</h1>

                <div class="row" id="newgoods">
                    <div v-for="item in newgoods">
                        <div class="col-sm-6 col-md-4">
                            <div class="thumbnail goods-item">
                                <a :href="'/home/productView/'+item.id+''">
                                    <img :src="'/static/images/cover_picture/'+item.category.parentId+'/'+item.categoryId+'/'+item.id+'/'+item.url"
                                         alt="...">
                                </a>
                                <div class="caption div-desc" :id="item.id">
                                    <h3>{{item.name}}</h3>
                                    <p style="font-size:12px; color:dimgray">{{item.description}}</p>
                                    <p style="color:red">&yen;{{item.price}}</p>

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

    <!--<script src="static/js/bootsnav.js"></script>-->
</template>
<script>
    import 'jquery/dist/jquery'
    import 'bootstrap/dist/js/bootstrap'
    import '../../assets/js/bootsnav'
    import '../../assets/js/search'
    import '../../assets/js/login'

    import HomeHead1 from './home.vue'

    export default {
        name: 'index',
        components: {
            homeHead: HomeHead1
        },
        data() {
            return {
                hotgoods: [],
                newgoods: [],
                headsearch: []
            }
        },
        mounted: function () {
            this.getHomeData()

        },
        methods: {
            getHomeData: function () {
                var that = this
                that.$axios.get('api/home/data', {})
                    .then(function (response) {
                        var a = eval(response.data);
                        var json = JSON.parse(a.data)
                        console.log(json)
                        that.hotgoods = json.hotGoods
                        that.newgoods = json.newsGoods
                    })
                    .catch(function (response) {
                        console.log(response);
                    });

                that.$axios.get('api/home/head', {})
                    .then(function (response) {
                        var a = eval(response.data);
                        var json = JSON.parse(a.data)
                        that.headsearch = json
                    })

            }
        }
    }
</script>
<style lang="stylus">
    .container h1
        font-size: 20px;

    .caption
        text-align: center;

    .caption h3
        font-size: 14px;

    #carousel-example-generic img
        width: 100%;


    #header_info a
        color: #C9C9C9;

    #header_info a:hover
        color: #FFF;
        text-decoration: none;

</style>
