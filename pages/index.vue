<template>
  <div class="w-1/2 mx-auto my-10">
    <h1 class="text-5xl font-semibold text-violet-700">Nuxt Blog</h1>

    <article v-for="post in posts" :key="post.id" class="my-7 pb-3">
      <h2 class="text-3xl text-violet-750 mb-3">{{ post.title }}</h2>      
      <p class="mb-3">{{ post.body }}</p>
      <NuxtLink :to="{ name:'post-id', params: { id: post.id }}" class="inline-block border px-5 py-3 rounded text-violet-700 font-bold">Leia +</NuxtLink>
    </article>
  
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';
import { ref } from 'vue'

const posts = ref([])

fetch('https://dummyjson.com/posts/')
  .then(response => response.json())
  .then(json => {
    console.log(json.posts);
    posts.value = json.posts;
  });
</script>

<style scoped>
article { border-bottom:1px solid #8200db; }
</style>
