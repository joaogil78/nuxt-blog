<template>
    <!-- <div> -->
        <div class="flex">
            <h1>TODOS</h1>
        </div>        
        <hr>
        <ul>
            <li v-for="todo in store.todos" :key="todo.id">
                {{ todo.id }}. {{ todo.title }} <input type="checkbox" v-model="todo.completed">
            </li>
        </ul>
    <!-- </div> -->
</template>

<script setup>
import { useTodosStore } from '~/store/todos.js';

const store = useTodosStore();
await store.fetchTodos();
</script>