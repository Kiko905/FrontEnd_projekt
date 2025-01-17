<template>
  <div>
    <h1>{{ title }}</h1>
    <p>This is the detailed description of the article titled "{{ title }}".</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  data() {
    return {
      title: '',
    };
  },
  created() {
    const route = useRoute();
    this.title = route.params.title as string;
  },
});
</script>