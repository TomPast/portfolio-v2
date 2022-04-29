<template>
  <div>
    <div class="contact_part">
      <h4 class="title">Keep in touch.</h4>
      <p class="detail">
        I'm currently specializing in
        <span class="emphasize">Front-end Development</span>. <br />Feel free to
        get in touch and talk more about your projects.
      </p>
      <div class="actions">
        <BaseButton @click.native="redirectToGitHub"> GitHub </BaseButton>
        <BaseButton @click.native="redirectToLinkedin"> Linkedin </BaseButton>
        <BaseButton @click.native="openMail"> Email </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPart',
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
@import './ContactPart.scss';
</style>
