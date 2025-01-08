<script>
export default {
  data() {
    return {
      message: 'Hello Vue 3!',
      status:'success',
    }
  }
}
</script>
<template>
 <h1 class="text-3xl font-bold underline">
    {{message}}
  </h1>
  <p v-if = "status === 'success'">You are active</p>
  <p v-else>You are inactive</p>
</template>
