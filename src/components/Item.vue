<script setup lang="ts">
import { computed } from "vue";
import type { BillItem } from "../App.vue";
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
</script>

<template>
  <div
    class="flex w-full justify-between bg-ctp-mantle px-3 py-2 shadow shadow-ctp-crust"
  >
    <p class="font-bold">{{ item.name }}</p>
    <p class="">{{ formattedAmount }}</p>
  </div>
</template>
