<script setup lang="ts">
import { computed, ref, watch } from "vue";
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

const newTip = ref(localStorage.tip ? JSON.parse(localStorage.tip) : 15);
const newTax = ref(localStorage.tax ? JSON.parse(localStorage.tax) : 8);

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

if (localStorage.bills === undefined || localStorage.bills === "") {
  localStorage.bills = store.bills;
  localStorage.tax = store.tax;
  localStorage.tip = store.tip;
} else {
  store.bills = JSON.parse(localStorage.bills);
  store.tax = JSON.parse(localStorage.tax);
  store.tip = JSON.parse(localStorage.tip);
}

watch(store, () => {
  localStorage.bills = JSON.stringify(store.bills);
  localStorage.tax = JSON.stringify(store.tax);
  localStorage.tip = JSON.stringify(store.tip);
});
</script>

<template>
  <div id="container" class="md:mx-auto md:my-0 md:w-[768px]">
    <header
      class="bg-ctp-surface0/30 py-2 px-4 flex justify-between items-center"
    >
      <h1 class="text-2xl font-bold text-ctp-mauve">SplitIt</h1>

      <div class="flex gap-2 items-center">
        <div class="flex gap-2">
          <span>Tax (%): </span>
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
          <span>Tip (%): </span>
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
    <main>
      <p v-if="store.bills.length === 0" class="m-4 mb-0 bg-ctp-surface0 p-2">
        <b>¡Aún no tienes ningún split! </b>¡Empieza a dividir la cuenta!
        Escribe el nombre del primer <b>split </b>y dale a <b>Crear</b>.
      </p>
      <AddUserButton />

      <BillComp v-for="user in store.bills" :key="user.id" :user />

      <div v-if="store.bills.length > 0" class="flex justify-between px-4">
        <button
          @click="store.bills = []"
          class="min-w-max text-ctp-red hover:bg-ctp-surface0/50 px-1 rounded"
        >
          Borrar todos
        </button>
        <BillTotal :total />
      </div>

      <div class="flex w-full justify-center gap-2 text-ctp-subtext1"></div>
    </main>
  </div>
</template>
