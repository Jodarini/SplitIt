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
  const userBill = store.bills.find((bill) => bill.name === props.user.name);

  if (itemPrice.value && itemPrice.value !== 0) {
    if (userBill?.items === null) {
      userBill.items = [
        {
          id: crypto.randomUUID(),
          name: itemName.value!,
          price: itemPrice.value,
        },
      ];
    } else {
      userBill?.items.push({
        id: crypto.randomUUID(),
        name: itemName.value!,
        price: itemPrice.value,
      });
    }
  }
  itemPrice.value = undefined;
  itemName.value = "";
  nameInput.value.focus();
};
</script>

<template>
  <form class="flex w-full flex-col gap-2" @submit.prevent="addItem">
    <div class="flex w-full">
      <input
        type="text"
        placeholder="Nombre"
        class="w-full bg-ctp-mantle/60 px-3 py-2"
        v-model="itemName"
        ref="nameInput"
        required
      />
      <input
        type="number"
        min="0"
        placeholder="Precio"
        class="w-24 bg-ctp-mantle/60 px-3 py-2"
        v-model="itemPrice"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full rounded bg-ctp-mauve p-2 text-ctp-surface0"
    >
      Add item
    </button>
  </form>
</template>
