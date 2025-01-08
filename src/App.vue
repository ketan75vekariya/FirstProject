<script setup>
import {ref} from 'vue';

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
    };

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    };

    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
    };

</script>
<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold underline">
      {{message}}
    </h1>
    <br>
    <hr>
    <br>
    <p v-if = "status === 'success'">You are active</p>
    <p v-else-if = "status === 'pending'">You are pending</p>
    <p v-else>You are inactive</p>
    <button class="bg-gray-300 mt-3 mb-3" @click="changeStatus">Change the status</button>
    <br>
    <hr>
    <br>
    <form @submit.prevent="addTask">
      <label for="task" class="mr-3">Add a task</label>
      <input type="text" id="newTask" v-model="newTask" name="newTask" class="border-2 mr-3 border-gray-300"/>
      <button class="bg-gray-300" type="submit">Add</button>
    </form>
    <ul class="list-disc mt-3">
      <li v-for="(task, index) in tasks" :key="task">
        <span>
          {{task}}
        </span>
        <button class="bg-gray-300 ml-4" @click="deleteTask(index)">X</button>
      </li>
    </ul>
    <br>
    <hr>
    <br>
    <a :href="link">Google</a>
    <br>
    <hr>
    <br>
    
  </div>
</template>
