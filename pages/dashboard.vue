<template>
    <!-- <div> -->
        <div class="flex">
            <h1>Dashboard</h1>
        </div>
        
        <hr>
    <!-- </div> -->
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: 'auth', // middleware auth to protect this route/page 
});
</script>