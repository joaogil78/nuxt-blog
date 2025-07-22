import { useAuthStore } from "~/store/auth";

 export default defineNuxtRouteMiddleware((to, from) => {   
  const store = useAuthStore();
  const token = useCookie('token');

  if(token.value) {
    store.authenticated = true;

    if(to?.name == 'login') {      
      return navigateTo('/dashboard');
    }
  }

  if(!token.value && to.meta?.middleware == 'auth') {
    abortNavigation();
    console.log('redirect');
    return navigateTo('/login');
  }
  //console.log('From auth middleware:', from, to);
 });