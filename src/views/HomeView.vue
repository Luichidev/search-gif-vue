<script setup>
import { ref, onMounted } from 'vue'
import SearchForm from '@/components/SearchForm.vue'
import ListGifs from '@/components/ListGifs.vue'
import { services } from '@/hooks/useFetchGifs.js'

const arrayGifs = ref([])

onMounted(async () => {
  arrayGifs.value = await services.getGifsApi()
})
</script>
<template>
  <SearchForm/>
  <ListGifs :array-gifs="arrayGifs"/>
</template>
