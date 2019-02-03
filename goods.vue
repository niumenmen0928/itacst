<template>
    <el-card>
  <MyBread firstnav="商品管理" lastnav="商品列表" />
  <el-row class="search">
    <el-col :span="8">
      <el-input placeholder="请输入内容" v-model="searchList" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
      </el-input>
    </el-col>
    <el-col :span="16">&nbsp;&nbsp;
      <el-button type="success" plain @click="push">添加用户</el-button>
    </el-col>
  </el-row>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column prop="goods_name" label="商品名称">
    </el-table-column>
    <el-table-column prop="goods_price" label="商品单价(元)">
    </el-table-column>
    <el-table-column prop="goods_weight" label="商品重量">
    </el-table-column>
    <el-table-column prop="add_time" :formatter="formatter" label="创建时间">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- 修改 -->
        <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
        <!-- 删除 -->
        <el-button type="danger" icon="el-icon-delete" size="mini" plain @click="del(scope.row.goods_id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum"
    :page-sizes="[20, 50]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
  </el-pagination>
</el-card>
 
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      searchList: '',
      pagenum: 1,
      pagesize: 20,
      total: 0
    }
  },
  methods: {
    async goodList() {
      var res = await this.$http.get(`/goods?query=${this.searchList}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`)
      var {
        meta,
        data
      } = res.data
      if (meta.status === 200) {
        this.tableData = data.goods
        this.total = data.total
      }
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.goodList();
    },
    handleCurrentChange(value) {
      this.pagenum = value;
      this.goodList();
    },
    searchBtn() {
      this.goodList()
    },
    del(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        var res = await this.$http.delete(`goods/${id}`)
        var {
          meta
        } = res.data
        if (meta.status === 200) {
          this.goodList()
          this.$message({
            message: meta.msg,
            type: 'success'
          })
        } else {
          this.$message.error(meta.msg)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    formatter(row) {
      var date = new Date(row.add_time) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1) + ' '
      var h = (date.getHours() + 1 < 10 ? '0' + (date.getHours() + 1) : date.getHours() + 1) + ':'
      var m = (date.getMinutes() + 1 < 10 ? '0' + (date.getMinutes() + 1) : date.getMinutes() + 1) + ':'
      var s = (date.getSeconds() + 1 < 10 ? '0' + (date.getSeconds() + 1) : date.getSeconds() + 1)
      return Y + M + D + h + m + s
    },
    push() {
        this.$router.push('/goods/add')
    }
  },


  mounted() {
    this.goodList()
  },
}

</script>

<style>
.search {
  margin: 15px 0;
}

</style>
