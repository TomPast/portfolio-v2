<template>
  <div class="intro-content">
    <div class="catchup">
      <span class="start-text">Hey there! I'm-</span>
      <h1 class="title">Tom Pastor.</h1>
    </div>

    <div class="description">
      <h2 class="title">Frontend Developer.</h2>
      <p class="text">
        A software engineer based in France with an interest in frontend.
      </p>
    </div>

    <div class="sentences">
      <p><span class="icon">🚀</span> Open to work</p>
      <p>
        <span class="icon">💻</span> Currently working at Spikeelabs as
        Fullstack developer
      </p>
    </div>

    <div class="actions">
      <BaseButton @click.native="redirectToGitHub"> GitHub </BaseButton>
      <BaseButton @click.native="redirectToLinkedin"> Linkedin </BaseButton>
      <BaseButton @click.native="openMail"> Email </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroPart',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    redirectToGitHub() {
      window.open('https://github.com/TomPast', '_blank')
    },
    redirectToLinkedin() {
      window.open('https://www.linkedin.com/in/tom-pastor/', '_blank')
    },
    openMail() {
      window.location.href = 'mailto:contact@tompastor.fr'
    },
  },
}
</script>

<style lang="scss" scoped>
@import './IntroPart.scss';
</style>
