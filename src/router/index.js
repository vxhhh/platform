import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Add from "@/views/Add";
import Update from "@/views/Update";
import ProductManage from "@/views/ProductManage";
import Bar from "@/views/Bar";
import Pie from "@/views/Pie";
import Blogs from "@/views/Blogs"
import BlogDetail from "@/views/BlogDetail"
import BlogEdit from "@/views/BlogEdit"
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
  {
    path: '/home',
    name: 'Home',
    component: Home,
      redirect: '/ProductManage',
      children:[
          {
              path: '/ProductManage',
              name: '商品管理',
              component: ProductManage
          },
          {
              path: '/add',
              name: '添加商品',
              component: Add
          },
          {
              path: '/update',
              name: '编辑商品',
              component: Update
          },
          {
              path: '/bar',
              name: '柱状图',
              component: Bar
          },
          {
              path: '/pie',
              name: '饼状图',
              component: Pie
          },
          {
              path: '/blogs',
              name: '信息列表',
              component: Blogs
          },
          {
              path: '/blog/add',
              name: '发布信息',
              component: BlogEdit,
          },{
              path: '/blog/:blogId',
              name: '信息详情',
              component: BlogDetail
          },
          {
              path: '/blog/:blogId/edit',
              name: '信息编辑',
              component: BlogEdit,
          }
      ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
