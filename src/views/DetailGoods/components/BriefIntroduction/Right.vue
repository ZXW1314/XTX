<!-- eslint-disable @typescript-eslint/no-unused-vars -->
//商品基础介绍右侧部分
<script setup lang="ts">
import { ref, watch } from "vue";
import { getPathMap } from "./Right/getPathMap";
import { updateOptional } from "./Right/updateOptional";
import { initOptional } from "./Right/initOptional";
import { getSelectValues } from "./Right/getSelectValues";
import { ElMessage } from "element-plus";
import { useCartStore } from "@/stores/cart.js";

const props = defineProps({
  goodData: {
    type: Object,
    default: () => ({}),
  },
});

const cartStore = useCartStore();

//商品数量
const countGood = ref(1);
const removeGood = () => {
  if (countGood.value <= 0) return;
  countGood.value--;
};

let goodMap: any;
watch(
  () => props.goodData,
  (newValue) => {
    //生成有效商品对象
    goodMap = getPathMap(newValue.skus);
    console.log(goodMap);
    //初始有效属性
    initOptional(goodMap, newValue.specs);
  },
  {
    once: true,
  }
);

//商品属性选择
const changeSelect = (item: any, i: any) => {
  if (!i.optional) return;
  if (i.selected) i.selected = false;
  else {
    item.values.forEach((element: any) => {
      element.selected = false;
    });
    i.selected = true;
  }
  updateOptional(props.goodData.specs, goodMap);
};

//添加商品到购物车
const addGoodCart = () => {
  //是否属性全选择了
  const selecedValues = getSelectValues(props.goodData.specs);
  const index = selecedValues.findIndex((item: any) => item === undefined);
  if (index != -1) {
    ElMessage.warning("请选择商品规格");
    return;
  }

  if (countGood.value === 0) {
    ElMessage.warning("商品数量不能为0");
    return;
  }

  //商品数量不能超过已有商品数量
  console.log(goodMap[selecedValues.join("-")][0], props.goodData.skus);
  const sku = props.goodData.skus.find(
    (item: any) => item.id === goodMap[selecedValues.join("-")][0]
  );
  if (countGood.value > sku.inventory) {
    ElMessage.warning(`商品数量仅剩${sku.inventory}`);
    return;
  }

  cartStore.addCart({
    id: props.goodData.id,
    name: props.goodData.name,
    mainPicture: props.goodData.mainPictures[0],
    price: props.goodData.price,
    count: countGood.value,
    skuId: sku.id,
    skuSpecs: sku.specs,
    selected: true,
  });

  console.log(cartStore.cartList);
};
</script>
<template>
  <div class="right">
    <h3>{{ goodData.name }}</h3>
    <p class="desc">{{ goodData.desc }}</p>
    <p class="aboutPrice">
      <span class="price"><i>¥</i>{{ goodData.price }}</span>
      <span class="oldPrice"><i>¥</i> {{ goodData.oldPrice }}</span>
    </p>
    <div class="promotion-service">
      <p class="promotion">
        <i>促销</i><span>12月好物放送，App领卷购买直降120元</span>
      </p>
      <p class="service">
        <i>服务</i>
        <span>无忧退货</span>
        <span>快速退款</span>
        <span>免费包邮</span>
        <em>了解详情</em>
      </p>
    </div>
    <div class="specs clearfix" v-for="item in goodData.specs" :key="item.id">
      <span>{{ item.name }}</span>
      <ul>
        <li v-for="i in item.values" :key="i.name">
          <img
            v-if="i.picture"
            :src="i.picture"
            alt=""
            :class="{ active: i.selected, optional: !i.optional }"
            @click="changeSelect(item, i)"
          />
          <i
            v-else
            :class="{ active: i.selected, optional: !i.optional }"
            @click="changeSelect(item, i)"
            >{{ i.name }}</i
          >
        </li>
      </ul>
    </div>
    <div class="count-good clearfix">
      <button
        :class="{ 'remove-optional': countGood <= 0 }"
        @click="removeGood"
      >
        -
      </button>
      <p>{{ countGood }}</p>
      <button @click="countGood++">+</button>
    </div>
    <div class="add-cart" @click="addGoodCart">加入购物车</div>
  </div>
</template>

<style scoped lang="scss">
.right {
  float: left;
  width: 660px;

  h3 {
    padding-top: 30px;
    font-size: 22px;
    font-weight: 400;
  }

  .desc {
    margin-top: 10px;
    color: #999;
  }

  .aboutPrice {
    margin-top: 10px;
    height: 31px;
    line-height: 31px;

    .price {
      margin-right: 10px;
      font-size: 22px;
      color: $priceColor;
    }

    .oldPrice {
      font-size: 16px;
      color: #999;
      text-decoration: line-through;
    }
  }

  .promotion-service {
    width: 500px;
    height: 100px;
    margin-top: 10px;
    padding: 20px 10px;
    background-color: #f5f5f5;
    font-size: 16px;

    i {
      display: inline-block;
      width: 50px;
      color: #999;
    }

    span {
      color: #666;
    }

    .promotion {
      margin-bottom: 20px;
    }

    .service {
      span {
        margin-right: 10px;

        &::before {
          content: "•";
          color: $xtxColor;
          padding-right: 2px;
        }
      }

      em {
        color: $xtxColor;
        font-style: normal;
      }
    }
  }

  .specs {
    margin-top: 20px;

    .active {
      border: 1px solid $xtxColor !important;
    }

    .optional {
      opacity: 0.6;
      border-style: dashed;
      cursor: not-allowed;
    }

    span {
      float: left;
      height: 50px;
      line-height: 50px;
      padding-right: 30px;
    }

    ul {
      float: left;
      width: 600px;

      li {
        float: left;
        margin-right: 10px;

        img {
          height: 50px;
          width: 50px;
          border: 1px solid #e4e4e4;
        }

        i {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          margin: 10px 0;
          border: 1px solid #e4e4e4;
        }
      }
    }
  }

  .count-good {
    margin-top: 20px;

    .remove-optional {
      opacity: 0.6;
      cursor: not-allowed;
    }

    button {
      float: left;
      width: 32px;
      height: 30px;
      font-size: 20px;
      background-color: #f5f5f5;
      border: 1px solid #e4e4e4;
    }

    p {
      float: left;
      height: 30px;
      line-height: 30px;
      width: 90px;
      padding: 0 10px;
      text-align: center;
      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
    }
  }

  .add-cart {
    width: 120px;
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    color: #666;

    &:hover {
      color: $xtxColor;
      border-color: $xtxColor;
      background-color: #e9f8f5;
    }
  }
}
</style>
