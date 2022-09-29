<script setup>
import CardGif from '@/components/CardGif.vue';

defineProps({
  arrayGifs: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <section>
    <div class='card-list'>
      <CardGif 
        v-for="gif in arrayGifs" 
        :key='gif.id'
        :title='gif.title'
        :url='gif.url'
        />
    </div>
  </section>
</template>

<style lang='css' scope>
  .card-list {
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(auto-fit, minmax(var(--gridList-column), 1fr));
    grid-auto-rows: var(--gridList-rows);
    grid-template-rows: masonry;
    grid-auto-flow: row dense;
    grid-gap: var(--gridList-gap, 6px);
    gap: var(--gridList-gap, 6px);
    align-items: center;
  }
</style>