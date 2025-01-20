<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Carroussel from './components/carroussel.vue';
import Slide from './components/slide.vue';
import { ref } from 'vue';

const videos = ref(['video_safe', 'video_cafes', 'video_beleza', 'video_safe', 'video_cafes', 'video_beleza']);
const urlbase = ref('http://localhost:8181/stream/video/');
const extension = ref('.mp4');

</script>

<template>
  <div>
    <!-- <Carroussel class="max-h-screen h-screen relative" v-slot = '{currentSlide}'>
      <Slide v-for="(video, index) in videos":key="index" class="">
        <video v-show="currentSlide === index + 1" class="rounded-xl shadow-md border-2 border-red-800 absolute top-0 left-0 w-full h-full max-h-full" id="videoPlayer" width="50%" controls autoplay>
            <source class="w-full h-full" :src="urlbase + video + extension" type="video/mp4" />
        </video>
      </Slide>
    </Carroussel> -->
    <Carroussel class="max-h-screen h-screen relative w-full">
      <video v-for="(video, index) in videos":key="index" class="rounded-xl shadow-md border-2 hover:border-red-800 w-[250px] h-[200px] object-fill bg-black" id="videoPlayer" width="100%" controls>
          <source class="shadow-sm" :src="urlbase + video + extension" type="video/mp4" />
      </video>
    </Carroussel>
  </div>
</template>