<template>
    <div>
        <a 
            v-for="(item, index) in getItems" 
            :key="index"
            :href="`#${item}`">
            {{ item }}, 
        </a>
    </div>
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
      return this.data.replace(/ /g, "").split(",").sort();
    },
  },
};
</script>