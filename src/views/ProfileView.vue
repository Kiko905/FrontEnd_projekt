<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Your Profile</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <UserForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/userStore';
import UserForm from '../components/UserForm.vue';

export default defineComponent({
  components: { UserForm },
  data() {
    return {
      userStore: useUserStore(),
    };
  }
});
</script>