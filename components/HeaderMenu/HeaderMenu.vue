<template>
  <div>
    <div class="header-menu">
      <NuxtLink to="/"><img class="logo" :src="require(`~/assets/img/logo-tp.svg`)" alt="TP Logo" /></NuxtLink>
      <div class="nav-items">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <a href="/CV_PASTOR_Tom.pdf" target="_blank">Resume</a>
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
      <NuxtLink to="/" @click="sidebarVisible = false">Home</NuxtLink>
      <NuxtLink to="/projects" @click="sidebarVisible = false">Projects</NuxtLink>
      <a href="/CV_PASTOR_Tom.pdf" target="_blank" @click="sidebarVisible = false">Resume</a>
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
