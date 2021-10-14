<template>
  <el-menu default-active="/dashboard" router>
    <el-menu-item index="/dashboard">
      <i class="el-icon-orange"></i>
      <span slot="title">仪表盘</span>
    </el-menu-item>
    <el-menu-item index="/category">
      <i class="el-icon-ship"></i>
      <span slot="title">导航管理</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-reading"></i>
      <span slot="title">文章管理</span>
    </el-menu-item>
    <el-menu-item index="/product">
      <i class="el-icon-shopping-bag-2"></i>
      <span slot="title">产品管理</span>
    </el-menu-item>
    <el-menu-item index="/block">
      <i class="el-icon-document"></i>
      <span slot="title">区块管理</span>
    </el-menu-item>
    <el-menu-item index="/links">
      <i class="el-icon-link"></i>
      <span slot="title">友情链接</span>
    </el-menu-item>
    <el-menu-item index="/contact">
      <i class="el-icon-message"></i>
      <span slot="title">询盘管理</span>
    </el-menu-item>
    <el-menu-item index="/webset">
      <i class="el-icon-setting"></i>
      <span slot="title">网站设置</span>
    </el-menu-item>

    <el-submenu index="/user">
      <template slot="title">
        <i class="el-icon-warning-outline"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/user">
          <i class="el-icon-user"></i>
          <span>管理员设置</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="/role">
          <i class="el-icon-postcard"></i>
          <span>角色管理</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="/market">
      <template slot="title">
        <i class="el-icon-trophy"></i>
        <span>增值服务</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/market">
          <i class="el-icon-connection"></i>
          <span>服务列表</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="/myservice">
          <i class="el-icon-discount"></i>
          <span>已购服务</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="/worklist">
      <template slot="title">
        <i class="el-icon-chat-line-round"></i>
        <span>工单系统</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/worklist">
          <i class="el-icon-document-checked"></i>
          <span>工单管理</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="/faq">
          <i class="el-icon-coin"></i>
          <span>常见问题</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
  


<style>

</style>

<script>
  export default {
    data() {
      return {};
    },
    methods: {},
  };
</script>