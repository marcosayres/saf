import { createRouter, createWebHistory } from "vue-router";
import PAAAlimentos from "@/components/PAAAlimentos.vue";
import PAALeite from "@/components/PAALeite.vue";
import DistribuicaoSementes from "@/components/DistribuicaoSementes.vue";

const routes = [
  { path: "/paa-alimentos", component: PAAAlimentos },
  { path: "/paa-leite", component: PAALeite },
  { path: "/distribuicao-sementes", component: DistribuicaoSementes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
