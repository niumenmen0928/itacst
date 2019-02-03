<template>
  <el-row>
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <img src="@/assets/img/logo.png" alt>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple-light e-h-tit">电商后台管理系统</div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple e-h-exit">
        <a href="#" @click.prevent="exit">退出</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    exit() {
      this.$confirm("您将要退出, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.sessionStorage.removeItem('token')
          this.$router.push('/login')
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "退出已取消"
          });
        });
    }
  }
};
</script>

<style>
.el-header {
  line-height: 60px;
  padding: 0;
}
</style>
