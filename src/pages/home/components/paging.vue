<template>
  <div class="container">
    <h1>搜索结果</h1>
    <div class="row" id="searchgoods">
      <div v-for="item in searchgoods">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail goods-item">
            <router-link :to="{name:'detail',params:{goodId:item.id}}" >
              <img v-lazy="'/static/images/cover_picture/'+item.category.parentId+'/'+item.categoryId+'/'+item.id+'/'+item.url" alt="...">
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
  </div>
</template>
<script>

</script>
<style>

</style>
