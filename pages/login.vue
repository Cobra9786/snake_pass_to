<template>
  <div>
    <h1>Login</h1>
    <button @click="fetchUsers">Fetch Users</button>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Use a Nuxt runtime configuration hook
const config = useRuntimeConfig();

const users = ref([]);

async function fetchUsers() {
  try {
    const response = await globalThis.fetch(`${config.public.d1WorkerBaseUrl}/api/login`, {
      method: 'GET',
    });

    if (response.ok) {
      users.value = await response.json();
    } else {
      console.error('Failed to fetch users:', response.statusText);
    }
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}
</script>
