<template>
  <div
    v-if="isVisible"
    class="bg-white p-8 rounded-lg shadow-lg w-3/4 mx-auto my-10"
  >
    <h2 class="text-xl mb-4">Instituições Recebedoras</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700">Nome da Instituição</label>
        <input
          v-model="instituicao.nome"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">CNPJ</label>
        <input
          v-model="instituicao.cnpj"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Endereço</label>
        <input
          v-model="instituicao.endereco"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Contato</label>
        <input
          v-model="instituicao.contato"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Município</label>
        <input
          v-model="instituicao.municipio"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Responsável</label>
        <input
          v-model="instituicao.responsavel"
          type="text"
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
  name: "InstituicoesRecebedoras",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    instituicaoData: {
      type: Object,
      default: () => ({
        nome: "",
        cnpj: "",
        endereco: "",
        contato: "",
        municipio: "",
        responsavel: "",
      }),
    },
  },
  data() {
    return {
      instituicao: { ...this.instituicaoData },
    };
  },
  methods: {
    handleSubmit() {
      // Emitir o evento de salvamento com os dados da instituição
      this.$emit("save", this.instituicao);
      this.closeModal();
    },
    closeModal() {
      // Emitir o evento para fechar o modal e mostrar o menu
      this.$emit("close");
    },
  },
};
</script>
