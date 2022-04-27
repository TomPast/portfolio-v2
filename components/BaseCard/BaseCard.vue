<template>
  <div class="card">
    <div v-if="loading" class="custom-skeleton p-4">
      <Skeleton width="100%" height="300px"></Skeleton>
      <div class="flex justify-content-between mt-3">
        <Skeleton width="10rem" height="2rem"></Skeleton>
        <div class="flex justify-content-between">
          <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
          <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
        </div>
      </div>
      <hr />
      <Skeleton class="mt-3" width="100%" height="4rem"></Skeleton>
    </div>
    <a v-if="!loading" :href="project.fields.preview" target="_blank">
      <article class="card">
        <header class="card__thumb">
          <img
            v-if="project.fields.thumbnail"
            :src="'https:' + project.fields.thumbnail.fields.file.url"
          />
        </header>
        <div class="card__body">
          <div class="card__header">
            <h2 class="card__title">{{ project.fields.title }}</h2>
            <div class="card__actions">
              <a :href="project.fields.github" target="_blank"
                ><i class="icon pi pi-github"></i
              ></a>
              <a :href="project.fields.preview" target="_blank"
                ><i class="icon pi pi-arrow-up-right"></i
              ></a>
            </div>
          </div>

          <div class="card__category">
            <Chip
              v-for="item in project.fields.stack"
              :key="item"
              class="card__tech"
              :label="item"
              icon="pi pi-check"
            />
          </div>

          <hr />
          <p class="card__description">
            {{ project.fields.description }}
          </p>
        </div>
      </article>
    </a>
  </div>
</template>

<script>
import Chip from 'primevue/chip'
import Skeleton from 'primevue/skeleton'

export default {
  name: 'BaseCard',
  components: { Chip, Skeleton },
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
    loading: Boolean,
  },
}
</script>

<style lang="scss" scoped>
@import './BaseCard.scss';
</style>
