<template>
  <div class="landing-page">
    <div class="gallery">
      

      <!-- Main image display with responsive handling -->
      <transition name="fade">
        <div class="main-image">
        <img
          :src="selectedImage.src"
          :srcset="selectedImage.srcset"
          :alt="selectedImage.alt"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          class="main-image-display"
          loading="lazy"
        />
      </div>

      </transition>
      
    

    <!-- Thumbnail strip fixed to the bottom with navigation buttons -->
    <div class="thumbnail-strip">
      <button @click="scrollLeft" class="nav-button">❮</button>
      <div class="thumbnail-container" ref="thumbnailContainer">
        <div v-for="image in images" :key="image.id" class="thumbnail-item">
          <!-- Click event to load image -->
          <img
            :src="image.src"
            :alt="image.alt"
            @click="selectImage(image)" 
            class="thumbnail-image"
            loading="lazy"
          />
        </div>
      </div>
      <button @click="scrollRight" class="nav-button">❯</button>
    </div>
  </div>
  </div>
</template>




<script>

import drinkLarge from 'public/images/gallery/image-large/drink-large.jpg';
import drinkMedium from 'public/images/gallery/image-medium/drink-medium.jpg';
import drinkSmall from 'public/images/gallery/image-small/drink-small.jpg';

import bigRiverLarge from 'public/images/gallery/image-large/big-river-large.jpg';
import bigRiverMedium from 'public/images/gallery/image-medium/big-river-medium.jpg';
import bigRiverSmall from 'public/images/gallery/image-small/big-river-small.jpg';

import heavenLarge from 'public/images/gallery/image-large/heaven-large.jpg';
import heavenMedium from 'public/images/gallery/image-medium/heaven-medium.jpg';
import heavenSmall from 'public/images/gallery/image-small/heaven-small.jpg';

import heavenTouchLarge from 'public/images/gallery/image-large/heaven-touch-large.jpg';
import heavenTouchMedium from 'public/images/gallery/image-medium/heaven-touch-medium.jpg';
import heavenTouchSmall from 'public/images/gallery/image-small/heaven-touch-small.jpg';

import bhaliNepalRiceLarge from 'public/images/gallery/image-large/bhali-nepal-rice-large.jpg';
import bhaliNepalRiceMedium from 'public/images/gallery/image-medium/bhali-nepal-rice-medium.jpg';
import bhaliNepalRiceSmall from 'public/images/gallery/image-small/bhali-nepal-rice-small.jpg';

import sophieCitySquareLarge from 'public/images/gallery/image-large/city-square-sophie-large.jpg';
import sophieCitySquareMedium from 'public/images/gallery/image-medium/city-square-sophie-medium.jpg';
import sophieCitySquareSmall from 'public/images/gallery/image-small/city-square-sophie-small.jpg';

import houseToPeakViewLarge from 'public/images/gallery/image-large/house-to-peak-view-large.jpg';
import houseToPeakViewMedium from 'public/images/gallery/image-medium/house-to-peak-view-medium.jpg';
import houseToPeakViewSmall from 'public/images/gallery/image-small/house-to-peak-view-small.jpg';

import invitingTrailLarge from 'public/images/gallery/image-large/inviting-trail-large.jpg';
import invitingTrailMedium from 'public/images/gallery/image-medium/inviting-trail-medium.jpg';
import invitingTrailSmall from 'public/images/gallery/image-small/inviting-trail-small.jpg';

import notRealMtnLarge from 'public/images/gallery/image-large/not-real-mtn-large.jpg';
import notRealMtnMedium from 'public/images/gallery/image-medium/not-real-mtn-medium.jpg';
import notRealMtnSmall from 'public/images/gallery/image-small/not-real-mtn-small.jpg';

import phokaraBoatsLarge from 'public/images/gallery/image-large/phokara-boats-large.jpg';
import phokaraBoatsMedium from 'public/images/gallery/image-medium/phokara-boats-medium.jpg';
import phokaraBoatsSmall from 'public/images/gallery/image-small/phokara-boats-small.jpg';

import snowHouseLarge from 'public/images/gallery/image-large/snow-house-large.jpg';
import snowHouseMedium from 'public/images/gallery/image-medium/snow-house-medium.jpg';
import snowHouseSmall from 'public/images/gallery/image-small/snow-house-small.jpg';

import stairCircleLarge from 'public/images/gallery/image-large/stair-circle-large.jpg';
import stairCircleMedium from 'public/images/gallery/image-medium/stair-circle-medium.jpg';
import stairCircleSmall from 'public/images/gallery/image-small/stair-circle-small.jpg';

