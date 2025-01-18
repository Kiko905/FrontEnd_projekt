<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ summary }}</p>
      <button class="btn btn-primary" @click="readMore">Read More</button>
    </div>
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
      this.$router.push({ name: 'ArticleDescription', params: { title: this.title } });
    },
  },
});
</script>