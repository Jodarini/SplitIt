<script setup lang="ts">
import { computed, ref } from "vue";
import BillComp from "./components/BillComp.vue";
import BillTotal from "./components/BillTotal.vue";
import { store } from "./store";
import calculateTotal from "./utils/calculateTotal";
import AddUserButton from "./components/AddUserButton.vue";

export interface BillItem {
  id: string;
  name: string;
  price: number;
}

const newTip = ref(store.tip);
const newTax = ref(store.tax);

const total = computed(() => {
  const prices = store.bills.map((bill) => {
    if (bill.items == null) return 0;
    return bill.items.reduce((acc, item) => acc + item.price, 0);
  });
  let total = calculateTotal(prices, store.tax, store.tip);
  return total;
});

const updateTip = () => {
  store.tip = newTip.value;
};

const updateTax = () => {
  store.tax = newTax.value;
};
</script>

<template>
  <div class="bg-ctp-surface0/30 p-2">
    <h1 class="w-full text-2xl font-bold">SplitIt</h1>
  </div>
  <p v-if="store.bills.length === 0" class="m-4 mb-0 bg-ctp-surface0 p-2">
    <b>¡Aún no tienes ningún split! </b>¡Empieza a dividir la cuenta! Escribe el
    nombre del primer <b>split </b>y dale a Crear.
  </p>
  <AddUserButton />

  <BillComp v-for="user in store.bills" :key="user.id" :user />

  <BillTotal :total />

  <div class="flex w-full justify-center gap-1 text-ctp-subtext1">
    <span>Tax(%):</span>
    <input
      type="number"
      class="w-max bg-transparent"
      min="0"
      max="100"
      v-model="newTax"
      @change="updateTax"
    />
    <span>Tip(%):</span>
    <input
      type="number"
      class="w-max bg-transparent"
      min="0"
      max="100"
      v-model="newTip"
      @change="updateTip"
    />
  </div>
</template>
