<template>
  <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required />
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
      
      <label for="message">Message:</label>
      <textarea id="message" v-model="formData.message" required></textarea>
      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
    const formData = reactive({
      name: '',
      email: '',
      message: '',
    });

    const submitForm = () => {
      alert(`Thank you, ${formData.name}. Your message has been sent!`);
    };

    return { formData, submitForm };
  },
};
</script>
