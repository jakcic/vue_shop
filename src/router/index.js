import { createRouter, createWebHashHistory } from 'vue-router'
const Home=() =>import('../views/home/Home')
const Category=() =>import('../views/category/Category')
const Profile=() =>import('../views/profile/Profile')
const ShopCat=() =>import('../views/shopcat/ShopCat')

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'/shopcat',
		component:ShopCat
	},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode:'history'
})

export default router