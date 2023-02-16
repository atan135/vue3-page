<script setup>
import {ref} from 'vue'
import { showSuccessToast} from 'vant'
defineProps({
})
const items = ref([{ message: '首页', key:'empty' }, { message: 'LocalStorage',key:'for-local-storage' }])
function gotoPage(key){
    /*
    showSuccessToast({
        message: '指向 ' + key,
        position: 'top',
    });
    */
    window.location.hash = '/' + key;
}
</script>

<template>
  <div class="leftpart">
    <div v-for="item in items" v-bind:key="item.key">
      <div class="leftitem" @click="gotoPage(item.key)">
        {{ item.message }}
      </div>
    </div> 
  </div>
</template>

<style scoped>
.leftitem{
    padding: 10px;
    margin-left: 5px;
    margin-top: 5px;
    height: 40px;
    background-color: lightsalmon;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

</style>
