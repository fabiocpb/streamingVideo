<template>
  <div class="py-0 px-8 w-full h-full flex flex-row justify-center items-center mx-auto overflow-x-hidden">
    {{ translateSlideCount }}
    <div class="flex h-[200px] absolute left-11 shadow-md">
      <i @click="translateSlideRight" class="fa-solid fa-chevron-left flex cursor-pointer items-center justify-center py-2 px-4 z-10 bg-gray-400/60 rounded-md hover:bg-white/60"></i>
    </div>
    <div class="overflow-x-hidden">
      <div class="z-0 flex flex-none" :style="{transform: transformCSS()}">
        <!-- <slot :currentSlide = "currentSlide"/> -->
        <slot/>
      </div>
    </div>
    <div class="flex justify-end h-[200px] absolute right-9 shadow-md">
      <i @click="translateSlideLeft" class="fa-solid fa-chevron-right flex cursor-pointer items-center justify-center py-2 px-4 z-10 bg-gray-400/60 rounded-md  hover:bg-white/60"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const currentSlide = ref(1);

const translateSlideCount = ref(0);

function translateSlideLeft() {
  translateSlideCount.value = translateSlideCount.value + 40;
}

function translateSlideRight() {
  translateSlideCount.value = translateSlideCount.value - 40;
}

function transformCSS(){
  return `translateX(${translateSlideCount.value}px)`
}

let slideClass = ref(`z-0 flex translate-x-[${translateSlideCount.value}px]`);

</script>
