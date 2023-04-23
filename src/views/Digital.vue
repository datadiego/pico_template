<template>
<div class="container">
    <hgroup>
    <h1>Digital Artwork</h1>
    <h2>Image manipulation and 3d rendering.</h2>
    </hgroup>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div class="grid">
    <div v-for="image in images" :key="image.src">
    <a :href="image.src" target="_blank">
      <img :src="image.src" :alt="image.alt">
    </a>
    </div>
  </div>

    
</div>

</template>

<script>
import img1 from '../assets/img (1).jpg'
import img2 from '../assets/img (2).jpg'
import img3 from '../assets/img (3).jpg'
import img4 from '../assets/img (4).jpg'
import img5 from '../assets/img (5).jpg'
import img6 from '../assets/img (6).jpg'
import img7 from '../assets/img (7).jpg'
import img8 from '../assets/img (8).jpg'
import img9 from '../assets/img (9).jpg'
import img10 from '../assets/img (10).jpg'
import img11 from '../assets/img (11).jpg'
import img12 from '../assets/img (12).jpg'
import img13 from '../assets/img (13).jpg'
import img14 from '../assets/img (14).jpg'
import img15 from '../assets/img (15).jpg'
import img16 from '../assets/img (16).jpg'
import img17 from '../assets/img (17).jpg'
import img18 from '../assets/img (18).jpg'
import img19 from '../assets/img (19).jpg'
import img20 from '../assets/img (20).jpg'

export default {
  data() {
    return {
      images: [
        { src: img1, alt: "Image 1" },
        { src: img2, alt: "Image 2" },
        { src: img3, alt: "Image 3" },
        { src: img4, alt: "Image 4" },
        { src: img5, alt: "Image 5" },
        { src: img6, alt: "Image 6" },
        { src: img7, alt: "Image 7" },
        { src: img8, alt: "Image 8" },
        { src: img9, alt: "Image 9" },
        { src: img10, alt: "Image 10" },
        { src: img11, alt: "Image 11" },
        { src: img12, alt: "Image 12" },
        { src: img13, alt: "Image 13" },
        { src: img14, alt: "Image 14" },
        { src: img15, alt: "Image 15" },
        { src: img16, alt: "Image 16" },
        { src: img17, alt: "Image 17" },
        { src: img18, alt: "Image 18" },
        { src: img19, alt: "Image 19" },
        { src: img20, alt: "Image 20" },

      ]
    };
  }
};
import ImageGrid from '../components/ImageGrid.vue'
</script>

<style scoped>
img{
    height: auto;
}

img:hover{
    border-radius: 10%;
    transform: scale(1.5);
    transition: 0.3s;
    filter: drop-shadow(0 0 0.5rem #fff);
}

.grid{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0;
    margin-bottom: 4vw;
}
</style>