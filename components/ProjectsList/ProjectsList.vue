<template>
  <div class="projects-content">
    <div class="col-1">
      <div class="col-header" data-aos="fade-down" data-aos-delay="100">
        <h2 class="section-title">My projects.</h2>
        <p>Here's some of the projects that I have worked on.</p>
      </div>

      <div v-for="(project, index) in projects" :key="project.fields.title">
        <BaseCard
          v-if="index % 2 == 0"
          :project="project || {}"
          :loading="loading"
          data-aos="fade-down"
          data-aos-delay="200"
        />
      </div>
    </div>
    <div class="col-2">
      <div v-for="(project, index) in projects" :key="project.fields.title">
        <BaseCard
          v-if="index % 2 != 0"
          :project="project || {}"
          :loading="loading"
          data-aos="fade-down"
          data-aos-delay="200"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  name: 'ProjectsList',
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
      order: 'fields.priority',
    })
    this.projects = data.items

    this.projects = data.items
    this.loading = false
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import './ProjectsList.scss';
</style>
