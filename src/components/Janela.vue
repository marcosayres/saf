<template>
  <div
    v-if="isVisible"
    class="bg-white p-8 rounded-lg shadow-lg w-3/4 mx-auto my-10"
  >
    <h2 class="text-xl mb-4">Agricultor</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700">Capturar Foto do RG</label>
        <div class="mt-1 block w-full border border-gray-300 rounded-md p-2">
          <video ref="video" class="w-full h-auto" autoplay></video>
          <button
            type="button"
            @click="startCamera"
            class="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
          >
            Iniciar Câmera
          </button>
          <button
            type="button"
            @click="capturePhoto"
            class="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            :disabled="!cameraStarted"
          >
            Capturar Foto
          </button>
          <canvas ref="canvas" class="hidden"></canvas>
          <img
            v-if="rgFotoUrl"
            :src="rgFotoUrl"
            alt="Foto do RG"
            class="mt-4 max-w-full h-auto"
          />
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Nome</label>
        <input
          v-model="agricultor.nome"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">CPF</label>
        <input
          v-model="agricultor.cpf"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">RG</label>
        <input
          v-model="agricultor.rg"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Endereço</label>
        <input
          v-model="agricultor.endereco"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Contato</label>
        <input
          v-model="agricultor.contato"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Município</label>
        <input
          v-model="agricultor.municipio"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Zona</label>
        <input
          v-model="agricultor.zona"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">DAP/CAF</label>
        <input
          v-model="agricultor.dap_caf"
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
  name: "Agricultores",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    agricultorData: {
      type: Object,
      default: () => ({
        nome: "",
        cpf: "",
        rg: "",
        endereco: "",
        contato: "",
        municipio: "",
        zona: "",
        dap_caf: "",
        rgFoto: null,
      }),
    },
  },
  data() {
    return {
      agricultor: { ...this.agricultorData },
      rgFotoUrl: null,
      cameraStarted: false,
    };
  },
  methods: {
    async startCamera() {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
          });
          this.$refs.video.srcObject = stream;
          this.$refs.video.play();
          this.cameraStarted = true;
        } else {
          alert("Dispositivo ou navegador não suporta acesso à câmera.");
        }
      } catch (error) {
        console.error("Erro ao acessar a câmera:", error);
        alert(
          "Não foi possível acessar a câmera. Por favor, verifique as permissões e tente novamente."
        );
      }
    },
    capturePhoto() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      this.rgFotoUrl = canvas.toDataURL("image/png");
      canvas.toBlob((blob) => {
        this.agricultor.rgFoto = blob;
      });
    },
    handleSubmit() {
      // Emitir o evento de salvamento com os dados do agricultor
      this.$emit("save", this.agricultor);
      this.closeModal();
    },
    closeModal() {
      // Emitir o evento para fechar o modal e mostrar o menu
      this.$emit("close");
      this.stopCamera();
    },
    stopCamera() {
      const video = this.$refs.video;
      if (video && video.srcObject) {
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        this.cameraStarted = false;
      }
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
