<template>
  <el-table :data="tableData">
    <el-table-column label="序号" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    
      <el-table-column
      prop="name"
      label="栏目名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
      width="180">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "01",
          name: "首页",
          type: "单页面",
        },
        {
          id: "02",
          name: "产品中心",
          type: "列表",
        },
        {
          id: "03",
          name: "新闻中心",
          type: "列表",
        },
        {
          id: "04",
          name: "关于我们",
          type: "单页面",
        },
        ,
        {
          id: "05",
          name: "联系我们",
          type: "单页面",
        },
        {
          id: "06",
          name: "视频中心",
          type: "列表",
        },
        {
          id: "01",
          name: "首页",
          type: "单页面",
        },
        {
          id: "02",
          name: "产品中心",
          type: "列表",
        },
        {
          id: "03",
          name: "新闻中心",
          type: "列表",
        },
        {
          id: "04",
          name: "关于我们",
          type: "单页面",
        },
        ,
        {
          id: "05",
          name: "联系我们",
          type: "单页面",
        },
        {
          id: "06",
          name: "视频中心",
          type: "列表",
        }
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>