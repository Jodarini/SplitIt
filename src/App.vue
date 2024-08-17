<script setup lang="ts">
import { ref } from "vue";
import BillComp from "./components/BillComp.vue";

const billItems = ref([
  {
    id: crypto.randomUUID(),
    name: "Jose",
    item: {
      id: crypto.randomUUID(),
      price: 3000,
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Jessica",
    item: {
      id: crypto.randomUUID(),
      price: 3000,
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Alguien",
    item: {
      id: crypto.randomUUID(),
      price: 3000,
    },
  },
]);
</script>

<template>
  <div class="bg-ctp-surface0/30 p-2">
    <h1 class="text-2xl font-bold w-full">SplitIt</h1>
  </div>
  <BillComp v-for="owner in billItems" :key="owner.id" :owner="owner" />
</template>

<style scoped></style>
