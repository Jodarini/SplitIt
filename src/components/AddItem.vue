<script setup lang="ts">
import { ref } from "vue";
import { User } from "./BillComp.vue";
import { store } from "../store";

const props = defineProps<{
  user: User;
}>();

const nombre = ref<string>();
const precio = ref<number>();
const addItem = () => {
  const theBill = store.bills.find((bill) => bill.name === props.user.name);
  if (precio.value && precio.value !== 0) {
    theBill?.items.push({
      id: crypto.randomUUID(),
      name: nombre.value!,
      price: precio.value,
    });
  }
  precio.value = undefined;
  nombre.value = "";
};
</script>

<template>
  <form class="flex gap-1 w-full" @submit.prevent="addItem">
    <input
      type="text"
      placeholder="Nombre"
      class="bg-ctp-mantle/60 px-3 py-2 w-full"
      v-model="nombre"
      required
    />
    <input
      type="number"
      min="0"
      placeholder="Precio"
      class="bg-ctp-mantle/60 px-3 py-2 w-24"
      v-model="precio"
      required
    />
    <button type="submit" style="display: none"></button>
  </form>
</template>
