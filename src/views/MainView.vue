<template>
  <div class="grid d-flex justify-content-between flex-wrap">
    <tour-card-component
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script>
import TourCardComponent from "../components/TourCardComponent.vue";

export default {
  components: { TourCardComponent },
  computed: {
    cards() {
      return this.$store.getters["getTourCards"]
    }
  },
};
</script>
