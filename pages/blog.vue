<template>
  <div class="container mx-auto my-10">
    <h1>Nuxt Blog</h1>

    <div id="loading" v-show="isLoad"></div>

    <article v-for="post in posts" :key="post.id" class="my-7 pb-4">
      <h2 class="text-3xl text-gray-700 font-bold mb-3">{{ post.title }}</h2>  
      <p class="mb-3">{{ post.body }}</p>
      <NuxtLink :to="{ name:'post-id', params: { id: post.id }}" class="btn btn-secondary inline-block">Leia +</NuxtLink>
    </article>
  
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';
import { ref } from 'vue'

const posts = ref([])
const isLoad = ref(true);

fetch('https://dummyjson.com/posts/')
  .then(response => response.json())
  .then(json => {
    //console.log(json.posts);
    posts.value = json.posts;
    isLoad.value = false;
    //document.querySelector('#loading').style.display = 'none';
  });
</script>
