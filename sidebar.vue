<template>
  <el-aside width="200px">
    <el-menu
      :default-active="path"
      :router="true"
      :unique-opened="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu :index="item1.path" v-for="item1 in meunList" :key="item1.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item1.authName}}</span>
        </template>
        <el-menu-item :index="'/' + item2.path" v-for="item2 in item1.children" :key="item2.id">
          <i class="el-icon-menu"></i>
          {{item2.authName}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      meunList: []
    };
  },
  async mounted() {
    var res = await this.$http.get("/menus");
    var { meta, data } = res.data;
    if (meta.status === 200) {
      this.meunList = data;
    }
  },
  computed: {
    path: function() {
      return this.$route.path;
      console.log(this.$route.path);
    }
  }
};
</script>

<style>
/* 侧边栏 */
.el-menu-vertical-demo {
  height: 100%;
}
</style>
