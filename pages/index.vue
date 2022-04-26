<template>
  <div class="page">
    <div class="header"><HeaderMenu /></div>
    <div class="content">
      <IntroPart />
      <AboutMe />
      <ProjectsPart />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  margin: 0;
  background: black;
  color: white;
  font-family: Roboto, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

.content {
  padding: 0 8%;
}

@media screen and (max-width: 800px) {
  .content {
    padding: 0 5%;
  }
}
</style>
