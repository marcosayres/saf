<template>
  <div>
    <nav
      class="bg-blue-800 p-4 text-white flex justify-center items-center cursor-pointer"
    >
      <ul class="flex space-x-4">
        <li>
          <a
            href="#"
            @click.prevent="openJanela('agricultores')"
            class="hover:text-gray-300"
            >Agricultores</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="openJanela('instituicoes-recebedoras')"
            class="hover:text-gray-300"
            >Instituições Recebedoras</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="openJanela('propostas')"
            class="hover:text-gray-300"
            >Propostas</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="openJanela('produtos')"
            class="hover:text-gray-300"
            >Produtos</a
          >
        </li>
        <li>
          <router-link to="/entregas" class="hover:text-gray-300"
            >Entregas</router-link
          >
        </li>
        <li>
          <router-link to="/notas-fiscais" class="hover:text-gray-300"
            >Notas Fiscais</router-link
          >
        </li>
        <li>
          <router-link to="/pagamentos" class="hover:text-gray-300"
            >Pagamentos</router-link
          >
        </li>
        <li>
          <router-link to="/indicadores" class="hover:text-gray-300"
            >Indicadores</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuHorizontal",
  methods: {
    openJanela(page) {
      this.$emit("open-janela", page);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  display: inline;
}
</style>
