<template>
  <div
    v-if="isVisible"
    class="bg-white p-8 rounded-lg shadow-lg w-3/4 mx-auto my-10"
  >
    <h2 class="text-xl mb-4">Produtos</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700"
          >Upload da Lista da Conab (PDF)</label
        >
        <input
          @change="handleFileUpload"
          type="file"
          accept="application/pdf"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Nome do Produto</label>
        <input
          v-model="produto.nome"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Categoria</label>
        <input
          v-model="produto.categoria"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Unidade</label>
        <input
          v-model="produto.unidade"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Preço</label>
        <input
          v-model="produto.preco"
          type="number"
          step="0.01"
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
import { PDFDocument } from "pdf-lib";

export default {
  name: "Produtos",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    produtoData: {
      type: Object,
      default: () => ({
        nome: "",
        categoria: "",
        unidade: "",
        preco: "",
        listaConab: null,
      }),
    },
  },
  data() {
    return {
      produto: { ...this.produtoData },
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      this.produto.listaConab = file;
      const text = await this.extractTextFromPDF(file);
      this.processPDFText(text);
    },
    async extractTextFromPDF(file) {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onload = async () => {
          const pdfDoc = await PDFDocument.load(new Uint8Array(reader.result));
          const text = await pdfDoc.getTextContent();
          resolve(text.items.map((item) => item.str).join(" "));
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    },
    async processPDFText(text) {
      const response = await fetch("your-server-endpoint-to-process-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      this.fillForm(data);
    },
    fillForm(data) {
      this.produto.nome = data.nome || "";
      this.produto.categoria = data.categoria || "";
      this.produto.unidade = data.unidade || "";
      this.produto.preco = data.preco || "";
    },
    handleSubmit() {
      // Emitir o evento de salvamento com os dados do produto
      this.$emit("save", this.produto);
      this.closeModal();
    },
    closeModal() {
      // Emitir o evento para fechar o modal e mostrar o menu
      this.$emit("close");
    },
  },
};
</script>
