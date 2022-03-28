<template>
  <div>
    <div class="header-menu">
      <span class="logo">{T}</span>
      <div v-if="!mobileMode" class="nav-items">
        <a href="#home">Home</a>
        <a href="#project">Project</a>
        <a href="#blog">Blog</a>
      </div>

      <div v-if="mobileMode" class="responsive-button">
        <i class="pi pi-bars" @click="sidebarVisible = true"></i>
      </div>
    </div>
    <Sidebar
      :visible.sync="sidebarVisible"
      position="right"
      dismissable
      class="sidebar"
    >
      <a href="#home">Home</a>
      <a href="#project">Project</a>
      <a href="#blog">Blog</a>
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
