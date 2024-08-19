<script setup lang="ts">
import { ref } from "vue";
import BillComp from "./components/BillComp.vue";

export interface BillItem {
  id: string;
  name: string;
  price: number;
}
interface Bill {
  id: string;
  name: string;
  items: BillItem[];
}

const billItems = ref<Bill[]>([
  {
    id: crypto.randomUUID(),
    name: "Jose",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Perro",
        price: 3000,
      },
      {
        id: crypto.randomUUID(),
        name: "coca",
        price: 2000,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Jessica",
    items: [
      {
        id: crypto.randomUUID(),
        name: "papas",
        price: 3000,
      },
      {
        id: crypto.randomUUID(),
        name: "pepsi",
        price: 4000,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Alguien",
    items: [
      {
        id: crypto.randomUUID(),
        name: "pizza",
        price: 1000,
      },
      {
        id: crypto.randomUUID(),
        name: "agua",
        price: 2000,
      },
    ],
  },
]);
</script>

<template>
  <div class="bg-ctp-surface0/30 p-2">
    <h1 class="text-2xl font-bold w-full">SplitIt</h1>
  </div>

  <BillComp v-for="owner in billItems" :key="owner.id" :owner />

  <div class="flex gap-1 text-ctp-subtext1 justify-center w-full">
    <span>Tax: 10% | </span>
    <span>Tip: 10%</span>
  </div>
</template>

<style scoped></style>
