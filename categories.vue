<template>
    <el-card>
  <MyBread firstnav="商品管理" lastnav="商品分类" />
  <el-row>
    <el-col :span='24'>
      <el-button type="success" plain>添加商品</el-button>
    </el-col>
  </el-row>
  <el-table :data="cateList" border>
    <el-table-tree-column levelKey="cat_level" treeKey="cat_id" parentKey="cat_pid" file-icon="icon icon-file"
      folder-icon="icon icon-folder" prop="cat_name" label="分类名称"></el-table-tree-column>
    <el-table-column label="级别">
      <template slot-scope="scope">
        <span v-if="scope.row.cat_level === 0"> 一级</span>
        <span v-else-if="scope.row.cat_level === 1"> 二级</span>
        <span v-else> 三级</span>
      </template>
    </el-table-column>
    <el-table-column abel="是否有效">
      <template slot-scope="scope">
        <span v-if="scope.row.cat_deleted === false"> 有效</span>
        <span v-else> 无效</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- 修改 -->
        <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
        <!-- 删除 -->
        <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
      </template>
    </el-table-column>
  </el-table>

</el-card>

</template>

<script>
export default {
    data() {
        return {
            cateList: []
        }
    },
    methods: {
        async getcateList() {
            var res = await this.$http.get('/categories?type=3')
            var {
                meta,
                data
            } = res.data
            if (meta.status === 200) {
                console.log(data);

                this.cateList = data

            }
        }
    },
    mounted() {
        this.getcateList()
    },
}
</script>

<style>
.el-col {
    margin: 15px 0  
}
</style>
