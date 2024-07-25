//轮播图前的分类页
<script setup lang="ts">
import { useCategoryStore } from "@/stores/category.js";
import { onUpdated } from "vue";
const categoryStore = useCategoryStore();
onUpdated(() => console.log(categoryStore.categoryList));
</script>

<template>
  <div class="container">
    <div class="category">
      <ul>
        <li
          class="category-one"
          v-for="item in categoryStore.categoryList"
          :key="item.id"
        >
          <h3>{{ item.name }}</h3>
          <h4 class="small" v-for="i in item.children.slice(0, 2)" :key="i.id">
            {{ i.name }}
          </h4>
          <div class="layer">
            <span>分类推荐<em>根据您的购买或浏览记录推荐</em></span>
            <ul>
              <li v-for="i in item.goods" :key="i.id">
                <a href="#">
                  <img :src="i.picture" alt="" />
                  <div>
                    <p class="goods-name ellipsis-2">{{ i.name }}</p>
                    <p class="goods-desc ellipsis">{{ i.desc }}</p>
                    <p class="goods-price"><i>¥</i>{{ i.price }}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
}

.category {
  width: 250px;
  background: rgba(0, 0, 0, 0.8);
  padding-bottom: 5px;
  z-index: 1;

  .category-one {
    height: 55px;
    line-height: 55px;
    padding-left: 40px;

    &:hover {
      background-color: $xtxColor;
      .layer {
        display: block;
      }
    }
  }
}

h3 {
  float: left;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
}

h4 {
  float: left;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  padding-left: 4px;
  font-size: 14px;
}

.layer {
  display: none;
  position: absolute;
  top: 0;
  left: 250px;
  width: 990px;
  height: 500px;
  padding-left: 15px;
  background-color: #f5f5f5;

  span {
    height: 80px;
    line-height: 80px;
    font-weight: 400;
    font-size: 20px;

    em {
      margin-left: 5px;
      font-size: 16px;
      font-style: normal;
      color: #666;
    }
  }

  li {
    float: left;
    width: 310px;
    height: 120px;
    margin: 0 15px 20px 0;
    padding-left: 40px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;

    a {
      display: block;
      padding: 10px;
      height: 100%;
      width: 100%;

      &:hover {
        background-color: #e3f9f4;
      }

      img {
        float: left;
        width: 95px;
        height: 95px;
        margin-right: 10px;
      }

      div {
        float: left;
        width: 135px;
        .goods-name {
          font-size: 16px;
          color: #666;
        }

        p {
          overflow: hidden;
          line-height: 24px;
        }

        .goods-desc {
          color: #999;
        }

        .goods-price {
          font-size: 22px;
          color: $priceColor;
        }
      }
    }
  }
}
</style>
