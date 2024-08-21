<script setup lang="ts">
import { ref } from "vue";
import { store } from "../store";

const userName = ref("");

const addUser = () => {
  store.bills.unshift({
    id: crypto.randomUUID(),
    name: userName.value,
    items: null,
  });
  // localStorage.bills = JSON.stringify(store.bills);
  userName.value = "";
};
</script>

<template>
  <div class="flex items-center gap-2 p-4">
    <form @submit.prevent="addUser" class="flex w-full font-bold">
      <input
        type="text"
        v-model="userName"
        required
        class="text-md w-full bg-ctp-surface0/40 px-2"
        placeholder="Nuevo split"
      />
      <button
        type="submit"
        class="rounded-r bg-ctp-mauve p-2 text-ctp-surface0"
      >
        Crear
      </button>
    </form>
  </div>
</template>

<style scoped></style>
