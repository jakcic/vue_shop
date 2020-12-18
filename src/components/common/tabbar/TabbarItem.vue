<template>
    <div class="tabbar-item" @click="itemClick" >
        <div v-if="!isActive">
            <slot name="item-image"></slot>
        </div>
       <div v-else>
            <slot name="item-image-active"></slot>
       </div>
        <div :style="activeStyle">
            <slot name="item-name"></slot>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'TabbarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'pink'
			}
		},
		computed:{
			isActive(){
				//route表示当前的路由信息
				return this.$route.path.indexOf(this.path) !== -1;
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{};
			}
		},
		methods:{
			itemClick(){
			//router是全局路由，是router构造方法的实例
				this.$router.replace(this.path)
			}
			
		}
    }
</script>

<style>
    .tabbar-item {
        flex: 1;
        height: 49px;
        text-align: center;
    }
    
    .tabbar-item img {
        height: 24px;
        width: 24px;
    }
    
    .active {
        color: red
    }
</style>