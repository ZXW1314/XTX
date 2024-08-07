<script setup lang="ts">
import { useCartStore } from "@/stores/cart.js";

const cartStore = useCartStore();
</script>

<template>
  <div class="cart-list">
    <div class="angle"></div>
    <div class="content">
      <ul>
        <li v-for="item in cartStore.cartList" :key="item.skuId">
          <img :src="item.mainPicture" alt="" />
          <div class="name-specs">
            <p class="ellipsis">{{ item.name }}</p>
            <p class="ellipsis specs">规格：{{ item.attrsText }}</p>
          </div>

          <div class="price-count">
            <p class="price">¥{{ item.price }}</p>
            <p class="count">×{{ item.count }}</p>
          </div>
          <p class="del-good" @click="cartStore.delGood(item.skuId)">×</p>
        </li>
      </ul>
      <div class="statistic">
        <div>
          <p class="all-count">共{{ cartStore.countGood }}件商品</p>
          <p class="all-price">¥{{ cartStore.allPrice.toFixed(2) }}</p>
        </div>
        <RouterLink to="/CartList"><button>去购物车结算</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-list {
  position: absolute;
  bottom: 0;
  right: 15px;
  z-index: -1;
  transition: 0.5s all;

  .angle {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    transform: scale(0.6, 1) rotate(45deg);
    background-color: #fff;
    box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  .content {
    position: absolute;
    top: 10px;
    right: -15px;
    width: 400px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1;

    ul {
      padding: 10px 0;

      li {
        height: 100px;
        margin: 0 10px;
        padding: 10px 0;
        transition: 0.5s all;

        &:hover {
          .del-good {
            opacity: 1;
          }
        }

        ~ li {
          border-top: 1px solid #e4e4e4;
        }

        img {
          float: left;
          height: 80px;
          width: 80px;
          margin-right: 10px;
        }

        .name-specs {
          float: left;
          width: 200px;
          margin-top: 18px;

          p {
            width: 180px;
            line-height: 1.5;
          }

          .specs {
            color: #999;
          }
        }

        .price-count {
          float: left;
          margin-top: 18px;
          line-height: 1.5;

          .price {
            color: $priceColor;
          }

          .count {
            color: #999;
          }
        }

        .del-good {
          float: right;
          margin: 22px 5px 0 0;
          font-size: 20px;
          color: #999;
          opacity: 0;
          transition: 0.5s all;
        }
      }
    }

    .statistic {
      width: 100%;
      height: 80px;
      background-color: #f8f8f8;

      div {
        float: left;
        padding: 20px 0 0 20px;
        line-height: 1.5;

        .all-count {
          color: #999;
        }

        .all-price {
          font-size: 18px;
          color: $priceColor;
        }
      }

      button {
        float: right;
        width: 100px;
        height: 40px;
        margin: 23px 20px 0 0;
        background-color: $xtxColor;
        border: 1px solid $xtxColor;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
}
</style>
