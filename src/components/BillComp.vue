<script setup lang="ts">
import AddItem from "./AddItem.vue";
import Item from "./Item.vue";
import Total from "./Total.vue";
import type { BillItem } from "../App.vue";
import calculateTotal from "../utils/calculateTotal";

interface Owner {
  id: string;
  name: string;
  items: BillItem[];
}

const props = defineProps<{
  owner: Owner;
}>();

const billTotal = props.owner.items.map((item) => item.price);
</script>

<template>
  <div class="flex flex-col gap-2 m-2 mb-6 p-2">
    <div class="flex gap-2 items-center justify-between">
      <h2 class="font-bold">{{ owner.name }}</h2>
    </div>
    <Item v-for="item in owner.items" :key="item.id" :item="item" />
    <AddItem />
    <hr class="border-ctp-text/10" />
    <Total :total="calculateTotal(billTotal)" />
  </div>
  <hr class="border-ctp-text/30" />
</template>
