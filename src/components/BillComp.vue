<script setup lang="ts">
import AddItem from "./AddItem.vue";
import Item from "./Item.vue";
import Total from "./UserTotal.vue";
import type { BillItem } from "../App.vue";
import calculateTotal from "../utils/calculateTotal";
import { computed, ref } from "vue";
import { store } from "../store";

export interface User {
  id: string;
  name: string;
  items: BillItem[] | null;
}

const props = defineProps<{
  user: User;
}>();

const showNameInput = ref(false);
const userName = ref<string>(props.user.name);

const billTotal = computed(() => {
  if (props.user.items == null) return [0];
  return props.user.items.map((item) => item.price);
});

const total = computed(() =>
  calculateTotal(billTotal.value, store.tax, store.tip),
);

const toggleNameInput = () => {
  showNameInput.value = !showNameInput.value;
};

const updateUserName = () => {
  props.user.name = userName.value;
  showNameInput.value = false;
};
</script>

<template>
  <div class="m-2 mb-6 flex flex-col gap-2 p-2">
    <div class="flex items-center justify-between gap-2">
      <h2
        v-if="!showNameInput"
        class="w-full p-2 text-xl font-bold text-ctp-mauve"
        @click="toggleNameInput"
      >
        {{ user.name }}
      </h2>
      <form
        v-else
        @submit.prevent="updateUserName"
        class="flex w-full font-bold"
      >
        <input
          type="text"
          v-model="userName"
          required
          class="w-full bg-ctp-surface0/40 px-2 text-xl"
        />
        <button
          type="submit"
          class="rounded bg-ctp-mauve p-2 text-ctp-surface0"
        >
          update
        </button>
      </form>
    </div>
    <Item v-for="item in user.items" :key="item.id" :item="item" />
    <AddItem :user />
    <hr class="border-ctp-text/10" />
    <Total :total />
  </div>
  <hr class="border-ctp-text/30" />
</template>
