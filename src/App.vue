<template>
  <div class="wrapper mt-5">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MainView from '@/views/MainView.vue';

export default {
  components: { MainView }
}
</script>

<style>

</style>
