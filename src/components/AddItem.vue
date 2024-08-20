<script setup lang="ts">
import { ref } from "vue";
import { User } from "./BillComp.vue";
import { store } from "../store";

const props = defineProps<{
  user: User;
}>();

const itemName = ref<string>();
const itemPrice = ref<number>();
const nameInput = ref();
const addItem = () => {
  const theBill = store.bills.find((bill) => bill.name === props.user.name);
  if (itemPrice.value && itemPrice.value !== 0) {
    theBill?.items.push({
      id: crypto.randomUUID(),
      name: itemName.value!,
      price: itemPrice.value,
    });
  }
  itemPrice.value = undefined;
  itemName.value = "";
  nameInput.value.focus();
};
</script>

<template>
  <form class="flex flex-col gap-2 w-full" @submit.prevent="addItem">
    <div class="flex w-full">
      <input
        type="text"
        placeholder="Nombre"
        class="bg-ctp-mantle/60 px-3 py-2 w-full"
        v-model="itemName"
        ref="nameInput"
        required
      />
      <input
        type="number"
        min="0"
        placeholder="Precio"
        class="bg-ctp-mantle/60 px-3 py-2 w-24"
        v-model="itemPrice"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full p-2 bg-ctp-mauve rounded text-ctp-surface0"
    >
      Add item
    </button>
  </form>
</template>
