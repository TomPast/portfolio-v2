<template>
  <a href="">
    <article class="card">
      <header class="card__thumb">
        <a href="#">
          <img :src="require(`~/assets/img/compteur.png`)" />
        </a>
      </header>
      <div class="card__body">
        <div class="card__header">
          <h2 class="card__title">Tompastor.fr</h2>
          <div class="card__actions">
            <a href="#"><i class="icon pi pi-github"></i></a>
            <a href="#"><i class="icon pi pi-arrow-up-right"></i></a>
          </div>
        </div>

        <div class="card__category">
          <Chip class="card__tech" label="Figma" icon="pi pi-check" />
        </div>

        <hr />
        <p class="card__description">
          Création de la maquette sur Figma Développement du site en HTML CSS et
          Javascript uniquement Mise en ligne du site, hébergé par OVH
        </p>
      </div>
    </article>
  </a>
</template>

<script>
import Chip from 'primevue/chip'

export default {
  name: 'BaseCard',
  components: { Chip },
}
</script>

<style lang="scss" scoped>
@import './BaseCard.scss';
</style>
