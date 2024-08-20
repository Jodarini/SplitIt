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

const nameDiv = ref();
const nameInput = ref();
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

const handleKeyDown = (e: KeyboardEvent) => {
  // if (e.key === "Escape") {
  //   showNameInput.value = false;
  // }

  if (e.key === "Enter") {
    showNameInput.value = true;
    nameInput.value.focus();
  }
};

const deleteSplit = () => {
  const indexToRemove = store.bills.findIndex(
    (bill) => bill.id === props.user.id,
  );
  if (indexToRemove !== -1) {
    store.bills.splice(indexToRemove, 1);
  }
};
</script>

<template>
  <div class="m-2 mb-6 flex flex-col gap-2 p-2">
    <div
      ref="nameDiv"
      class="flex items-center justify-between gap-2"
      tabindex="0"
      @keydown="handleKeyDown($event)"
    >
      <div v-if="!showNameInput" class="flex w-full justify-between">
        <h2
          class="w-full p-2 text-xl font-bold text-ctp-mauve"
          @click="toggleNameInput"
        >
          {{ user.name }}
        </h2>
        <button @click="deleteSplit" class="min-w-max text-ctp-red">
          Delete split
        </button>
      </div>

      <form
        v-else
        @submit.prevent="updateUserName"
        class="flex w-full font-bold"
      >
        <input
          ref="nameInput"
          type="text"
          v-model="userName"
          @keydown="handleKeyDown($event)"
          required
          class="w-full bg-ctp-surface0/40 px-2 text-xl"
        />
        <button
          type="submit"
          class="rounded bg-ctp-mauve p-2 text-ctp-surface0"
        >
          Actualizar
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
