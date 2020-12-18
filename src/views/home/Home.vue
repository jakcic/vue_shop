<template>
	<div id="home">
		<Navbar class="nav-home">
			<template v-slot:center>
				购物街
			</template>
		</Navbar>
	</div>
</template>

<script>
	import Navbar from '../../components/common/navbar/Navbar.vue'
export default{
	
	name:'Home',
	components:{
		Navbar
	}
}
</script>

<style scoped>
	.nav-home{
		background-color: var(--color-tint);
		color: #FFFFFF;
	}
</style>
