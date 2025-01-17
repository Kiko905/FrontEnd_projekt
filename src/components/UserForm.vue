<template>
  <div class="user-form">
    <h3>User Form</h3>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" />

      <label for="age">Age:</label>
      <input type="number" id="age" v-model="formData.age" />

      <label for="weight">Weight:</label>
      <input type="number" id="weight" v-model="formData.weight" />

      <label for="height">Height:</label>
      <input type="number" id="height" v-model="formData.height" />

      <button type="submit">Submit</button>
    </form>

    <div class="user-details" v-if="userStore.users.length > 0">
      <h3>User Details</h3>
      <ul>
        <li v-for="(user, index) in userStore.users" :key="index">
          <strong>Name:</strong> {{ user.name }}<br>
          <strong>Age:</strong> {{ user.age }}<br>
          <strong>Weight:</strong> {{ user.weight }}<br>
          <strong>Height:</strong> {{ user.height }}<br>
          <strong>Progress:</strong> {{ user.progress.completedDays }} / {{ user.progress.totalDays }} days
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/userStore';

export default defineComponent({
  data() {
    return {
      userStore: useUserStore(),
      formData: {
        name: '',
        age: 0,
        weight: 0,
        height: 0,
      },
    };
  },
  methods: {
    submitForm() {
      this.userStore.addUser(this.formData.name, this.formData.age, this.formData.weight, this.formData.height);
      alert('User added successfully!');
    },
  },
});
</script>

<style>
.user-form {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.user-form label {
  display: block;
  margin-top: 0.5rem;
}

.user-form input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.user-form button {
  margin-top: 1rem;
  background-color: #1e90ff; /* Dodger blue */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.user-form button:hover {
  background-color: #1c86ee; /* Slightly darker blue */
}

.user-details {
  margin-top: 2rem;
}

.user-details ul {
  list-style: none;
  padding: 0;
}

.user-details li {
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  background-color: #f0f8ff; /* Light blue background */
}
</style>