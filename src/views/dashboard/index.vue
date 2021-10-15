<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :xs="12">
        <div class="grid-content" index="/contact">
          <i class="el-icon-message"></i>
          <span slot="title">
            未读询盘<br/><a href="/contact">999</a>
            </span>
        </div>
      </el-col>
      <el-col :span="6" :xs="12">
        <div class="grid-content">
          <i class="el-icon-chat-line-round"></i>
          <span slot="title">工单消息<br/><a href="/worklist">2</a></span>
      
        </div>
      </el-col>
      <el-col :span="6" :xs="12">
        <div class="grid-content">
          <i class="el-icon-shopping-bag-2"></i>
          <span slot="title">产品数量<br/><a href="/product">888</a></span>
          
        </div>
      </el-col>
      <el-col :span="6" :xs="12">
        <div class="grid-content">
          <i class="el-icon-reading"></i>
          <span slot="title">文章数量<br/><a href="/article">666</a></span>
        </div>
      </el-col>
    </el-row>

    <!-- Echarts -->
    <el-row>
      <el-col :xs="4" :sm="6" :md="12" :lg="12" :xl="11">
        <pie-charts/>
      </el-col>
      <el-col :xs="4" :sm="6" :md="12" :lg="12" :xl="11">
        <network-charts/>
      </el-col>
</el-row>
    
    

  </div>
</template>

<script>
import PieCharts from 'components/Echarts/PieCharts'
import NetworkCharts from 'components/Echarts/NetworkCharts'


export default {
  components: {
    PieCharts,
    NetworkCharts
  },
};

</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.grid-content {
  margin-bottom: 20px;
  background-color:#fff;
  padding:10%;
  overflow: hidden;
  transition: all 0.6s;
  cursor: pointer;
  color:#36a3f7;
}
.grid-content:hover{
  background-color:#36a3f7;
  color:#fff;
}
.grid-content i{
  font-size:60px;
  margin-right: 10px;
  float:left;
}
.grid-content span{
  float:right;
  font-size:22px;
  text-align: center;
}
.grid-content span a{
  color:red;
  font-size:30px;
  text-decoration: none;
}
</style>