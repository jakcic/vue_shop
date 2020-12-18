<template>
    <div class="tabbar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Tabbar'
    }
</script>

<style>
    .tabbar {
        display: flex;
        /* justify-content: space-around; */
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f2f2f2;
        box-shadow: 0 -1px 3px rgba(100, 100, 100, .2);
    }
</style>