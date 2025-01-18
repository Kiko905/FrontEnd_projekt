  <template>
    <div class="fitness-plan">
      <img :src="image" alt="Plan Image" class="plan-image" />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p><strong>Price:</strong> {{ price }}</p>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      title: String,
      description: String,
      price: String,
      image: String,
    },
  });
  </script>