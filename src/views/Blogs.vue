<template>
    <div>
        <div class="block">
            <el-timeline>
                <el-timeline-item
                        :timestamp="blog.created"
                        placement="top"
                        :key="blog.id"
                        v-for="blog in blogs"
                >
                    <el-card>
                        <router-link
                                :to="{ name: '信息详情', params: { blogId: blog.id } }"
                        >
                            <h4>{{ blog.title }}</h4>
                        </router-link>
                        <p>{{ blog.description }}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
            <el-pagination
                    class="mpage"
                    background
                    layout="prev, pager, next"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    :total="total"
                    @current-change="page"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blogs",
        data() {
            return {
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,
            };
        },
        methods: {
            page(currentPage) {
                const _this = this;
                axios.get("http://localhost:8181/blogs?currentPage=" + currentPage).then((res) => {
                    console.log(res);
                    _this.blogs = res.data.data.records;
                    _this.currentPage = res.data.data.current;
                    _this.total = res.data.data.total;
                    _this.pagesize = res.data.data.size;
                });
            },
        },
        created() {
            this.page(1);
        },
    };
</script>

<style scoped>
    .mpage {
        margin: 0 auto;
    }
    .block {
        text-align: left;
        width: 70%;
        margin-top: 15px;
    }
</style>