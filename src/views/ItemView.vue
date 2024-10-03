<template>
  <div class="col-lg-10 offset-1">
    <img class="mb-4 w-100" :src="require(`@/assets/img/${card.img}`)" alt="" />
    <h2> {{ card.title }} </h2>
    <div class="description">
      {{ card.desc }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    card() {
      return this.$store.getters["getCardById"](this.$route.params.id)
    }
  }
}
</script>
