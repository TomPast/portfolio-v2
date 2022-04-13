<template>
  <div class="about-me-content">
    <div class="about-me-left">
      <h3 class="title">About me</h3>
      <div class="description">
        <p>
          I'm Tom Pastor, a french software engineer open to work as Frontend
          Developer.
        </p>
        <p>
          Passionate about computers since my first computer class in high
          school, I started coding websites for friends. I then entered a
          computer science engineering school to learn and develop my skills.
          Then I joined a software company specialized in Telecom for 1 year, as
          a fullstack developer at the end of my studies. I am now looking for
          new opportunities in
          <span class="emphasize">frontend development</span>.
        </p>
        <p>I am also passionate about drawing, football and basketball.</p>
      </div>
    </div>
    <div class="about-me-right">
      <img
        class="me-image"
        :src="require(`~/assets/img/me.png`)"
        alt="Photo of me"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import './AboutMe.scss';
</style>
