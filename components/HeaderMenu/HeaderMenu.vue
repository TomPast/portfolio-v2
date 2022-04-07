<template>
  <div>
    <div class="header-menu">
      <img class="logo" :src="require(`~/assets/img/logo-tp.svg`)" />
      <div class="nav-items">
        <a href="#home">Home</a>
        <a href="#project">Project</a>
        <a href="#cv">CV</a>
      </div>

      <div class="responsive-button">
        <i class="pi pi-bars" @click="sidebarVisible = true"></i>
      </div>
    </div>
    <Sidebar
      :visible.sync="sidebarVisible"
      position="right"
      dismissable
      class="sidebar"
    >
      <a href="#home" @click="sidebarVisible = false">Home</a>
      <a href="#project" @click="sidebarVisible = false">Project</a>
      <a href="#cv" @click="sidebarVisible = false">CV</a>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from 'primevue/sidebar'

export default {
  name: 'HeaderMenu',
  components: {
    Sidebar,
  },
  data() {
    return {
      mobileMode: false,
      sidebarVisible: false,
    }
  },
  mounted() {
    this.isMobile()
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        this.mobileMode = true
      } else {
        this.mobileMode = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './HeaderMenu.scss';
</style>
