<script setup lang="ts">
import { computed } from "vue";
import type { User } from "./BillComp.vue";

const props = defineProps<{
  total: { total: number; taxTotal: number; tipTotal: number };
}>();

const formattedTip = computed(() =>
  props.total.tipTotal.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }),
);
const formattedTax = computed(() =>
  props.total.taxTotal.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }),
);
const formattedTotal = computed(() =>
  props.total.total.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }),
);
</script>

<template>
  <div class="flex w-full justify-between px-3">
    <p class="font-bold">Tip</p>
    <p class="">{{ formattedTip }}</p>
  </div>
  <div class="flex w-full justify-between px-3">
    <p class="font-bold">Tax</p>
    <p class="">{{ formattedTax }}</p>
  </div>
  <div class="flex w-full justify-between px-3">
    <p class="font-bold">Total del split</p>
    <p class="">{{ formattedTotal }}</p>
  </div>
</template>
