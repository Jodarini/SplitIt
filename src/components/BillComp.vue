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
  // TODO: add confirmation prompt

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
      <div
        v-if="!showNameInput"
        class="flex w-full justify-between items-center"
        @click="toggleNameInput"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          stroke="currentColor"
          class="text-ctp-subtext1/40"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          data-icon="SvgEdit2"
          aria-hidden="true"
        >
          <path
            d="M20.477 3.523a1.747 1.747 0 00-1.024-.517 1.971 1.971 0 00-.266-.019 1.835 1.835 0 00-1.3.526l-3.8 3.8-3.8 3.8v2.6h2.6l3.8-3.8 3.8-3.8a1.59 1.59 0 00.526-1.225 1.961 1.961 0 00-.536-1.365zm-1.59 9.889v5.4a2.221 2.221 0 01-2.2 2.2h-11.5a2.221 2.221 0 01-2.2-2.2V7.313a2.22 2.22 0 012.2-2.2h5.4"
          ></path>
        </svg>
        <h2 class="w-full p-2 text-xl font-bold text-ctp-mauve">
          {{ user.name }}
        </h2>
        <button
          @click="deleteSplit"
          class="min-w-max text-ctp-red hover:bg-ctp-surface0/50 px-1 rounded"
        >
          Borrar split
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
