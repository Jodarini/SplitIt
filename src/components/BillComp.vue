<script setup lang="ts">
import AddButton from "./AddButton.vue";
import AddItem from "./AddItem.vue";
import Item from "./Item.vue";
import Total from "./Total.vue";
</script>

<template>
  <div class="flex flex-col gap-2 m-2">
    <div class="flex gap-2 items-center">
      <h2 class="font-bold">Jose</h2>
      <AddButton />
    </div>
    <Item />
    <AddItem />
    <hr class="border-ctp-text/10" />
    <Total />
  </div>
</template>
