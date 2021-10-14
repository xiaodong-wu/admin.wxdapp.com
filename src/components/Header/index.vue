<template>
  <!-- 面包屑 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/dashboard' }">仪表盘</el-breadcrumb-item>
    <el-breadcrumb-item></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.el-breadcrumb {
  line-height: 60px;
}
</style>
