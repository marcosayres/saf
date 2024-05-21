<template>
  <Janela :isVisible="isVisible" @close="$emit('close')">
    <template #header>
      <h1 class="text-xl font-bold">Gestão de Agricultores</h1>
    </template>
    <template #content>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Upload de PDF</label
          >
          <input
            ref="fileInput"
            type="file"
            @change="handleFileUpload"
            accept="application/pdf"
            class="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Nome completo</label
            >
            <input
              v-model="agricultor.nome"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">CPF</label>
            <input
              v-model="agricultor.cpf"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">RG</label>
            <input
              v-model="agricultor.rg"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Data de expedição do RG</label
            >
            <input
              v-model="agricultor.dataExpedicao"
              type="date"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Data de nascimento</label
            >
            <input
              v-model="agricultor.dataNascimento"
              type="date"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Número da DAP ou CAF</label
            >
            <input
              v-model="agricultor.numeroDAP"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Data de vencimento da DAP ou CAF</label
            >
            <input
              v-model="agricultor.vencimentoDAP"
              type="date"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Endereço</label
            >
            <input
              v-model="agricultor.endereco"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Número de contato</label
            >
            <input
              v-model="agricultor.contato"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Município</label
            >
            <input
              v-model="agricultor.municipio"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Zona</label>
            <select
              v-model="agricultor.zona"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="Rural">Rural</option>
              <option value="Urbana">Urbana</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Enquadramento</label
            >
            <select
              v-model="agricultor.enquadramento"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="agricultor(a) familiar">
                Agricultor(a) familiar
              </option>
              <option value="agricultor(a) assentado(a)">
                Agricultor(a) assentado(a)
              </option>
              <option value="pescador(a) artesanal">
                Pescador(a) artesanal
              </option>
              <option value="indígena">Indígena</option>
              <option value="quilombola">Quilombola</option>
              <option value="extrativista">Extrativista</option>
              <option value="juventude rural">Juventude rural</option>
              <option value="silvicultor(a)">Silvicultor(a)</option>
              <option value="comunidades tradicionais">
                Comunidades tradicionais
              </option>
              <option value="aquicultor(a)">Aquicultor(a)</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
        >
          Salvar
        </button>
      </form>
    </template>
  </Janela>
</template>

<script>
import Janela from "./Janela.vue";

export default {
  name: "Agricultores",
  components: {
    Janela,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      agricultor: {
        nome: "",
        cpf: "",
        rg: "",
        dataExpedicao: "",
        dataNascimento: "",
        numeroDAP: "",
        vencimentoDAP: "",
        endereco: "",
        contato: "",
        municipio: "",
        zona: "Rural",
        enquadramento: "agricultor(a) familiar",
      },
      pdfFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.pdfFile = event.target.files[0];
      console.log("PDF file selected:", this.pdfFile);
      this.preencherDadosAgricultor();
    },
    preencherDadosAgricultor() {
      // Simulando a extração de dados do PDF e preenchendo os campos
      this.agricultor.nome = "João da Silva";
      this.agricultor.cpf = "123.456.789-00";
      this.agricultor.rg = "MG-12.345.678";
      this.agricultor.dataExpedicao = "2023-01-15";
      this.agricultor.dataNascimento = "1980-05-20";
      this.agricultor.numeroDAP = "DAP123456789";
      this.agricultor.vencimentoDAP = "2025-12-31";
      this.agricultor.endereco = "Rua Exemplo, 123, Centro";
      this.agricultor.contato = "99999-9999";
      this.agricultor.municipio = "Cidade Exemplo";
      this.agricultor.zona = "Rural";
      this.agricultor.enquadramento = "agricultor(a) familiar";
    },
    submitForm() {
      if (this.pdfFile) {
        console.log("PDF file:", this.pdfFile);
      }
      console.log("Dados do Agricultor:", this.agricultor);
      this.adicionarAgricultor();
      this.limparFormulario();
    },
    adicionarAgricultor() {
      // Aqui você pode adicionar a lógica para salvar os dados do agricultor e o PDF
      console.log("Agricultor adicionado!");
    },
    limparFormulario() {
      this.agricultor = {
        nome: "",
        cpf: "",
        rg: "",
        dataExpedicao: "",
        dataNascimento: "",
        numeroDAP: "",
        vencimentoDAP: "",
        endereco: "",
        contato: "",
        municipio: "",
        zona: "Rural",
        enquadramento: "agricultor(a) familiar",
      };
      this.pdfFile = null;
      this.$refs.fileInput.value = null; // Limpa o campo de upload de arquivo
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente Agricultores */
</style>
