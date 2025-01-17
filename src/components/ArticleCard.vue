<template>
  <div class="article-card">
    <h3>{{ title }}</h3>
    <p>{{ summary }}</p>
    <button @click="readMore">Read More</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    title: String,
    summary: String,
  },
  data() {
    return {};
  },
  methods: {
    readMore() {
      this.$router.push({ name: 'ArticleDescription', params: { title: this.title } });
    },
  },
});
</script>