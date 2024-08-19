<script setup lang="ts">
const props = defineProps<{
  total: number;
}>();
const formattedAmount = props.total.toLocaleString("es-CO", {
  style: "currency",
  currency: "COP",
});
</script>

<template>
  <div class="font-bold text-right py-2 px-6">Total: {{ formattedAmount }}</div>
</template>
