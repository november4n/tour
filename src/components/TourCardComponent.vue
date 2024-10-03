<template>
  <router-link :to="`/single/${card.id}`">
    <div class="item-wrapper d-flex flex-column">
      <img :src="require(`@/assets/img/${card.img}`)" class="mb-3" :alt="card.title" />
      <h2>{{ card.title }}</h2>
      <div class="description">{{ card.desc | textFilter}}</div>
      <br>
      <span>Читать далее ...</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  filters: {
    textFilter(text) {
      return text.slice(0, 400) + '...'
    }
  }
}
</script>
