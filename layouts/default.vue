<template>
  <div class="layout-container">
    <header>
      <nuxt-link to="/">Home</nuxt-link>
      <div>
        <div class="eye_title">DATA SNAKE BYTEs</div>
        <div class="adventure">WEATHER DATA</div>
      </div>
      <div>Login</div>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>
      <div class="nav-buttons">
        <span>
          <nuxt-link to="/contact" class="nav-button">
            <img
              alt="contact icon"
              class="nav_logo"
              src="/images/buttons/contact_icon.png"
              height="60"
            />
          </nuxt-link>
          <nuxt-link to="/gallery" class="nav-button">
            <img
              alt="gallery icon"
              class="nav_logo"
              src="/images/buttons/gallery_icon.png"
              height="60"
            />
          </nuxt-link>
          <nuxt-link to="/booking" class="nav-button">
            <img
              alt="booking icon"
              class="nav_logo"
              src="/images/buttons/booking_icon.png"
              height="60"
            />
          </nuxt-link>
          <nuxt-link to="/club" class="nav-button">
            <img
              alt="club icon"
              class="nav_logo"
              src="/images/buttons/club_icon.png"
              height="60"
            />
          </nuxt-link>
          <nuxt-link to="/donate">
            <img
              alt="donate icon"
              class="nav_logo"
              src="/images/buttons/donate_icon.png"
              height="60"
            />
          </nuxt-link>
        </span>
      </div>
    </footer>
  </div>
</template>
  

  <style scoped>
  /* Root container for layout */
  .layout-container {
    display: flex;
    flex-direction: column;
    height: 100dvh; /* Make it 100dvh to account for header and footer */
    margin: 0;
    overflow: hidden; /* Ensure no overflow */
}
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(51, 51, 51);
    color: white;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px; /* Define a fixed height for spacing calculations */
    z-index: 1000;
}

  
main {
    flex: 1; /* Make it take the available space */
    display: flex;
    align-items: center; /* Center content horizontally */
    justify-content: center; /* Center content vertically */
    padding: 0;
    margin-top: 60px; /* Offset by the header height */
    margin-bottom: 50px; /* Offset by the footer height */
    background-color: rgba(51, 51, 51, 0.2);
    overflow-y: auto; /* Allow scrolling if content is too large */
}

footer {
    background-color: rgb(51, 51, 51);
    color: white;
    text-align: center;
    padding: 0px;
    margin: 0;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px; /* Set a fixed height to account for spacing */
    z-index: 50;
}

  
  /* Navigation buttons inside footer */
  .nav-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .nav-button {
    padding: 5px;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color 0.2s ease;
    border-color: transparent;
  }
  
  .nav_logo {
    transition: transform 0.3s ease;
  }
  
  .nav-button:hover .nav_logo {
    transform: scale(1.1); /* Slight scale on hover for visual effect */
  }
  
  /* Eye Nepal header titles */
  .eye_title {
    font-size: 1.2em;
  }
  
  .adventure {
    color: rgb(252, 119, 3);
    font-size: 0.6em;
    font-weight: 700;
    margin-top: -15px;
  }

/* Responsive Typography */
@media (min-width: 360px) {
  header h1 {
    font-size: 1.8em;
  }
}

@media (min-width: 600px) {
  header h1 {
    font-size: 2em;
  }
}

@media (min-width: 1200px) {
  header h1 {
    font-size: 3em;
  }
}

</style>
