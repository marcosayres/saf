<template>
  <div
    v-if="isVisible"
    class="bg-white p-8 rounded-lg shadow-lg w-3/4 mx-auto my-10"
  >
    <h2 class="text-xl mb-4">Propostas</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700">Título da Proposta</label>
        <input
          v-model="proposta.titulo"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Descrição</label>
        <textarea
          v-model="proposta.descricao"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Data</label>
        <input
          v-model="proposta.data"
          type="date"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="flex justify-end">
        <button
          type="button"
          @click="closeModal"
          class="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Cancelar
        </button>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Propostas",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    propostaData: {
      type: Object,
      default: () => ({
        titulo: "",
        descricao: "",
        data: "",
      }),
    },
  },
  data() {
    return {
      proposta: { ...this.propostaData },
    };
  },
  methods: {
    handleSubmit() {
      // Emitir o evento de salvamento com os dados da proposta
      this.$emit("save", this.proposta);
      this.closeModal();
    },
    closeModal() {
      // Emitir o evento para fechar o modal e mostrar o menu
      this.$emit("close");
    },
  },
};
</script>
