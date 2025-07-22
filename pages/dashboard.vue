<template>
    <!-- <div> -->
        <div class="flex">
            <h1>Dashboard</h1>
        </div>
        
        <hr>
        
        <ul class="space-y-4">
            <li>Curso exemplo</li>
        </ul>
    <!-- </div> -->
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: 'auth', // middleware auth to protect this route/page 
});
</script>