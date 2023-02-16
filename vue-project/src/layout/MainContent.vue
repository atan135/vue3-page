<script setup>
import {ref} from 'vue'
import { computed } from '@vue/runtime-core';
import EmptyPage from '../views/EmptyPage.vue';
import ForLocalStorage from '../views/ForLocalStorage.vue';
const routes = {
    '/': EmptyPage,
    '/for-local-storage': ForLocalStorage
}
const currentPath = ref(window.location.hash);
window.addEventListener('hashchange', ()=>{
    currentPath.value = window.location.hash;
})
const currentView = computed(()=>{
    return routes[currentPath.value.slice(1) || '/'] || EmptyPage
})
defineProps({
})
</script>

<template>
  <div class="greetings">
    <a href="#/">Home</a>
    <a href="#/for-local-storage">ForLocalStorage</a>
    <a href="#/no-exist-path">Broken link</a>
    <component :is="currentView" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
