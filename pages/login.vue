<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" :disabled="loading">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const loading = ref(false);

const handleLogin = async () => {
  console.log("SELECT TO LOGIN")
  
  error.value = '';

  try {
    //Nuxt’s $fetch utility to make requests via login.post.ts
    const response = await $fetch('/api/login', {
      method: 'POST',
      body: { username: username.value, password: password.value },
    });

    console.log("LOGGED IN?:: ", response)
    

    // if (!response.ok) {
    //   const result = await response.json();
    //   error.value = result.message || 'Login failed';
    //   return;
    // }

    // Redirect to a protected route after successful login
    router.push('/');
  } catch (err) {
    console.error('Login error:', err);
    error.value = err?.data?.message || 'An error occurred. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
@import 'public/styles/base.css';
@import 'public/styles/main.css';

.card-body {
padding: 20px;
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


