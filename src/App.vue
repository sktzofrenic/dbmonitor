<template>
    <div id="app">
        <TopNav></TopNav>
        <div class="sidebar">
            <SideBar></SideBar>
        </div>
        <div class="content">
            <p>Content</p>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import SideBar from '@/components/SideBar.vue'
export default {
  name: 'app',
  components: {
      TopNav,
      SideBar
  },
}
</script>

<style lang="css" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidebar {
    position: fixed;
    width: 200px;
    padding-top: 60px;
    height: 100vh;
    background: #f3f3f3;
}
.content {
    margin-left: 200px;
    height: 100vh;
    padding-top: 60px;
    width: auto;
    position: relative;
    background: #c3c3c3;
    z-index: 1;
}
</style>
