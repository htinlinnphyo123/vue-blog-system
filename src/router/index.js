import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetail from '../views/PostDetail.vue'
import CreatePost from '../views/CreatePost.vue'
import FilterTags from '../views/FilterTags.vue'
import RealTimeDatabase from '../views/RealTimeDatabase.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/posts',
    redirect : '/'
  },
  {
    path : '/posts/:id',
    name : 'postdetail',
    component : PostDetail,
    props : true
  },
  {
    path : '/create',
    name : 'createPost',
    component : CreatePost
  },
  {
    path : '/tags/:tag',
    name : 'filterTags',
    component : FilterTags,
    props : true
  },
  {
    path : '/realtime',
    name : 'realTime',
    component :RealTimeDatabase
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
