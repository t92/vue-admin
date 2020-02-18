<template>
  <div>
    <el-button v-btn-action:timeout="3000" type="primary">Action</el-button>
  </div>
</template>
<script>
import btnAction from '@/directive/v-action/index'
export default {
  name: 'ActionButton',
  directives: {
    btnAction
  },
  data() {
    return {

    }
  }
}
</script>
