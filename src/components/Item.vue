<script setup lang="ts">
import type { BillItem } from "../App.vue";
defineProps<{
  item: BillItem;
}>();
</script>

<template>
  <div
    class="w-full flex px-3 py-2 justify-between bg-ctp-mantle shadow shadow-ctp-crust"
  >
    <p class="font-bold">{{ item.name }}</p>
    <p class="">${{ item.price }}</p>
  </div>
</template>
