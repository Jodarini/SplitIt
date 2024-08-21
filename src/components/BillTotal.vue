<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  total: { total: number; taxTotal: number; tipTotal: number };
  numberOfItems: number;
}>();

console.log(props.numberOfItems);

const formattedAmount = computed(() =>
  props.total.total.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }),
);
</script>

<template>
  <div class="flex flex-col font-bold">
    <div class="py-2">Número de items: {{ numberOfItems }}</div>
    <div class="py-2">Total: {{ formattedAmount }}</div>
  </div>
</template>
