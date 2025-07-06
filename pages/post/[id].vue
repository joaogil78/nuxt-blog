<template>
    <div class="w-1/2 mx-auto my-10">
        <h2 class="text-2xl font-semibold text-violet-700">Nuxt Blog</h2>

        <article class="my-7 pb-3">
        <h1 class="text-6xl text-violet-750 mb-4">{{ post.title }}</h1>      
        <p class="mb-3">{{ post.body }}</p>
        </article>  
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const route = useRoute()
const post = ref('') 

onMounted(() => {
    fetch('https://dummyjson.com/posts/'+route.params.id)
        .then(response => response.json())
        .then(json => post.value = json)
})
</script>

<style scoped>
h1::first-letter { text-transform: capitalize; }
</style>