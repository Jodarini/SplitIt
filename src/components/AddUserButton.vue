<script setup lang="ts">
import { store } from "../store";

const addUser = () => {
  store.bills.unshift({
    id: crypto.randomUUID(),
    name: "unnamed",
    items: null,
  });
};
</script>

<template>
  <div class="flex items-center gap-2 p-4">
    <button
      class="w-fit rounded-full bg-ctp-mauve p-2 text-ctp-crust"
      @click="addUser"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        viewBox="0 0 24 24"
        data-icon="SvgPlus"
        aria-hidden="true"
      >
        <path d="M12 4v16m8-8H4"></path>
      </svg>
    </button>
    Add user
  </div>
</template>
