<template>
  <div>
    <div class="contact_part">
      <h3 class="title">Keep in touch.</h3>
      <p class="detail">
        I'm currently specializing in
        <span class="emphasize">Front-end Development</span>. <br />Feel free to
        get in touch and talk more about your projects.
      </p>
      <div class="actions">
        <BaseButton @click.native="redirectToLinkedin"> Linkedin </BaseButton>
        <BaseButton @click.native="openMail"> Email </BaseButton>
        <BaseButton @click.native="openCV"> Resume </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPart',
  methods: {
    redirectToLinkedin() {
      window.open('https://www.linkedin.com/in/tom-pastor/', '_blank')
    },
    openMail() {
      window.location.href = 'mailto:contact@tompastor.fr'
    },
    openCV() {
      window.open('/CV_PASTOR_Tom.pdf', '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
@import './ContactPart.scss';
</style>
