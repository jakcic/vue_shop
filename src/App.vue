<template>
  <div id="app">
      <router-view></router-view>
      
	  <MainTabbar></MainTabbar>
</div>
</template>

<script>
    import MainTabbar from './components/content/mainTabbar/MainTabbr.vue'
    export default {
        name: "App",
        components: {
            MainTabbar,
        },
    };
</script>

<style>
    @import "./assets/css/base.css";
</style>