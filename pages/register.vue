<template>
    <div class="card-body">
      <h1>Register</h1>
      <form @submit.prevent="handleRegister">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
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
  
  const handleRegister = async () => {
  error.value = '';

  try {
    const response = await $fetch('/api/register', {
      method: 'POST',
      body: { username: username.value, password: password.value },
    });

    console.log("Registration response:", response);

    // Handle failure (e.g., user already exists)
    if (response.status !== 201) {
      error.value = response.message || 'Registration failed';
      return;
    }

    // ✅ Only redirect if success
    router.push('/');
  } catch (err: any) {
    console.error('Registration error:', err);
    error.value = err?.data?.message || 'An error occurred. Please try again.';
  }
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
  