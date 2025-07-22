<template>    
    <div class="bg-gray-200 min-h-screen inset-0 flex content-center">
        <div class="w-34 p-4 h-screen">
            <nav>
                <nuxt-link to="/" class="nav-item">Home</nuxt-link>
                <nuxt-link to="/blog" class="nav-item">Blog</nuxt-link>
                <nuxt-link to="/todos" class="nav-item">Todos</nuxt-link>
                <template v-if="!store.authenticated">
                    <nuxt-link to="/login" class="nav-item">Login</nuxt-link>
                </template>
                <template v-else>
                    <nuxt-link to="/dashboard" class="nav-item">Dashboard</nuxt-link>
                    <nuxt-link to="#" @click="store.logUserOut" class="nav-item">Logout</nuxt-link>
                </template>
            </nav>
        </div>
        <div class="bg-white m-auto p-10 space-y-6 rounded shadow-lg">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
const store = useAuthStore(); // ex. sem desestruturar, somente salvando const "store"
</script>

<style>
@reference "tailwindcss";

body { @apply antialiased font-[Open_Sans] text-gray-700 }
nav { @apply fixed grid gap-1 h-screen text-2xl }
nav .nav-item { @apply flex items-center p-4 bg-blue-200 hover:bg-blue-300 cursor-pointer }
h1 { @apply text-3xl font-semibold text-blue-500 }
h1.post-title { @apply text-6xl text-gray-700 }
h2 { @apply text-3xl font-semibold }
.section-title { @apply text-2xl font-bold text-blue-500 }

.btn { @apply rounded p-3 hover:shadow-lg hover:shadow-blue-400/40 cursor-pointer }
.btn-primary { @apply bg-blue-500 text-white }
.btn-secondary { @apply text-blue-500 border-2 font-bold }
input:not([type="checkbox"]) { @apply w-full border border-gray-400 rounded mt-1 p-3 focus:outline-3 focus:outline-blue-300 }
#loading { @apply size-16 my-4 mx-auto border-7 border-gray-200 rounded-full border-t-blue-500 animate-spin }
</style>