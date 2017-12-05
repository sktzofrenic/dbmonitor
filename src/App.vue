<template>
    <div id="app">
        <TopNav></TopNav>
        <div class="sidebar">
            <SideBar></SideBar>
        </div>
        <div class="content" v-if="activeDatabase">
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

import {mapGetters} from 'vuex'

export default {
    name: 'app',
    components: {
        TopNav,
        SideBar,
        ContentTitle,
        ContentBody,
        Modal
    },
    computed: {
        ...mapGetters([
            'activeDatabase'
        ])
    }
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
    position: inherit;
    float: left;
    height: 100vh;
    width: 300px;
    padding-top: 60px;
    height: 100vh;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f3f3f3+0,e6e6e6+100 */
background: #f3f3f3; /* Old browsers */
background: -moz-linear-gradient(top, #f3f3f3 0%, #e6e6e6 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #f3f3f3 0%,#e6e6e6 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #f3f3f3 0%,#e6e6e6 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3f3f3', endColorstr='#e6e6e6',GradientType=0 ); /* IE6-9 */
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
