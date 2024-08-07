<script setup lang="ts">
import { useCartStore } from "@/stores/cart.js";
import { computed } from "vue";

const cartStore = useCartStore();

//全选按钮
const selectedAll = computed(() =>
  cartStore.cartList.every((item: any) => item.selected === true)
);

const changeSeleAll = (sele: Boolean) => {
  cartStore.cartList.forEach((item: any) => (item.selected = sele));
};
</script>

<template>
  <div class="container">
    <div class="list">
      <div class="title">
        <span style="width: 90px">
          <el-checkbox :model-value="selectedAll" @change="changeSeleAll" />
        </span>
        <span style="width: 400px">商品信息</span>
        <span style="width: 220px">单价</span>
        <span style="width: 180px">数量</span>
        <span style="width: 180px">小计</span>
        <span style="width: 140px">操作</span>
      </div>
      <div class="empty-good" v-if="cartStore.cartList.length === 0">
        <el-empty description="购物车列表为空">
          <el-button class="color-btn" type="primary">随便逛逛</el-button>
        </el-empty>
      </div>
      <ul v-else>
        <li v-for="(item, index) in cartStore.cartList" :key="item.skuId">
          <span style="width: 90px; text-align: left">
            <el-checkbox
              :model-value="item.selected"
              @change="cartStore.changeSeleGood(index)"
            />
          </span>
          <span style="width: 400px; text-align: left">
            <img :src="item.mainPicture" alt="" />
            <i>{{ item.name }}</i>
          </span>
          <span style="width: 220px">&yen;{{ (+item.price).toFixed(2) }}</span>
          <span style="width: 180px"
            ><el-input-number
              :model-value="item.count"
              :min="1"
              @change="(value:Number)=>cartStore.changeCountGood(value,index)"
          /></span>
          <span class="price-good" style="width: 180px">
            &yen;{{ ((item.price * 100 * item.count) / 100).toFixed(2) }}
          </span>
          <span class="edit" style="width: 140px">操作</span>
        </li>
      </ul>
    </div>
    <div class="statistic">
      <span>
        共{{ cartStore.countGood }}件商品，已选择{{
          cartStore.countSele
        }}件，商品合计：
      </span>
      <h3>&yen;{{ cartStore.priceSele.toFixed(2) }}</h3>
      <routerLink to="/"><i class="ellipsis">下单结算</i></routerLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  font-size: 16px;

  .list {
    margin-top: 20px;
    padding-left: 30px;
    color: #666;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;

    .title {
      height: 70px;
      line-height: 70px;

      span {
        display: inline-block;
        text-align: center;
      }

      span:nth-child(1) {
        text-align: left;
      }
    }

    .empty-good {
      height: 600px;
      padding-top: 100px;

      .color-btn {
        background-color: $xtxColor;
      }
    }

    ul {
      li {
        height: 70px;
        line-height: 50px;

        span {
          display: inline-block;
          padding: 10px;
          text-align: center;

          &:first-child {
            padding: 10px 0;
          }
        }

        img {
          height: 50px;
          width: 50px;
          margin-right: 10px;
        }

        .price-good {
          color: $priceColor;
        }

        .edit {
          color: $xtxColor;
        }
      }
    }
  }

  .statistic {
    width: 100%;
    height: 80px;
    line-height: 80px;
    margin: 20px 0;
    background-color: #fff;

    span {
      margin: 0 0 0 30px;
    }

    h3 {
      display: inline-block;
      color: $priceColor;
    }

    i {
      float: right;
      width: 100px;
      height: 40px;
      line-height: 40px;
      margin: 20px 30px 0 0;
      background-color: $xtxColor;
      color: #fff;
      text-align: center;
      border-radius: 5px;
    }
  }
}
</style>
