<template>
  <div class="card-body">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" :disabled="loading" class="login-button">Login</button>
      <button @click="handleRegister"  class="register-button">Register</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const loading = ref(false);

const handleLogin = async () => {
  error.value = '';

  try {
    const response = await $fetch('/api/login', {
      method: 'POST',
      body: { username: username.value, password: password.value },
    });

    // Check for unsuccessful login
    if (response.status !== 200) {
      error.value = response.message || 'Login failed';
      return;
    }

    console.log("✅ LOGGED IN:", response);
    router.push('/');
  } catch (err: any) {
    console.error('❌ Login error:', err);
    error.value = err?.data?.message || 'An error occurred. Please try again.';
  }
};


const handleRegister = async () => {
  console.log("SELECT TO REGISTER")
    
  router.push('/register');
};

</script>

<style scoped>
@import 'public/styles/base.css';
@import 'public/styles/main.css';

.card-body {
padding: 20px;
width: 60 vw;
height: 60 vh;
background: #282c34;
border-radius: 8px;
color: #fff;
}

.login-button {
background-color: #007bff;
color: white;
border: none;
padding: 10px 15px;
cursor: pointer;
border-radius: 5px;
margin-top: 10px;
}

.register-button {
font-size: 1.6em;
background-color: transparent;
color: #ff5100;
border: none;
padding: 0px 5px;
cursor: pointer;
border-radius: 5px;
margin-top: 10px;
}

h1 {
color: white;
}

.form-group {
margin-bottom: 15px;
}

.invalid-feedback {
color: red;
font-size: 0.875em;
}
</style>


