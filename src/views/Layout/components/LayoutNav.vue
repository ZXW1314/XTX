//首页头部导航
<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();

const confirmEvent = () => {
  userStore.clearUserInfo();
  router.replace({ path: "/login" });
};
</script>

<template>
  <div class="nav">
    <div class="container">
      <template v-if="userStore.userInfo.token">
        <ul>
          <li>
            <RouterLink to="/">
              <i class="iconfont icon-yonghu"></i>
              {{ userStore.userInfo.account }}
            </RouterLink>
          </li>
          <li></li>
          <li>
            <el-popconfirm
              title="确认退出吗?"
              confirm-button-text="确认"
              cancel-button-text="取消"
              @confirm="confirmEvent"
            >
              <template #reference> 退出登录 </template>
            </el-popconfirm>
          </li>
          <li></li>
          <li><RouterLink to="/">帮助中心</RouterLink></li>
          <li></li>
          <li><RouterLink to="/">关于我们</RouterLink></li>
        </ul>
      </template>
      <template v-else
        ><ul>
          <li><RouterLink to="/login">请先登录</RouterLink></li>
          <li></li>
          <li><RouterLink to="/">帮助中心</RouterLink></li>
          <li></li>
          <li><RouterLink to="/">关于我们</RouterLink></li>
        </ul>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  height: 52px;
  background-color: #333333;
  z-index: 2;
}

ul {
  float: right;

  li {
    float: left;
    height: 52px;
    line-height: 52px;
    color: #cdcdcd;

    a {
      color: #cdcdcd;
    }
  }
}

li:nth-child(even) {
  height: 16px;
  margin: 18px 16px;
  border-left: 1px solid #666;
}

.active {
  color: $xtxColor;
}

a {
  display: block;
  height: 50px;
  line-height: 50px;
}
</style>
