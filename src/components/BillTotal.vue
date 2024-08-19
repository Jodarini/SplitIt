<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  total: number;
}>();

const formattedAmount = computed(() =>
  props.total.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }),
);
</script>

<template>
  <div class="font-bold text-right py-2 px-6">Total: {{ formattedAmount }}</div>
</template>
