<template>
  <div class="mod_service">
    <div class="container">
      <ul>
        <li>
          <div><a href="#">客户服务</a></div>
          <div class="set_float">
            <div class="icon bounding_box">
              <i class="iconfont icon-kefu"></i>
              <span>在线客服</span>
            </div>
            <div class="icon bounding_box">
              <i class="iconfont icon-wentifankui"></i>
              <span>问题反馈</span>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div><a href="#">关注我们</a></div>
          <div class="set_float">
            <div class="icon bounding_box">
              <i class="iconfont icon-weixingongzhonghao"></i>
              <span>公众号</span>
            </div>
            <div class="icon bounding_box">
              <i class="iconfont icon-xinlangweibo"></i>
              <span>微博</span>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div><a href="#">下载App</a></div>
          <div class="set_float">
            <div class="bounding_box">
              <img src="@/assets/images/qrcode.jpg" alt="" />
            </div>
            <div class="download">
              <span>扫描二维码</span>
              <span>立马下载App</span>
              <em><a href="">下载页面</a></em>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div><a href="#">服务热线</a></div>
          <div class="hot_line">
            <em>400-0000-000</em>
            <span>周一至周日 8：00-18：00</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 底部服务模块
.mod_service {
  height: 290px;
  padding: 60px 0 40px 0;
  background-color: #fff;
}

li {
  float: left;
  height: 190px;
}

li:nth-child(even) {
  border-left: 1px solid #e4e4e4;
  margin: 0 72px;
  font-size: 22px;
}

li:nth-child(odd) {
  overflow: hidden;
  width: 196px;
}

li > div:nth-child(1) {
  margin-bottom: 36px;
  font-size: 18px;
  text-align: center;
}

.set_float div {
  float: left;
}

.bounding_box,
.download {
  float: left;
  width: 90px;
  height: 90px;
  text-align: center;
}

.bounding_box {
  border: 1px solid #e4e4e4;
}

.bounding_box:nth-child(1) {
  margin-right: 16px;
}

.iconfont {
  font-size: 36px;
  color: #666;
}

.icon {
  padding-top: 10px;
}

span {
  display: block;
  font-size: 14px;
  color: #9999b3;
}

img {
  width: 76px;
  height: 76px;
  margin: 7px;
}

.download span:nth-child(1) {
  padding-top: 10px;
}

em {
  display: block;
  font-style: normal;
}

.download em a {
  display: block;
  margin-top: 10px;
  padding: 5px 0;
  background-color: $xtxColor;
  color: #fff;
}

.hot_line {
  text-align: center;
}

.hot_line span {
  font-size: 14px;
}

.hot_line em {
  padding-top: 30px;
  color: #666;
  font-size: 20px;
}

.icon:hover {
  .iconfont {
    color: $xtxColor;
  }
}
</style>
