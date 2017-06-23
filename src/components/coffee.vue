<template>

</template>

<script>
  import anime from 'animejs'
  anime({
    targets: 'svg',
    rotate: 360,
    duration: 3000,
    loop: true,
    easing: 'linear'
  })
  export default {
    name: 'coffee'
  }

</script>
