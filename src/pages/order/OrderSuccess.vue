<template>
    <div>
        <home-head></home-head>
        <div class="container">
            <div class="page-title-normal">
                <h2 class="page-title-h2"><span>check out</span></h2>
            </div>
            <!-- 进度条  -->
            <div class="check-step">
                <ul>
                    <li class="cur"><span>地址确认</span></li>
                    <li><span>检查订单</span></li>
                    <li><span>支付订单</span></li>
                    <li><span>确认订单</span></li>
                </ul>
            </div>

            <div class="order-create">
                <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
                <div class="order-create-main">
                    <h2>恭喜您，下单成功!</h2>
                    <br>
                    <h4>您的订单正在处理中！</h4>
                    <br>
                    <p>
                        <span>订单号：{{orderId}}</span>
                        <span>订单总额：{{orderTotal}}</span>
                    </p>
                    <div class="order-create-btn-wrap">
                        <div class="btn-l-wrap">
                            <router-link class="btn btn--m" to="/cart">购物车清单</router-link>
                        </div>
                        <div class="btn-r-wrap">
                            <router-link class="btn btn--m" to="/">商品清单</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../assets/css/base.css'
    import '../../assets/css/checkout.css'
    import HomeHead1 from '../home/home.vue'

    export default {
        name: "orderSuccess",
        data() {
            return {
                orderId: '',
                orderTotal: 0
            }
        },
        components: {
            homeHead: HomeHead1
        },
        mounted() {
            var orderId = this.$route.query.orderId;
            console.log("orderId:" + orderId);
            if (!orderId) {
                return;
            }
            axios.get("/users/orderDetail", {
                params: {
                    orderId: orderId
                }
            }).then((response) => {
                let res = response.data;
                if (res.status === '0') {
                    this.orderId = orderId;
                    this.orderTotal = res.result.orderTotal;
                }
            });
        }
    }
</script>
