<template>
  <div>
    <svg class="heart-loader" viewBox="0 0 90 90">
      <g class="heart-loader__group">
      <path class="heart-loader__square" stroke-width="1" fill="none" d="M0,30 0,90 60,90 60,30z"/>
      <path class="heart-loader__circle m--left" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
      <path class="heart-loader__circle m--right" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
      <path class="heart-loader__heartPath" stroke-width="2" d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0" />
    </g>
    </svg>
  </div>
</template>
<script>
  import anime from 'animejs'
  anime({
    targets: 'div',
    translateX: [
      { value: 100, duration: 1200 },
      { value: 0, duration: 800 }
    ],
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 2000,
    loop: true
  });
  export default {
    name: 'heart'
  }
</script>
<style>
  @import '../assets/css/heart.css';
</style>
