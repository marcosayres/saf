<template>
  <div
    @click="handleClick"
    class="cursor-pointer bg-white rounded-lg p-8 shadow-lg max-w-md text-center hover:shadow-xl transition-shadow duration-300"
  >
    <div class="flex items-center justify-center mb-4">
      <div class="bg-blue-100 rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          v-html="icon"
        ></svg>
      </div>
    </div>
    <h2 class="text-2xl font-bold mb-2">{{ title }}</h2>
    <p class="text-gray-700 mb-4">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
/* Adicione qualquer estilo personalizado, se necessário */
</style>
