<script>
import {ref} from 'vue';
export default {
  setup() {
    const message = ref('Hello Vue 3!');
    const status = ref('pending');
    const tasks = ref(['task1','task2','task3']);
    const link = ref('https://www.google.com');

    const changeStatus = () => {
      if(status.value === 'success'){
        status.value = 'pending';
      }else if(status.value === 'pending'){
        status.value = 'inactive';
      }else{
        status.value = 'success';
      }
    }
    return { message, status, tasks, link, changeStatus }

    
  },
}
</script>
<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold underline">
      {{message}}
    </h1>
    <p v-if = "status === 'success'">You are active</p>
    <p v-else-if = "status === 'pending'">You are pending</p>
    <p v-else>You are inactive</p>
    <ul class="list-disc bg-red-400">
      <li v-for="task in tasks" :key="task">{{task}}</li>
    </ul>
    <a :href="link">Google</a>
    <br>
    <button class="bg-gray-300" @click="changeStatus">Change the status</button>
  </div>
</template>
