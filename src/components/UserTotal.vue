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
  }),
);
</script>

<template>
  <div class="w-full flex px-3 justify-between">
    <p class="font-bold">Total</p>
    <p class="">{{ formattedAmount }}</p>
  </div>
</template>
