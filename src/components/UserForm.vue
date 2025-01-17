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
          <button @click="incrementUserProgress(index)">Increment Progress</button>
          <button @click="editUser(index)">Edit</button>
          <button @click="removeUser(index)">Remove</button>
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
      editIndex: -1,
    };
  },
  methods: {
    submitForm() {
      if (this.editIndex === -1) {
        this.userStore.addUser(this.formData.name, this.formData.age, this.formData.weight, this.formData.height);
        alert('User added successfully!');
      } else {
        this.userStore.updateUser(this.editIndex, this.formData.name, this.formData.age, this.formData.weight, this.formData.height);
        alert('User updated successfully!');
        this.editIndex = -1;
      }
      this.resetForm();
    },
    incrementUserProgress(index: number) {
      this.userStore.incrementProgress(index);
    },
    editUser(index: number) {
      const user = this.userStore.users[index];
      this.formData.name = user.name;
      this.formData.age = user.age;
      this.formData.weight = user.weight;
      this.formData.height = user.height;
      this.editIndex = index;
    },
    removeUser(index: number) {
      this.userStore.removeUser(index);
    },
    resetForm() {
      this.formData.name = '';
      this.formData.age = 0;
      this.formData.weight = 0;
      this.formData.height = 0;
    },
  },
});
</script>