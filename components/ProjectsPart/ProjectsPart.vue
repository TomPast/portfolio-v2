<template>
  <div class="projects-content">
    <div class="col-1">
      <div class="col-header">
        <h2 class="section-title">Some of my work.</h2>
        <p>Here's some of my projects that I have worked on.</p>
        <a href="">Explore more →</a>
      </div>

      <BaseCard :project="projects[0] || {}" :loading="loading" />
    </div>
    <div class="col-2">
      <BaseCard :project="projects[1] || {}" :loading="loading" />
      <BaseCard :project="projects[2] || {}" :loading="loading" />
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  name: 'ProjectsPart',
  components: {},
  data() {
    return {
      projects: {},
      loading: true,
    }
  },
  async mounted() {
    if (!client) return
    const data = await client.getEntries({
      content_type: 'project',
    })
    this.projects = data.items
    this.loading = false
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import './ProjectsPart.scss';
</style>
