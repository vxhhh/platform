<template>
  <div>
    <div class="mblog">
      <h2>{{ blog.title }}</h2>
      <el-link icon="el-icon-edit" v-if="ownBlog">
        <router-link :to="{ name: '信息编辑', params: { blogId: blog.id } }"
          >编辑</router-link
        >
      </el-link>
      <el-link
        icon="el-icon-delete"
        v-if="ownBlog"
        @click="delblog"
        class="delLink"
      >
        删除
      </el-link>

      <!-- <el-link icon="el-icon-delete" v-if="ownblog" class="linklist">
        <el-button type="danger" round @click="delblog">删除</el-button>
      </el-link> -->
      <el-divider></el-divider>
      <div class="markdown-body" v-html="blog.content"></div>
    </div>
  </div>
</template>

<script>
import "github-markdown-css";
export default {
  name: "BlogDetail",
  data() {
    return {
      blog: {
        id: "",
        title: "",
        content: "",
      },
      ownBlog: false,
    };
  },
  methods: {
    delblog () {
      const blogId = this.$route.params.blogId
      const _this = this
      console.log(blogId)
      if (blogId) {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.axios.post(`http://localhost:8181/blogdel/${blogId}`,null).then(res => {
            this.$message({
              type: 'success',
              message: res.data.data
            });
            _this.$router.push("/blogs")
          })
        }).catch(() => {

          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  },
  created() {
    const _this = this;
    const blogId = this.$route.params.blogId;
    console.log(blogId);
    if (blogId) {
      this.axios.get("http://localhost:8181/blog/" + blogId).then((res) => {
        const blog = res.data.data;
        _this.blog.id = blog.id;
        _this.blog.title = blog.title;

        var MarkdownIt = require("markdown-it");
        var md = new MarkdownIt();
        var result = md.render(blog.content);
        _this.blog.content = result;
          _this.ownBlog = true;
      });
    }
  }
}
</script>

<style scoped>
.mblog {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 700px;
  padding: 20px 15px;
}
.delLink {
  margin: 0 10px;
}
</style>