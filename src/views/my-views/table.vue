<template>
  <div class="wrapper">

    <el-table
      v-loading="listLoading"
      :data="tableData"
    >
      <el-table-column label="Date" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title" prop="title" min-width="150px" />
      <el-table-column label="Author" prop="author" width="110px" align="center" />
      <el-table-column label="Imp" width="80px">
        <template slot-scope="{row}">
          <svg-icon v-for="n in + row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page.sync="pagination.page"
      :page-size="pagination.limit"
      layout="prev, pager, next, jumper"
      :total="count"
      @current-change="handleCurrentChange"
    />

  </div>
</template>

<script>
import listMixin from '@/mixin/listMixin'
import { fetchList } from '@/api/article'
export default {
  name: 'MyTableMixin',
  mixins: [listMixin],
  data() {
    return {
      apis: {
        list: fetchList
      }

    }
  }
}
</script>

<style>
</style>
