<template>
	<div class="MainTabbar">
		<Tabbar>
		      <TabbarItem path="/home" activeColor="green">
		        <template v-slot:item-image>
		          <img src="../../../assets/image/tabbar/home.svg" />
		        </template>
		<template v-slot:item-image-active>
		          <img src="../../../assets/image/tabbar/home_active.svg" />
		        </template>
		<template v-slot:item-name>
		          <div>首页</div>
		        </template>
		</TabbarItem>
		<TabbarItem path="/category">
		    <template v-slot:item-image>
		          <img src="../../../assets/image/tabbar/category.svg" />
		        </template>
		    <template v-slot:item-image-active>
		          <img src="../../../assets/image/tabbar/category_active.svg" />
		        </template>
		    <template v-slot:item-name>
		          <div>分类</div>
		        </template>
		</TabbarItem>
		<TabbarItem path="/shopcat">
		    <template v-slot:item-image>
		          <img src="../../../assets/image/tabbar/shopcart.svg" />
		        </template>
		    <template v-slot:item-image-active>
		          <img src="../../../assets/image/tabbar/shopcart_active.svg" />
		        </template>
		    <template v-slot:item-name>
		          <div>购物车</div>
		        </template>
		</TabbarItem>
		<TabbarItem path="/profile">
		    <template v-slot:item-image>
		          <img src="../../../assets/image/tabbar/profile.svg" />
		        </template>
		    <template v-slot:item-image-active>
		          <img src="../../../assets/image/tabbar/profile_active.svg" />
		        </template>
		    <template v-slot:item-name>
		          <div>我的</div>
		        </template>
		</TabbarItem>
		</Tabbar>
	</div>
	
</template>

<script>
	import Tabbar from "../../common/tabbar/Tabbar.vue";
	import TabbarItem from "../../common/tabbar/TabbarItem.vue";
	export default{
		name:'MainTabbar',
		components:{
			Tabbar,
			TabbarItem
		}
	}
</script>
<style></style>