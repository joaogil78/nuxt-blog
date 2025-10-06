import { defineStore } from 'pinia';

interface UserPayloadInterface {
    username: string,
    password: string,
}

export const useAuthStore = defineStore('auth', {
    state: () => { // ou pode-se envolver essas chaves em parentese sem usar o return {}
        return {
            authenticated: false,
            loading: false,
        }        
    },
    actions: {
        async authenticateUser({ username, password }: UserPayloadInterface) {
            const { data, status }: any = await useFetch('https://dummyjson.com/auth/login', {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ username, password }),
                //credentials: 'include', // CORS
            });
            this.loading = status;
            
            if(data.value) {
                const token = useCookie('token'); // useCookie new hook nuxt 3
                token.value = data.value?.accessToken; // set token cookie
                console.log('token: ', token.value);
                this.authenticated = true;  
            }
        },
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook nuxt 3
            const router = useRouter();

            this.authenticated = false,
            token.value = null; // clear token cookie
            router.push('/login');
        },
    },
});