//商品
<script setup lang="ts">
import { getGoods } from "@/apis/home.js";
import { ref, onMounted } from "vue";

const goodsList = ref();
onMounted(async () => {
  const res = await getGoods();
  goodsList.value = res.data.result;
});
</script>

<template>
  <div style="background-color: #fff">
    <ul class="container">
      <li v-for="item in goodsList" :key="item.id">
        <h3>{{ item.name }}</h3>
        <div class="clearfix">
          <div class="img-large">
            <img v-img-lazy="item.picture" alt="" />
            <div>
              <i>{{ item.name }}馆</i>
              <i>{{ item.saleInfo }}</i>
            </div>
          </div>
          <div class="good clearfix">
            <ul>
              <li v-for="i in item.goods" :key="i.id">
                <img v-img-lazy="i.picture" alt="" />
                <p class="name ellipsis">{{ i.name }}</p>
                <p class="desc ellipsis">{{ i.desc }}</p>
                <p class="price"><i>¥</i>{{ i.price }}</p>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <span></span>
</template>

<style scoped lang="scss">
h3 {
  height: 115px;
  line-height: 115px;
  font-size: 32px;
  font-weight: 400;
}

.img-large {
  position: relative;
  float: left;
  width: 240px;
  height: 610px;
  margin-right: 10px;
  vertical-align: auto;

  div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 66px;
    line-height: 66px;
    color: #fff;
    font-size: 18px;
    z-index: 2;

    i {
      padding: 20px 5px;
      background: rgba(0, 0, 0);
    }

    i:nth-child(2) {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}

.good {
  float: left;

  ul {
    width: 990px;
    height: 610px;

    li {
      float: left;
      width: 240px;
      height: 300px;
      margin: 0 10px 10px 0;
      padding: 20px 30px;
      transition: all 0.5s;
      border-radius: 4px;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 0.2);
      }
    }

    li:nth-child(4n + 4) {
      margin-right: 0;
    }
  }

  p {
    text-align: center;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}

span {
  display: block;
  height: 10px;
}
</style>
