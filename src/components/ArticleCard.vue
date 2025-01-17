<template>
  <div class="article-card">
    <h3>{{ title }}</h3>
    <p>{{ summary }}</p>
    <button @click="readMore">Read More</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    summary: String,
  },
  methods: {
    readMore() {
      alert('Opening article...');
    },
  },
});
</script>

<style>
.article-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
}
</style>