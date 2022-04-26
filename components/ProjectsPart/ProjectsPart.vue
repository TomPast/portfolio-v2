<template>
  <div class="projects-content">
    <div class="col-1">
      <div class="col-header">
        <h2 class="section-title">Some of my work.</h2>
        <p>Here's some of my projects that I have worked on.</p>
        <a href="">Explore more →</a>
      </div>

      <BaseCard />
    </div>
    <div class="col-2">
      <BaseCard />
      <BaseCard />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPart',
  components: {},
}
</script>

<style lang="scss" scoped>
@import './ProjectsPart.scss';
</style>
