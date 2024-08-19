<script setup lang="ts">
defineProps<{
  total: number;
}>();
</script>

<template>
  <div class="font-bold text-right py-2 px-6">Total: {{ total }}</div>
</template>
