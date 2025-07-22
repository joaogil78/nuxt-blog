<template>
    <!-- <div> -->
        <h1>Entre na sua conta</h1>
        <hr>
        
        <div>
            <label>Usuário</label>
            <input 
                type="text"
                v-model="user.username"
                required
            />
        </div>
        <div>
            <label>Senha</label>
            <input 
                type="text"
                v-model="user.password"
                required
            />
        </div>
        <div>
            <button class="btn btn-primary" @click.prevent="login">Entrar</button>
        </div>
    <!-- </div> -->
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

// Ex. usando desestruturação do objeto (store). Sem declarar/usar o objeto store, somente suas propriedades (state, action)
const { authenticateUser } = useAuthStore(); // desestrutura a function do action (da store)
const { authenticated } = storeToRefs(useAuthStore()); // desestrutura a var do state (da store) e a torna reativa

const user = ref({
    username: 'emilys',
    password: 'emilyspass',
});
const router = useRouter();

const login = async() => {
    await authenticateUser(user.value);
    if(authenticated) router.push('/dashboard');
}
</script>