<script setup lang="ts">
import { computed } from "vue";
import BillComp from "./components/BillComp.vue";
import BillTotal from "./components/BillTotal.vue";
import { store } from "./store";
import calculateTotal from "./utils/calculateTotal";

export interface BillItem {
  id: string;
  name: string;
  price: number;
}

const total = computed(() => {
  const prices = store.bills.map((bill) =>
    bill.items.reduce((acc, item) => acc + item.price, 0),
  );
  let currTotal = calculateTotal(prices);
  currTotal = currTotal * (1 + store.tax / 100);
  currTotal = currTotal * (1 + store.tip / 100);
  return currTotal;
});
</script>

<template>
  <div class="bg-ctp-surface0/30 p-2">
    <h1 class="text-2xl font-bold w-full">SplitIt</h1>
  </div>

  <BillComp v-for="user in store.bills" :key="user.id" :user />

  <BillTotal :total />

  <div class="flex gap-1 text-ctp-subtext1 justify-center w-full">
    <span>Tax: {{ store.tax }}% | </span>
    <span>Tip: {{ store.tip }}% </span>
  </div>
</template>

<style scoped></style>
