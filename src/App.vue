<template>
  <Header />
  <div v-if="showMenu">
    <Menu @open-janela="handleOpenJanela" />
  </div>
  <div v-if="showJanelaAgricultores">
    <Janela
      :isVisible="showJanelaAgricultores"
      @close="handleCloseJanelaAgricultores"
    />
  </div>
  <div v-if="showJanelaInstituicoes">
    <InstituicoesRecebedoras
      :isVisible="showJanelaInstituicoes"
      @close="handleCloseJanelaInstituicoes"
    />
  </div>
  <div v-if="showJanelaPropostas">
    <Propostas
      :isVisible="showJanelaPropostas"
      @close="handleCloseJanelaPropostas"
    />
  </div>
  <div v-if="showJanelaProdutos">
    <Produtos
      :isVisible="showJanelaProdutos"
      @close="handleCloseJanelaProdutos"
    />
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-4 p-5"
    v-if="
      !showMenu &&
      !showJanelaAgricultores &&
      !showJanelaInstituicoes &&
      !showJanelaPropostas &&
      !showJanelaProdutos
    "
  >
    <System
      @click="handleSystemClick('paa-alimentos')"
      icon="<path stroke-linecap='round' stroke-linejoin='round' d='M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64'/>"
      title="PAA Alimentos"
      description="Produtor vendendo mais +"
    />
    <System
      @click="handleSystemClick('paa-leite')"
      icon="<path d='M12 1.75C6.754 1.75 2.5 6.004 2.5 11.25s4.254 9.5 9.5 9.5 9.5-4.254 9.5-9.5S17.246 1.75 12 1.75zm0 17c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z'/>"
      title="PAA Leite"
      description="Programa de Aquisição de Leite"
    />
    <System
      @click="handleSystemClick('distribuicao-sementes')"
      icon="<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/>"
      title="Distribuição de Sementes"
      description="Incentivo à agricultura familiar"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import System from "./components/System.vue";
import Menu from "./components/Menu.vue";
import Janela from "./components/Janela.vue";
import InstituicoesRecebedoras from "./components/InstituicoesRecebedoras.vue";
import Propostas from "./components/Propostas.vue";
import Produtos from "./components/Produtos.vue";

export default {
  components: {
    Header,
    System,
    Menu,
    Janela,
    InstituicoesRecebedoras,
    Propostas,
    Produtos,
  },
  data() {
    return {
      showMenu: false,
      showJanelaAgricultores: false,
      showJanelaInstituicoes: false,
      showJanelaPropostas: false,
      showJanelaProdutos: false,
    };
  },
  methods: {
    handleSystemClick(system) {
      if (system === "paa-alimentos") {
        this.showMenu = true;
      }
    },
    handleOpenJanela(page) {
      this.resetVisibility();
      if (page === "agricultores") {
        this.showJanelaAgricultores = true;
      } else if (page === "instituicoes-recebedoras") {
        this.showJanelaInstituicoes = true;
      } else if (page === "propostas") {
        this.showJanelaPropostas = true;
      } else if (page === "produtos") {
        this.showJanelaProdutos = true;
      }
      this.showMenu = false;
    },
    handleCloseJanelaAgricultores() {
      this.showJanelaAgricultores = false;
      this.showMenu = true;
    },
    handleCloseJanelaInstituicoes() {
      this.showJanelaInstituicoes = false;
      this.showMenu = true;
    },
    handleCloseJanelaPropostas() {
      this.showJanelaPropostas = false;
      this.showMenu = true;
    },
    handleCloseJanelaProdutos() {
      this.showJanelaProdutos = false;
      this.showMenu = true;
    },
    resetVisibility() {
      this.showJanelaAgricultores = false;
      this.showJanelaInstituicoes = false;
      this.showJanelaPropostas = false;
      this.showJanelaProdutos = false;
    },
  },
};
</script>
