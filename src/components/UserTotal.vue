<script setup lang="ts">
defineProps<{
  total: number;
}>();
</script>

<template>
  <div class="w-full flex px-3 justify-between">
    <p class="font-bold">Total</p>
    <p class="">${{ total }}</p>
  </div>
</template>
