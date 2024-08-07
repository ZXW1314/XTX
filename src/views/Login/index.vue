//登录页
<script setup lang="ts">
import Copyright from "@/components/Copyright.vue";
import { reactive, ref } from "vue";
import type { ComponentSize, FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user.js";
import router from "@/router";
import { useCartStore } from "@/stores/cart.js";

const userStore = useUserStore();
const cartStore = useCartStore();

interface RuleForm {
  name: string;
  password: string;
  agree: boolean;
}

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "heima282",
  password: "hm#qd@23!",
  agree: true,
});

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: "用户不能为空", trigger: "blur" },
    { min: 3, max: 20, message: "Length should be 3 to 20", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, max: 14, message: "密码长度为6-14个字符", trigger: "blur" },
  ],
  agree: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === false) {
          callback(new Error("请勾选协议"));
        } else callback();
      },
    },
  ],
});

//点击登录
const submitForm = async (formEl: FormInstance | undefined) => {
  console.log(3, cartStore.cartList);
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      await userStore.getUserInfo(ruleForm.name, ruleForm.password);
      console.log(3, cartStore.cartList);
      router.replace({ path: "/" });
      ElMessage({
        message: "登录成功",
        type: "success",
      });
    }
  });
};
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="" alt="" />
      </div>
      <RouterLink to="/"
        >进入网站首页
        <i class="iconfont icon-arrow-right-copy-copy"></i>
        <i class="iconfont icon-arrow-right-copy-copy"></i>
      </RouterLink>
    </div>
  </div>
  <div class="login">
    <div class="login-window">
      <p>账号登录</p>
      <i></i>
      <div class="login-form">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="auto"
          :size="formSize"
          status-icon
        >
          <el-form-item label="账号" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" />
          </el-form-item>
          <el-form-item prop="agree" lable-width="22px">
            <el-checkbox size="large" v-model="ruleForm.agree">
              我已同意隐私条款和服务条款
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button class="el-btn" @click="submitForm(ruleFormRef)">
              点击登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <Copyright></Copyright>
</template>

<style scoped lang="scss">
.header {
  height: 132px;
  background-color: #fff;

  .logo {
    float: left;
    width: 200px;
    height: 132px;
    background: url("@/assets/images/logo.png") no-repeat center;
    background-size: 200px;
  }

  a {
    float: right;
    height: 132px;
    line-height: 112px;
    padding-top: 20px;
    font-size: 16px;

    i {
      color: $xtxColor;
    }
  }
}

.login {
  position: relative;
  height: 488px;
  width: 100%;
  background: url("@/assets/images/login-bg.png") no-repeat center;

  .login-window {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(30%);
    width: 380px;
    background-color: #fff;

    p {
      height: 55px;
      line-height: 55px;
      font-size: 18px;
      text-align: center;
    }

    i {
      display: block;
      width: 100%;
      border-bottom: 1px solid #eee;
    }

    .login-form {
      width: 100%;
      padding: 20px;

      .el-btn {
        width: 100%;
        height: 40px;
        font-weight: 700;
        color: #fff;
        background-color: $xtxColor;
      }
    }
  }
}
</style>
