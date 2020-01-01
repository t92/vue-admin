export default {
  data() {
    return {
      apis: {
        list: null,
        add: null,
        edit: null
      },
      tableData: [],
      searchData: {}, // 筛选中的数据
      pagination: { // 分页数据
        page: 1,
        limit: 10
      },
      attach: {}, // 补充数据
      params: {}, // 最终提交数据
      count: 0,
      listLoading: true

    }
  },
  created() {
    this.getList()
  },
  methods: {

    getList() {
      this.params = { ...this.searchData, ...this.pagination, ...this.attach }

      this.apis.list(this.params).then(response => {
        this.tableData = response.data.items
        this.count = response.data.total
        this.listLoading = false
      })
    },
    handleCurrentChange(page) {
      this.pagination.page = page
      this.getList()
    },
    onSearch() {
      this.paination.page = 1
      this.getList()
    }

  }
}
