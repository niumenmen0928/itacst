<template>
  <el-container class="elc">
    <el-header>
      <!-- 渲染顶部 -->
      <Top/>
    </el-header>
    <el-container>
      <!-- 渲染侧边栏 -->
      <SideBar/>
      <el-main>
        <!-- 数据渲染 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Top from "@/layout/top.vue";
import SideBar from "@/layout/sideBar.vue";
export default {
  components: {
    Top,
    SideBar
  },
  beforeCreate() {
    var token = window.sessionStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
      this.$message({
        message: "您还没有登录,请登录",
        type: "info"
      });
    }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
}
.elc {
  height: 100%;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100%;
}

.e-h-tit {
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.e-h-exit {
  text-align: right;
  margin-right: 15px;
}
.e-h-exit a {
  text-decoration: none;
  color: #fff;
}
</style>