import deckSophieLarge from 'public/images/gallery/image-large/deck-sophie-large.jpg';
import deckSophieMedium from 'public/images/gallery/image-medium/deck-sophie-medium.jpg';
import deckSophieSmall from 'public/images/gallery/image-small/deck-sophie-small.jpg';

import cornerTempleLarge from 'public/images/gallery/image-large/corner-temple-large.jpg';
import cornerTempleMedium from 'public/images/gallery/image-medium/corner-temple-medium.jpg';
import cornerTempleSmall from 'public/images/gallery/image-small/corner-temple-small.jpg';

import flagMtnLarge from 'public/images/gallery/image-large/flag-mtn-large.jpg';
import flagMtnMedium from 'public/images/gallery/image-medium/flag-mtn-medium.jpg';
import flagMtnSmall from 'public/images/gallery/image-small/flag-mtn-small.jpg';

import mtnCityLarge from 'public/images/gallery/image-large/mtn-city-large.jpg';
import mtnCityMedium from 'public/images/gallery/image-medium/mtn-city-medium.jpg';
import mtnCitySmall from 'public/images/gallery/image-small/mtn-city-small.jpg';

import mtnViewPostLarge from 'public/images/gallery/image-large/mtn-view-post-large.jpg';
import mtnViewPostMedium from 'public/images/gallery/image-medium/mtn-view-post-medium.jpg';
import mtnViewPostSmall from 'public/images/gallery/image-small/mtn-view-post-small.jpg';

import mysticalVillageLarge from 'public/images/gallery/image-large/mystical-village-large.jpg';
import mysticalVillageMedium from 'public/images/gallery/image-medium/mystical-village-medium.jpg';
import mysticalVillageSmall from 'public/images/gallery/image-small/mystical-village-small.jpg';

import orangeFlowersLarge from 'public/images/gallery/image-large/orange-flowers-large.jpg';
import orangeFlowersMedium from 'public/images/gallery/image-medium/orange-flowers-medium.jpg';
import orangeFlowersSmall from 'public/images/gallery/image-small/orange-flowers-small.jpg';

import pokPeakMandrLarge from 'public/images/gallery/image-large/pok-peak-mandr-large.jpg';
import pokPeakMandrMedium from 'public/images/gallery/image-medium/pok-peak-mandr-medium.jpg';
import pokPeakMandrSmall from 'public/images/gallery/image-small/pok-peak-mandr-small.jpg';

import villageRiverCliffsLarge from 'public/images/gallery/image-large/village-river-cliffs-large.jpg';
import villageRiverCliffsMedium from 'public/images/gallery/image-medium/village-river-cliffs-medium.jpg';
import villageRiverCliffsSmall from 'public/images/gallery/image-small/village-river-cliffs-small.jpg';

import waterWallLarge from 'public/images/gallery/image-large/water-wall-large.jpg';
import waterWallMedium from 'public/images/gallery/image-medium/water-wall-medium.jpg';
import waterWallSmall from 'public/images/gallery/image-small/water-wall-small.jpg';

import starisDownLarge from 'public/images/gallery/image-large/staris-down-large.jpg';
import starisDownMedium from 'public/images/gallery/image-medium/staris-down-medium.jpg';
import starisDownSmall from 'public/images/gallery/image-small/staris-down-small.jpg';


