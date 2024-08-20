<script setup lang="ts">
import { computed } from "vue";
import type { BillItem } from "../App.vue";
import { store } from "../store";

const props = defineProps<{
  item: BillItem;
}>();

const formattedAmount = computed(() => {
  if (props.item.price === undefined) return 0;
  return props.item.price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
});

const deleteItem = () => {
  store.bills.forEach((bill) => {
    const index = bill.items?.findIndex((item) => item.id === props.item.id);

    if (bill.items != null && index !== -1) {
      bill.items.splice(index!, 1);
    }
  });
};
</script>

<template>
  <div
    class="flex w-full justify-between bg-ctp-mantle px-3 py-2 shadow shadow-ctp-crust"
  >
    <p class="font-bold">{{ item.name }}</p>
    <div class="flex gap-1">
      <p class="">{{ formattedAmount }}</p>
      <button
        @click="deleteItem"
        class="rounded px-2 text-ctp-red hover:bg-ctp-surface0"
      >
        X
      </button>
    </div>
  </div>
</template>
