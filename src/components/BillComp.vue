<script setup lang="ts">
import AddItem from "./AddItem.vue";
import Item from "./Item.vue";
import Total from "./UserTotal.vue";
import type { BillItem } from "../App.vue";
import calculateTotal from "../utils/calculateTotal";
import { computed } from "vue";
import { store } from "../store";

export interface User {
  id: string;
  name: string;
  items: BillItem[];
}

const props = defineProps<{
  user: User;
}>();

const billTotal = computed(() => props.user.items.map((item) => item.price));
const total = computed(() =>
  calculateTotal(billTotal.value, store.tax, store.tip),
);
</script>

<template>
  <div class="m-2 mb-6 flex flex-col gap-2 p-2">
    <div class="flex items-center justify-between gap-2">
      <h2 class="font-bold">{{ user.name }}</h2>
    </div>
    <Item v-for="item in user.items" :key="item.id" :item="item" />
    <AddItem :user />
    <hr class="border-ctp-text/10" />
    <Total :total />
  </div>
  <hr class="border-ctp-text/30" />
</template>
