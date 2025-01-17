<template>
  <div>
    <h1>Your Profile</h1>
    <UserForm />
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