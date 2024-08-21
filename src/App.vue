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
  <header
    class="bg-ctp-surface0/30 py-2 px-4 flex justify-between items-center"
  >
    <h1 class="w-full text-2xl font-bold">SplitIt</h1>

    <div class="flex gap-2 items-center">
      <div class="flex gap-2">
        <span>Tax(%): </span>
        <input
          type="number"
          class="w-12 bg-ctp-crust/50"
          min="0"
          max="100"
          v-model="newTax"
          @change="updateTax"
        />
      </div>
      <div class="flex gap-2 items-center">
        <span>Tip(%): </span>
        <input
          type="number"
          class="w-12 bg-ctp-crust/50"
          min="0"
          max="100"
          v-model="newTip"
          @change="updateTip"
        />
      </div>
    </div>
  </header>
  <p v-if="store.bills.length === 0" class="m-4 mb-0 bg-ctp-surface0 p-2">
    <b>¡Aún no tienes ningún split! </b>¡Empieza a dividir la cuenta! Escribe el
    nombre del primer <b>split </b>y dale a <b>Crear</b>.
  </p>
  <AddUserButton />

  <BillComp v-for="user in store.bills" :key="user.id" :user />

  <BillTotal v-if="store.bills.length > 0" :total />

  <div class="flex w-full justify-center gap-2 text-ctp-subtext1"></div>
</template>
