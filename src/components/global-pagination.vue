<template>
  <div class="global-pagination text-right py-4">
    <el-pagination
      background
      hide-on-single-page
      layout="prev,pager,next"
      :total="total"
      :current-page="currentPage"
      @current-change="handlePageChange">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "GlobalPagination",
    props: {
      value: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        currentPage: this.value
      }
    },
    watch: {
      value() {
        this.currentPage = this.value;
      }
    },
    methods: {
      handlePageChange(page) {
        this.currentPage = page;
        this.$emit('input', this.currentPage);
        this.$emit('on-change', this.currentPage);
      }
    }
  }
</script>

<style lang="scss">
  .global-pagination {
    .el-pagination {
      padding-left: 0;
      padding-right: 0;
      margin-left: -5px;
      margin-right: -5px;

      &.is-background {
        .btn-next,
        .btn-prev,
        .el-pager li {
          min-width: 36px;
          height: 36px;
          line-height: 36px;
        }
      }
    }
  }
</style>