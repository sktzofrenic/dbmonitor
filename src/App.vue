<template>
    <div id="app">
        <TopNav></TopNav>
        <div class="sidebar">
            <SideBar></SideBar>
        </div>
        <div class="content">
            <ContentTitle></ContentTitle>
            <ContentBody></ContentBody>
        </div>
        <Modal></Modal>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import SideBar from '@/components/SideBar.vue'
import ContentTitle from '@/components/ContentTitle.vue'
import ContentBody from '@/components/ContentBody.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'app',
  components: {
      TopNav,
      SideBar,
      ContentTitle,
      ContentBody,
      Modal
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
    width: 300px;
    padding-top: 60px;
    height: 100vh;
    background: #f3f3f3;
}
.content {
    margin-left: 300px;
    height: 100vh;
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
    width: auto;
    position: relative;
    background: #e6e6e6;
    z-index: 1;
}
</style>
