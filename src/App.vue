<template>
  <div id="app" class="app">
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside>
        <nav-menu />
      </el-aside>

      <!-- 右侧容器 -->
      <el-container>
        <!-- 右侧头部 -->
        <el-header>
          <Header />
        </el-header>

        <!-- 右侧主体 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "components/NavMenu";
import Header from "components/Header";

export default {
  name: "app",
  components: {
    NavMenu,
    Header
  },
};
</script>

<style>
.app {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  max-width: 240px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
