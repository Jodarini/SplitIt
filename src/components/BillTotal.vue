<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  total: { total: number; taxTotal: number; tipTotal: number };
}>();

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
  <div class="py-2 text-right font-bold">Total: {{ formattedAmount }}</div>
</template>