export default {
  metaInfo: {
    title: 'DataSnake Weather DataGallery',
    meta: [
      { name: 'description', content: 'AI Weahter Data Dashboard.' },
      { name: 'keywords', content: 'AI Global Warming, Deadly Weather, Deadly Storm' },
    ],
  },
  data() {
    return {
      selectedImage: {
        src: bhaliNepalRiceLarge,
        srcset: `${bhaliNepalRiceSmall} 300w, ${bhaliNepalRiceMedium} 600w, ${bhaliNepalRiceLarge} 1200w`,
        alt: 'Rice Paddies',
      },
      images: [
        {
          id: 1,
          src: drinkLarge,
          srcset: `${drinkSmall} 300w, ${drinkMedium} 600w, ${drinkLarge} 1200w`,
          alt: 'Drink of Everest',
        },       
        {
          id: 2,
          src: bigRiverLarge,
          srcset: `${bigRiverSmall} 300w, ${bigRiverMedium} 600w, ${bigRiverLarge} 1200w`,
          alt: 'River Resort',
        },
        {
          id: 3,
          src: heavenLarge,
          srcset: `${heavenSmall} 300w, ${heavenMedium} 600w, ${heavenLarge} 1200w`,
          alt: 'Heaven',
        }, 
        {
          id: 4,
          src: heavenTouchLarge,
          srcset: `${heavenTouchSmall} 300w, ${heavenTouchMedium} 600w, ${heavenTouchLarge} 1200w`,
          alt: 'Touching Heaven',
        },
        {
          id: 5,
          src: bhaliNepalRiceLarge,
          srcset: `${bhaliNepalRiceSmall} 300w, ${bhaliNepalRiceMedium} 600w, ${bhaliNepalRiceLarge} 1200w`,
          alt: 'Rice Paddies',
        },
        {
          id: 6,
          src: sophieCitySquareLarge,
          srcset: `${sophieCitySquareSmall} 300w, ${sophieCitySquareMedium} 600w, ${sophieCitySquareLarge} 1200w`,
          alt: 'City Square Girl',
        },
        {
          id: 7,
          src: houseToPeakViewLarge,
          srcset: `${houseToPeakViewSmall} 300w, ${houseToPeakViewMedium} 600w, ${houseToPeakViewLarge} 1200w`,
          alt: 'House Peak View Large',
        },
        {
          id: 8,
          src: invitingTrailLarge,
          srcset: `${invitingTrailSmall} 300w, ${invitingTrailMedium} 600w, ${invitingTrailLarge} 1200w`,
          alt: 'Mystical Trail Enterances',
        },        
        {
          id: 9,
          src: notRealMtnLarge,
          srcset: `${notRealMtnSmall} 300w, ${notRealMtnMedium} 600w, ${notRealMtnLarge} 1200w`,
          alt: 'Unreal Mtn',
        },        
        {
          id: 10,
          src: phokaraBoatsLarge,
          srcset: `${phokaraBoatsSmall} 300w, ${phokaraBoatsMedium} 600w, ${phokaraBoatsLarge} 1200w`,
          alt: 'Phokara Boats',
        },
        {
          id: 11,
          src: snowHouseLarge,
          srcset: `${snowHouseSmall} 300w, ${snowHouseMedium} 600w, ${snowHouseLarge} 1200w`,
          alt: 'Mountain House',
        },
        {
          id: 12,
          src: stairCircleLarge,
          srcset: `${stairCircleSmall} 300w, ${stairCircleMedium} 600w, ${stairCircleLarge} 1200w`,
          alt: 'Stair Circlue',
        },
        {
          id: 13,
          src: deckSophieLarge,
          srcset: `${deckSophieSmall} 300w, ${deckSophieMedium} 600w, ${deckSophieLarge} 1200w`,
          alt: 'Deck Girl',
        },
        {
          id: 14,
          src: cornerTempleLarge,
          srcset: `${cornerTempleSmall} 300w, ${cornerTempleMedium} 600w, ${cornerTempleLarge} 1200w`,
          alt: 'Corner Temple',
        },
        {
          id: 15,
          src: flagMtnLarge,
          srcset: `${flagMtnSmall} 300w, ${flagMtnMedium} 600w, ${flagMtnLarge} 1200w`,
          alt: 'Flag Mountain',
        },
        {
          id: 16,
          src: mtnCityLarge,
          srcset: `${mtnCitySmall} 300w, ${mtnCityMedium} 600w, ${mtnCityLarge} 1200w`,
          alt: 'Moutnain city',
        },
        {
          id: 17,
          src: mtnViewPostLarge,
          srcset: `${mtnViewPostSmall} 300w, ${mtnViewPostMedium} 600w, ${mtnViewPostLarge} 1200w`,
          alt: 'Mountain View Post',
        },
        {
          id: 18,
          src: mysticalVillageLarge,
          srcset: `${mysticalVillageSmall} 300w, ${mysticalVillageMedium} 600w, ${mysticalVillageLarge} 1200w`,
          alt: 'Mystical Village',
        },
        {
          id: 19,
          src: orangeFlowersLarge,
          srcset: `${orangeFlowersSmall} 300w, ${orangeFlowersMedium} 600w, ${orangeFlowersLarge} 1200w`,
          alt: 'Orange Flowers',
        },
        {
          id: 20,
          src: pokPeakMandrLarge,
          srcset: `${pokPeakMandrSmall} 300w, ${pokPeakMandrMedium} 600w, ${pokPeakMandrLarge} 1200w`,
          alt: 'Pohara Peak Mandr',
        },
        {
          id: 21,
          src: villageRiverCliffsLarge,
          srcset: `${villageRiverCliffsSmall} 300w, ${villageRiverCliffsMedium} 600w, ${villageRiverCliffsLarge} 1200w`,
          alt: 'Village River Cliffs',
        },
        {
          id: 22,
          src: waterWallLarge,
          srcset: `${waterWallSmall} 300w, ${waterWallMedium} 600w, ${waterWallLarge} 1200w`,
          alt: 'Water Wall',
        },
        {
          id: 22,
          src: starisDownLarge,
          srcset: `${starisDownSmall} 300w, ${starisDownMedium} 600w, ${starisDownLarge} 1200w`,
          alt: 'Stars Going Down Hill',
        },
      ],
    };
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image; // Update selected image
    },
    scrollLeft() {
      this.$refs.thumbnailContainer.scrollBy({
        top: 0,
        left: -200, // Adjust scroll amount as needed
        behavior: 'smooth'
      });
    },
    scrollRight() {
      console.log("scrollRight");
      this.$refs.thumbnailContainer.scrollBy({
        top: 0,
        left: 200, // Adjust scroll amount as needed
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    // Preload the default image when the component is mounted
    console.log("mounted");
    const img = new Image();
    img.src = this.selectedImage.src;  // Preload default image
  }
};
</script>

<style scoped>

@import '/public/styles/base.css';
@import '/public/styles/main.css';
/* @import '../../assets/slide.css'; */
body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

header {
  background-color: #666;
  color: white;
}

.gallery {
  flex: 1; /* Allow gallery to take remaining space */
  display: flex;
  flex-direction: column; /* Column layout for main images and thumbnails */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.main-image {
  position: fixed;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* Full width for mobile-first */
  max-width: 100%; /* Ensure it doesn't exceed the viewport */
  height: auto; /* Automatically adjust height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.main-image-display {
  width: 100%; /* Ensure the image fills the container's width */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Prevent cropping */
}

.thumbnail-strip {
  position: fixed; 
  bottom: env(safe-area-inset-bottom, 0); /* Account for Safari's safe area */
  left: 0;bottom: 0;
  margin-bottom: 68px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.2); /* Background for visibility */
  padding: 0px 0; /* Add padding */
  overflow-x: hidden; /* Hide scrollbar */
  display: flex; /* Flex layout for buttons and thumbnails */
  align-items: center; /* Center items vertically */
}

.thumbnail-container {
  display: inline-flex; /* Use inline flexbox for thumbnails */
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent wrapping */
}

.nav-button {
  background-color: transparent; /* Transparent background */
  border: none; /* Remove border */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 24px; /* Adjust size as needed */
  margin: 0 10px; /* Space around buttons */
}

/* Hide scrollbar for the thumbnail container */
.thumbnail-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar for webkit browsers */
}

.thumbnail-item {
  height: 10vh; /* Set height to a percentage of the viewport height */
  width: 30vw; /* Set width to a percentage of the viewport width */
  min-width: 60px;
  max-width: 120px; /* Optional max width for larger screens */
  overflow: hidden; /* Hide overflow */
  display: flex; /* Use flexbox to center images */
  align-items: center; /* Center images vertically */
  justify-content: center; /* Center images horizontally */
}

.thumbnail-image {
  max-height: 100%; /* Allow the image to fill the height */
  max-width: 100%; /* Allow the image to fill the width */
  object-fit: cover; /* Cover the entire area while maintaining aspect ratio */
  transition: transform 0.2s; /* Smooth scaling */
}

.thumbnail-image:hover {
  transform: scale(1.1); /* Scale up on hover */
}

.gallery-item {
  margin: 10px;
}

.gallery-image {
  width: 100vw;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
}

.landing-page {
  height: 93vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Start from the top */
}

/* For smaller viewports (mobile-first design) */
@media (max-width: 600px) {
  .main-image {
    margin-top: 3px;
    width: 100vw; /* Ensure it spans the full viewport width */
    height: auto; /* Maintain aspect ratio */
    max-height: 63vh; /* Optional: Limit height for mobile screens */
  }

  .main-image-display {
    width: 100%; /* Stretch to full width */
    height: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Avoid cropping */
  }
}

/* For larger screens */
@media (min-width: 600px) {
  .main-image {
    margin-top: 3px;
    width: 80%; /* Adjust size for tablets and desktops */
    max-width: 800px; /* Restrict the maximum width */
    max-height: 73vh; /* Ensure it doesn't take excessive vertical space */
  }

  .main-image-display {
    object-fit: cover; /* Optional: Use 'cover' for better aesthetics */
  }
}
</style>
