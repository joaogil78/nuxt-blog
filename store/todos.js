import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
    state: () => ({
        todos: [],
    }),
    //persist: true,
    actions: {        
        async fetchTodos() {
            if(this.todos.length == 0) { 
                const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos');
                if(data.value) {
                    this.todos = data.value
                }
            }
        },
        /* check(todo, key) {
            this.todos[key].completed = todo.completed;
        } */       
    },
});

/* if (import.meta.hot) { // desabilita hot module
  import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
} */