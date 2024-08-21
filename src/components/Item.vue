<script setup lang="ts">
import { computed } from "vue";
import type { BillItem } from "../App.vue";
import { store } from "../store";

const props = defineProps<{
  item: BillItem;
}>();

// TODO: update item functionality (name and price)

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
        class="rounded text-ctp-surface2 hover:text-ctp-red"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          data-icon="SvgX3"
          aria-hidden="true"
        >
          <path d="M8.464 8.464l7.072 7.072m0-7.072l-7.072 7.072"></path>
        </svg>
      </button>
    </div>
  </div>
</template>
