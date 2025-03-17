<template>
    <div class="contents">
      <div>
        Contents Goes Here
      </div>

      
    </div>
  </template>

<script>
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
//
import { useRouter } from 'vue-router';

export default defineComponent({
  metaInfo: {
    title: 'DataSnake Home Page',
    meta: [
      { name: 'description', content: 'DataSnake Landing Page' },
      { name: 'keywords', content: 'Data, Weather Data' },
    ],
  },
  setup() {
    // const authStore = useAuthStorelanding-page

    const gallery = () => {
      console.log("Gallery");
      router.push('/gallery');
    };

    const contact = () => {
      console.log("Contact");
    }

    return { gallery, contact };
  },
});
</script>
  
  <style scoped>
  .contents {
    display: flex;
    flex-direction: column;
    color: whitesmoke;
    background-color: rgb(23, 21, 21);
    text-align: center;
    padding: 10px;
    margin: 0, auto;
    height: 100vh;
    width: 100vw;
  }

  .background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  background-image: url('/datasnake.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Moves it behind everything */
}

  .nav-buttons {
    display: flex;
    flex-direction: row;
  }
  
  .logo {
    width: 80vw; /* Adjust size as needed */
    height: 80vh;
  }
  </style>
  