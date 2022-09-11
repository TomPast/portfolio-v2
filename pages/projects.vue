<template>
  <div class="page">
    <div class="header">
      <HeaderMenu />
    </div>
    <div class="content">
      <ProjectsList />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
}
</script>

<style>
@import '~/assets/scss/fixAOS.scss';
@import '~/assets/scss/scrollbar.scss';

body {
  margin: 0;
  background: black;
  color: white;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif !important;
}

a {
  text-decoration: none;
  color: inherit;
}

.content {
  padding: 0 10%;
}

@media screen and (max-width: 800px) {
  .content {
    padding: 0 5%;
  }
}
</style>
