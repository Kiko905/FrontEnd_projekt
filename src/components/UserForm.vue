<template>
  <div class="user-form">
    <h3 class="mb-4">User Form</h3>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" id="name" v-model="formData.name" class="form-control" required>
        <div class="invalid-feedback">
          Please enter your name.
        </div>
      </div>

      <div class="mb-3">
        <label for="age" class="form-label">Age:</label>
        <input type="number" id="age" v-model="formData.age" class="form-control" required>
        <div class="invalid-feedback">
          Please enter your age.
        </div>
      </div>

      <div class="mb-3">
        <label for="weight" class="form-label">Weight:</label>
        <input type="number" id="weight" v-model="formData.weight" class="form-control" required>
        <div class="invalid-feedback">
          Please enter your weight.
        </div>
      </div>

      <div class="mb-3">
        <label for="height" class="form-label">Height:</label>
        <input type="number" id="height" v-model="formData.height" class="form-control" required>
        <div class="invalid-feedback">
          Please enter your height.
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div class="user-details mt-5" v-if="userStore.users.length > 0">
      <h3 class="mb-4">User Details</h3>
      <ul class="list-group">
        <li v-for="(user, index) in userStore.users" :key="index" class="list-group-item">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <strong>Name:</strong> {{ user.name }}<br>
              <strong>Age:</strong> {{ user.age }}<br>
              <strong>Weight:</strong> {{ user.weight }}<br>
              <strong>Height:</strong> {{ user.height }}<br>
              <strong>Progress:</strong> {{ user.progress.completedDays }} / {{ user.progress.totalDays }} days
              <div class="mt-2">
                <button class="btn btn-success btn-sm me-2" @click="incrementUserProgress(index)">Increment Progress</button>
                <button class="btn btn-secondary btn-sm me-2" @click="decrementUserProgress(index)">Decrement Progress</button>
                <button class="btn btn-warning btn-sm me-2" @click="editUser(index)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="removeUser(index)">Remove</button>
              </div>
            </div>
            <TableView :completedDays="user.progress.completedDays" :totalDays="user.progress.totalDays" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/userStore';
import TableView from './TableView.vue';

export default defineComponent({
  components: {
    TableView,
  },
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
    decrementUserProgress(index: number) {
      this.userStore.decrementProgress(index);
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