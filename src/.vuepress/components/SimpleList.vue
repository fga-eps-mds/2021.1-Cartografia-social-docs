<template>
  <ul>
    <li v-for="(item, index) in getItems" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: true,
    },
  },
  computed: {
    getItems() {
      return this.data.split(";");
    },
  },
};
</script>