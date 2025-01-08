<script>
export default {
  data() {
    return {
      message: 'Hello Vue 3!',
      status:'pending',
      tasks:['task1','task2','task3'],
      link: 'https://www.google.com',
    }
  }
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
  </div>
</template>
