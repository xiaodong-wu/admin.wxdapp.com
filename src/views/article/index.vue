<template>
  <el-table :data="tableData">
    <el-table-column label="序号" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    
      <el-table-column
      prop="title"
      label="文章标题"
      width="220">
    </el-table-column>
    <el-table-column
      prop="thumb"
      label="缩略图"
      width="220">
    </el-table-column>
    <el-table-column
      prop="addtime"
      label="创建时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="updatetime"
      label="更新时间"
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
          title: "以文艺之光 铸时代之魂丨微视频：习近平的“文艺范儿”",
          addtime: "2021-09-10",
          updatetime:"2021-10-10"
        },
        {
          id: "02",
          title: "以文艺之光 铸时代之魂丨微视频：习近平的“文艺范儿”",
          addtime: "2021-09-10",
          updatetime:"2021-10-10"
        },
        {
          id: "03",
          title: "以文艺之光 铸时代之魂丨微视频：习近平的“文艺范儿”",
          addtime: "2021-09-10",
          updatetime:"2021-10-10"
        },
        {
          id: "04",
          title: "以文艺之光 铸时代之魂丨微视频：习近平的“文艺范儿”",
          addtime: "2021-09-10",
          updatetime:"2021-10-10"
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