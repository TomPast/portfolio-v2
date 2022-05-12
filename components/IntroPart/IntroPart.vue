<template>
  <div class="intro-content">
    <div class="catchup">
      <span class="start-text" data-aos="fade-down" data-aos-delay="100"
        >Hey there! I'm-</span
      >
      <h1 class="title" data-aos="fade-down" data-aos-delay="200">
        Tom Pastor.
      </h1>
    </div>

    <div class="description" data-aos="fade-down" data-aos-delay="300">
      <h2 class="title">Frontend Developer.</h2>
      <p class="text">
        A software engineer based in France with an interest in frontend.
      </p>
    </div>

    <div class="sentences">
      <p data-aos="fade-down" data-aos-delay="400">
        <span class="icon">🚀</span> Open to work
      </p>
      <p data-aos="fade-down" data-aos-delay="500">
        <span class="icon">💻</span> Currently working at Spikeelabs as
        Fullstack developer
      </p>
    </div>

    <div class="actions" data-aos="fade-down" data-aos-delay="550">
      <BaseButton @click.native="redirectToGitHub"> GitHub </BaseButton>
      <BaseButton @click.native="redirectToLinkedin"> Linkedin </BaseButton>
      <BaseButton @click.native="openCV"> Resume </BaseButton>

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
    openCV() {
      window.open('/CV_PASTOR_Tom.pdf', '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
@import './IntroPart.scss';
</style>
