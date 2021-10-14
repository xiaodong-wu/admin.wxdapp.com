<template>
  <div id="app" class="app">
    <el-container>
    <el-aside>
      <nav-menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view/>
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
    Header,
  }
};
</script>

<style>
.app{
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
}
.el-container {
  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
