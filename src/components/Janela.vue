<template>
  <div v-if="isVisible" class="border p-4 rounded-lg shadow-lg bg-white">
    <header class="mb-4">
      <slot name="header"></slot>
    </header>
    <main class="mb-4">
      <slot name="content"></slot>
    </main>
    <footer class="flex justify-between items-center">
      <slot name="footer"></slot>
      <button
        @click="$emit('close')"
        class="px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Fechar
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Janela",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
