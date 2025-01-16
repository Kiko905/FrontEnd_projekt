<template>
  <div>
    <h1>Your Profile</h1>
    <UserForm />
    <h2>Progress</h2>
    <p>Days completed: {{ progress.completedDays }} / {{ progress.totalDays }}</p>
    <button @click="incrementProgress">Mark Day as Completed</button>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '../stores/userStore';
import { computed } from 'vue';
import UserForm from '../components/UserForm.vue';

export default {
  components: { UserForm },
  setup() {
    const userStore = useUserStore();
    const progress = computed(() => userStore.progress);
    const incrementProgress = () => userStore.incrementProgress();

    return { progress, incrementProgress };
  },
};
</script>
