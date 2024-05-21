<template>
  <header class="bg-gray-100 flex justify-between items-center p-4">
    <img
      src="@/assets/images/logogovpi.png"
      alt="Logomarca do Governo"
      class="h-24"
    />
    <div class="relative flex items-center space-x-4">
      <div>{{ username }}</div>
      <img
        src="@/assets/images/user.png"
        alt="Avatar do Usuário"
        class="h-10 w-10 rounded-full cursor-pointer"
        @click="toggleDropdown"
      />
      <div
        v-if="dropdownOpen"
        class="absolute right-0 mt-32 w-48 bg-white border rounded shadow-lg py-2 z-10"
      >
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >Perfil</a
        >
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >Sair</a
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      username: "Marcos Aurélio Ayres da Silva",
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector(".relative");
      if (!dropdown.contains(event.target)) {
        this.dropdownOpen = false;
      }
    },
  },
};
</script>

<style scoped>
header {
  background-color: #f8f9fa;
}
</style>
