<script setup lang="ts">
import AddItem from "./AddItem.vue";
import Item from "./Item.vue";
import Total from "./Total.vue";

const props = defineProps<{
  owner: {
    id: string;
    name: string;
    item: {
      id: string;
      price: number;
    };
  };
}>();
</script>

<template>
  <div class="flex flex-col gap-2 m-2 mb-6 p-2">
    <div class="flex gap-2 items-center">
      <h2 class="font-bold">{{ props.owner.name }}</h2>
    </div>
    <Item />
    <AddItem />
    <hr class="border-ctp-text/10" />
    <Total />
  </div>
  <hr class="border-ctp-text/30" />
</template>
