<template>
  <div>
    <svg class="hidden">
      <defs>
        <symbol id="icon-arrow" viewBox="0 0 24 24">
          <title>arrow</title>
          <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
        </symbol>
        <symbol id="icon-drop" viewBox="0 0 24 24">
          <title>drop</title>
          <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
          <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
        </symbol>
        <symbol id="icon-octicon" viewBox="0 0 24 24">
          <title>octicon</title>
          <path d="M12,2.2C6.4,2.2,1.9,6.7,1.9,12.2c0,4.4,2.9,8.2,6.9,9.6c0.5,0.1,0.7-0.2,0.7-0.5c0-0.2,0-0.9,0-1.7c-2.8,0.6-3.4-1.4-3.4-1.4C5.6,17.1,5,16.8,5,16.8C4.1,16.2,5,16.2,5,16.2c1,0.1,1.5,1,1.5,1c0.9,1.5,2.4,1.1,2.9,0.8c0.1-0.7,0.4-1.1,0.6-1.3c-2.2-0.3-4.6-1.1-4.6-5c0-1.1,0.4-2,1-2.7C6.5,8.8,6.2,7.7,6.7,6.4c0,0,0.8-0.3,2.8,1C10.3,7.2,11.1,7.1,12,7c0.9,0,1.7,0.1,2.5,0.3c1.9-1.3,2.8-1,2.8-1c0.5,1.4,0.2,2.4,0.1,2.7c0.6,0.7,1,1.6,1,2.7c0,3.9-2.4,4.7-4.6,5c0.4,0.3,0.7,0.9,0.7,1.9c0,1.3,0,2.4,0,2.8c0,0.3,0.2,0.6,0.7,0.5c4-1.3,6.9-5.1,6.9-9.6C22.1,6.7,17.6,2.2,12,2.2z" />
        </symbol>
      </defs>
    </svg>
    <main>
      <header class="codrops-header">
        <div class="codrops-links">
          <a class="codrops-icon codrops-icon--prev" href="http://tympanus.net/Development/NavigationIndicators/" title="Previous Demo">
            <svg class="icon icon--arrow">
              <use xlink:href="#icon-arrow"></use>
            </svg>
          </a>
          <a class="codrops-icon codrops-icon--drop" href="http://tympanus.net/codrops/?p=27976" title="Back to the article">
            <svg class="icon icon--drop">
              <use xlink:href="#icon-drop"></use>
            </svg>
          </a>
        </div>
        <h1 class="codrops-header__title">Fancy SVG Letter Animation</h1>
        <p class="codrops-header__tagline">A fun letter animation inspired by Jake Bartlett's Dribbble shot
          <a href="https://dribbble.com/shots/2943049-Shading-Letters-in-Illustrator">"Shading Letters in Illustrator"</a> for Jamie Bartlett's
          <a href="https://www.skillshare.com/classes/design/Shading-Letters-in-Illustrator/747154273">Skillshare class</a>. </p>
        <a href="https://github.com/codrops/FancyLetterAnimation/" class="btn btn--github">
          <svg class="icon icon--octicon">
            <use xlink:href="#icon-octicon"></use>
          </svg>
        </a>
      </header>
      <div class="content content--1">
        <svg width="100%" height="100%" viewBox="0 0 320 180" class="letters letters--effect-1">
          <!--W-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M25,39.7l22.4,51l7.9-32.2L76.2,84l1.3-61.2" />
              <path class="letter__layer color-1" d="M25,39.7l22.4,51l7.9-32.2L76.2,84l1.3-61.2" />
              <path class="letter__layer color-2" d="M25,39.7l22.4,51l7.9-32.2L76.2,84l1.3-61.2" />
            </g>
          </g>
          <!--I-->
          <g class="letter letter--2">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M100,20.3l8.4,58.4" />
              <path class="letter__layer color-2" d="M100,20.3l8.4,58.4" />
              <path class="letter__layer color-3" d="M100,20.3l8.4,58.4" />
            </g>
          </g>
          <!--L-->
          <g class="letter letter--3">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M126.4,70.8l27.6,0.5" />
              <path class="letter__layer color-3" d="M126.4,70.8l27.6,0.5" />
              <path class="letter__layer color-4" d="M126.4,70.8l27.6,0.5" />
            </g>
            <g class="letter__part">
              <path class="letter__layer color-6" d="M128.9,15.6l-2.3,60.2" />
              <path class="letter__layer color-3" d="M128.9,15.6l-2.3,60.2" />
              <path class="letter__layer color-4" d="M128.9,15.6l-2.3,60.2" />
            </g>
          </g>
          <!--D-->
          <g class="letter letter--4">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M167.4,27.6l3.7,49.1" />
              <path class="letter__layer color-4" d="M167.4,27.6l3.7,49.1" />
              <path class="letter__layer color-5" d="M167.4,27.6l3.7,49.1" />
            </g>
            <g class="letter__part">
              <path class="letter__layer color-6" d="M157.8,30.9c0,0,31.2-10.9,40.3,6.8c8.9,17-23.5,38.4-35,42.6" />
              <path class="letter__layer color-4" d="M157.8,30.9c0,0,31.2-10.9,40.3,6.8c8.9,17-23.5,38.4-35,42.6" />
              <path class="letter__layer color-5" d="M157.8,30.9c0,0,31.2-10.9,40.3,6.8c8.9,17-23.5,38.4-35,42.6" />
            </g>
          </g>
          <!--E-->
          <g class="letter letter--5">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M215,52l25.6,2.8" />
              <path class="letter__layer color-5" d="M215,52l25.6,2.8" />
              <path class="letter__layer color-1" d="M215,52l25.6,2.8" />
            </g>
            <g class="letter__part">
              <path class="letter__layer color-6" d="M211.8,76.9l30.6,3.4" />
              <path class="letter__layer color-5" d="M211.8,76.9l30.6,3.4" />
              <path class="letter__layer color-1" d="M211.8,76.9l30.6,3.4" />
            </g>
            <g class="letter__part">
              <path class="letter__layer color-6" d="M218.6,27.4l30.9,2.9" />
              <path class="letter__layer color-5" d="M218.6,27.4l30.9,2.9" />
              <path class="letter__layer color-1" d="M218.6,27.4l30.9,2.9" />
            </g>
            <g class="letter__part">
              <path class="letter__layer color-6" d="M218.4,22.4l-6.9,59.6" />
              <path class="letter__layer color-5" d="M218.4,22.4l-6.9,59.6" />
              <path class="letter__layer color-1" d="M218.4,22.4l-6.9,59.6" />
            </g>
          </g>
          <!--R-->
          <g class="letter letter--6">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M264.2,29.8l24.1,8c12,4.2,12,11,9.4,18.5c-2.6,7.5-6.7,12.9-18.7,8.8l-14.2-4.8" />
              <path class="letter__layer color-4" d="M264.2,29.8l24.1,8c12,4.2,12,11,9.4,18.5c-2.6,7.5-6.7,12.9-18.7,8.8l-14.2-4.8" />
              <path class="letter__layer color-2" d="M264.2,29.8l24.1,8c12,4.2,12,11,9.4,18.5c-2.6,7.5-6.7,12.9-18.7,8.8l-14.2-4.8" />
            </g>
            <g class="letter__part">
              <path class="letter__layer color-6" d="M284.9,96.2l-20.4-35.1" />
              <path class="letter__layer color-4" d="M284.9,96.2l-20.4-35.1" />
              <path class="letter__layer color-2" d="M284.9,96.2l-20.4-35.1" />
            </g>
            <g class="letter__part">
              <path class="letter__layer color-6" d="M275.2,29.4l-20.5,60.6" />
              <path class="letter__layer color-4" d="M275.2,29.4l-20.5,60.6" />
              <path class="letter__layer color-2" d="M275.2,29.4l-20.5,60.6" />
            </g>
          </g>
          <!--M-->
          <g class="letter letter--7">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M72.9,156.9l-7.1-56.5L91.7,127l18.8-29.8l7.1,56.5" />
              <path class="letter__layer color-3" d="M72.9,156.9l-7.1-56.5L91.7,127l18.8-29.8l7.1,56.5" />
              <path class="letter__layer color-1" d="M72.9,156.9l-7.1-56.5L91.7,127l18.8-29.8l7.1,56.5" />
            </g>
          </g>
          <!--I-->
          <g class="letter letter--8">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M144.9,99.5l-6,61.3" />
              <path class="letter__layer color-4" d="M144.9,99.5l-6,61.3" />
              <path class="letter__layer color-2" d="M144.9,99.5l-6,61.3" />
            </g>
          </g>
          <!--N-->
          <g class="letter letter--9">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M170.4,161.9l-3.2-61.8l43.4,58.1l-7.2-62.6" />
              <path class="letter__layer color-1" d="M170.4,161.9l-3.2-61.8l43.4,58.1l-7.2-62.6" />
              <path class="letter__layer color-3" d="M170.4,161.9l-3.2-61.8l43.4,58.1l-7.2-62.6" />
            </g>
          </g>
          <!--D-->
          <g class="letter letter--10">
            <g class="letter__part">
              <path class="letter__layer color-6" d="M233.8,107.9l3.9,51.7" />
              <path class="letter__layer color-5" d="M233.8,107.9l3.9,51.7" />
              <path class="letter__layer color-4" d="M233.8,107.9l3.9,51.7" />
            </g>
            <g class="letter__part">
              <path class="letter__layer color-6" d="M222.4,109.4c0,0,33.9-11.8,43.8,7.4c10.9,20.9-23.6,43.4-34.8,47.5" />
              <path class="letter__layer color-5" d="M222.4,109.4c0,0,33.9-11.8,43.8,7.4c10.9,20.9-23.6,43.4-34.8,47.5" />
              <path class="letter__layer color-4" d="M222.4,109.4c0,0,33.9-11.8,43.8,7.4c10.9,20.9-23.6,43.4-34.8,47.5" />
            </g>
          </g>
        </svg>
        <div class="content__meta">
          <button class="btn btn--start" aria-label="Start animation">Start</button>
        </div>
      </div>
      <div class="content content--2">
        <svg width="100%" height="100%" viewBox="0 0 320 180" class="letters letters--effect-2">
          <!--O-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M92.8,80.4C64.5,87.7,64,42.1,83.4,31.3C109.2,30.3,117.6,74.1,92.8,80.4z" />
              <path class="letter__layer" d="M92.8,80.4C64.5,87.7,64,42.1,83.4,31.3C109.2,30.3,117.6,74.1,92.8,80.4z" />
              <path class="letter__layer" d="M92.8,80.4C64.5,87.7,64,42.1,83.4,31.3C109.2,30.3,117.6,74.1,92.8,80.4z" />
            </g>
          </g>
          <!--N-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M162.1,27.1v57.4l-38.3-57.4v57.4" />
              <path class="letter__layer" d="M162.1,27.1v57.4l-38.3-57.4v57.4" />
              <path class="letter__layer" d="M162.1,27.1v57.4l-38.3-57.4v57.4" />
            </g>
          </g>
          <!--L-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M183.9,27.1v57.4" />
              <path class="letter__layer" d="M183.9,27.1v57.4" />
              <path class="letter__layer" d="M183.9,27.1v57.4" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M183.9,79.5h32.8" />
              <path class="letter__layer" d="M183.9,79.5h32.8" />
              <path class="letter__layer" d="M183.9,79.5h32.8" />
            </g>
          </g>
          <!--Y-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M250,27.1l-21.9,27.3" />
              <path class="letter__layer" d="M250,27.1l-21.9,27.3" />
              <path class="letter__layer" d="M250,27.1l-21.9,27.3" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M206.2,27.1c17.4,14.3,27.6,34.9,21.9,57.4" />
              <path class="letter__layer" d="M206.2,27.1c17.4,14.3,27.6,34.9,21.9,57.4" />
              <path class="letter__layer" d="M206.2,27.1c17.4,14.3,27.6,34.9,21.9,57.4" />
            </g>
          </g>
          <!--L-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M71.3,91.9v57.4" />
              <path class="letter__layer" d="M71.3,91.9v57.4" />
              <path class="letter__layer" d="M71.3,91.9v57.4" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M71.3,144.4h32.8" />
              <path class="letter__layer" d="M71.3,144.4h32.8" />
              <path class="letter__layer" d="M71.3,144.4h32.8" />
            </g>
          </g>
          <!--O-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M132.8,147.1c-28.2,7.2-28.8-38.3-9.4-49.1C149.2,96.9,157.6,140.7,132.8,147.1z" />
              <path class="letter__layer" d="M132.8,147.1c-28.2,7.2-28.8-38.3-9.4-49.1C149.2,96.9,157.6,140.7,132.8,147.1z" />
              <path class="letter__layer" d="M132.8,147.1c-28.2,7.2-28.8-38.3-9.4-49.1C149.2,96.9,157.6,140.7,132.8,147.1z" />
            </g>
          </g>
          <!--V-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M202,93.7l-21.9,57.4l-21.9-57.4" />
              <path class="letter__layer" d="M202,93.7l-21.9,57.4l-21.9-57.4" />
              <path class="letter__layer" d="M202,93.7l-21.9,57.4l-21.9-57.4" />
            </g>
          </g>
          <!--E-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M217,95.5v57.4" />
              <path class="letter__layer" d="M217,95.5v57.4" />
              <path class="letter__layer" d="M217,95.5v57.4" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M217,100.5h32.5" />
              <path class="letter__layer" d="M217,100.5h32.5" />
              <path class="letter__layer" d="M217,100.5h32.5" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M217,122.8h20" />
              <path class="letter__layer" d="M217,122.8h20" />
              <path class="letter__layer" d="M217,122.8h20" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M217,147.9h32.5" />
              <path class="letter__layer" d="M217,147.9h32.5" />
              <path class="letter__layer" d="M217,147.9h32.5" />
            </g>
          </g>
        </svg>
        <div class="content__meta">
          <button class="btn btn--start" aria-label="Start animation">Start</button>
        </div>
      </div>
      <div class="content content--3">
        <svg width="100%" height="100%" viewBox="0 0 400 300" class="letters letters--effect-3">
          <!--J-->
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M20.4,52.1c17.9,0.2,46.3,1.2,63.3-4.4C73,72.5,68.1,114.4,66.3,141.3c-0.2,3-0.6,6.3-2.7,8.4c-3,3-8,2.2-11.9,0.7c-5.4-2.2-10.3-5.7-13.4-10.6c-3.1-4.9-4.2-11.2-2.1-16.7c1.7-4.5,5.4-8.1,9.6-10.5s8.9-3.8,13.6-5.1c16-4.4,32.2-7.9,48.6-10.4" />
              <path class="letter__layer" d="M20.4,52.1c17.9,0.2,46.3,1.2,63.3-4.4C73,72.5,68.1,114.4,66.3,141.3c-0.2,3-0.6,6.3-2.7,8.4c-3,3-8,2.2-11.9,0.7c-5.4-2.2-10.3-5.7-13.4-10.6c-3.1-4.9-4.2-11.2-2.1-16.7c1.7-4.5,5.4-8.1,9.6-10.5s8.9-3.8,13.6-5.1c16-4.4,32.2-7.9,48.6-10.4" />
              <path class="letter__layer" d="M20.4,52.1c17.9,0.2,46.3,1.2,63.3-4.4C73,72.5,68.1,114.4,66.3,141.3c-0.2,3-0.6,6.3-2.7,8.4c-3,3-8,2.2-11.9,0.7c-5.4-2.2-10.3-5.7-13.4-10.6c-3.1-4.9-4.2-11.2-2.1-16.7c1.7-4.5,5.4-8.1,9.6-10.5s8.9-3.8,13.6-5.1c16-4.4,32.2-7.9,48.6-10.4" />
            </g>
          </g>
          <!--u-->
          <g class="letter letter--2">
            <g class="letter__part">
              <path class="letter__layer" d="M93.2,83.7c8.8-6.2,17.5-12.4,26.3-18.6c-0.2,11.9-0.1,23.7,0.1,35.6c0.1,2.5,0.7,5.8,3.2,6.2c1,0.2,2.1-0.2,3-0.6c14.6-6.7,22.9-22.4,27.6-37.8c-0.6,7.1-1.2,14.2-0.1,21.2c1.1,7,4.1,13.9,9.5,18.5" />
              <path class="letter__layer" d="M93.2,83.7c8.8-6.2,17.5-12.4,26.3-18.6c-0.2,11.9-0.1,23.7,0.1,35.6c0.1,2.5,0.7,5.8,3.2,6.2c1,0.2,2.1-0.2,3-0.6c14.6-6.7,22.9-22.4,27.6-37.8c-0.6,7.1-1.2,14.2-0.1,21.2c1.1,7,4.1,13.9,9.5,18.5" />
              <path class="letter__layer" d="M93.2,83.7c8.8-6.2,17.5-12.4,26.3-18.6c-0.2,11.9-0.1,23.7,0.1,35.6c0.1,2.5,0.7,5.8,3.2,6.2c1,0.2,2.1-0.2,3-0.6c14.6-6.7,22.9-22.4,27.6-37.8c-0.6,7.1-1.2,14.2-0.1,21.2c1.1,7,4.1,13.9,9.5,18.5" />
            </g>
          </g>
          <!--s-->
          <g class="letter letter--3">
            <g class="letter__part">
              <path class="letter__layer" d="M207.4,86.7c0.6-3.1,1.3-6.5-0.3-9.4c-2.9-5.4-11-5.7-16.4-5.6c-3.9,0.1-7.9,0.8-11.4,2.5c-3.5,1.8-6.5,4.8-7.8,8.6c-0.8,2.6-0.7,5.8,1.4,7.5c0.8,0.6,1.7,1,2.7,1.3c4.7,1.4,9.6,0.5,14.5,0.1s10.1-0.2,14,2.8c4.9,3.8,5.8,11.8,2,16.6c-2.9,3.6-7.6,5.1-12.1,5.5c-5.5,0.5-11-0.5-16-2.8c-2.6-1.2-5.3-3-5.9-5.9" />
              <path class="letter__layer" d="M207.4,86.7c0.6-3.1,1.3-6.5-0.3-9.4c-2.9-5.4-11-5.7-16.4-5.6c-3.9,0.1-7.9,0.8-11.4,2.5c-3.5,1.8-6.5,4.8-7.8,8.6c-0.8,2.6-0.7,5.8,1.4,7.5c0.8,0.6,1.7,1,2.7,1.3c4.7,1.4,9.6,0.5,14.5,0.1s10.1-0.2,14,2.8c4.9,3.8,5.8,11.8,2,16.6c-2.9,3.6-7.6,5.1-12.1,5.5c-5.5,0.5-11-0.5-16-2.8c-2.6-1.2-5.3-3-5.9-5.9" />
              <path class="letter__layer" d="M207.4,86.7c0.6-3.1,1.3-6.5-0.3-9.4c-2.9-5.4-11-5.7-16.4-5.6c-3.9,0.1-7.9,0.8-11.4,2.5c-3.5,1.8-6.5,4.8-7.8,8.6c-0.8,2.6-0.7,5.8,1.4,7.5c0.8,0.6,1.7,1,2.7,1.3c4.7,1.4,9.6,0.5,14.5,0.1s10.1-0.2,14,2.8c4.9,3.8,5.8,11.8,2,16.6c-2.9,3.6-7.6,5.1-12.1,5.5c-5.5,0.5-11-0.5-16-2.8c-2.6-1.2-5.3-3-5.9-5.9" />
            </g>
          </g>
          <!--t-->
          <g class="letter letter--4">
            <g class="letter__part">
              <path class="letter__layer" d="M281.1,127.4c-7.2,5.6-13,10.5-22.7,11.1c-8.5,0.5-17.2-2.7-23.6-8.2c-6.5-5.6-8.2-15.4-8-23.5c0.5-17.8,2.9-35.5,7.2-52.8" />
              <path class="letter__layer" d="M281.1,127.4c-7.2,5.6-13,10.5-22.7,11.1c-8.5,0.5-17.2-2.7-23.6-8.2c-6.5-5.6-8.2-15.4-8-23.5c0.5-17.8,2.9-35.5,7.2-52.8" />
              <path class="letter__layer" d="M281.1,127.4c-7.2,5.6-13,10.5-22.7,11.1c-8.5,0.5-17.2-2.7-23.6-8.2c-6.5-5.6-8.2-15.4-8-23.5c0.5-17.8,2.9-35.5,7.2-52.8" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M217.1,90.5c14.6,0.2,29.3,0,43.9-0.7" />
              <path class="letter__layer" d="M217.1,90.5c14.6,0.2,29.3,0,43.9-0.7" />
              <path class="letter__layer" d="M217.1,90.5c14.6,0.2,29.3,0,43.9-0.7" />
            </g>
          </g>
          <!--S-->
          <g class="letter letter--5">
            <g class="letter__part">
              <path class="letter__layer" d="M127.8,141.5c-1.3-0.2-4.3-0.6-7.2,1c-5.2,2.8-7.4,10.1-5.2,14.2c3,5.8,14.2,5.3,21.2,2.1c1.6-0.7,8.2-3.8,10.3-10.6c2.7-8.9-4.7-19-12-23.9c-6.4-4.3-14.6-6-22-3.8c-7.7,2.3-13.9,8.4-17.9,15.4c-8.1,14.2-10,30.6-3.9,45.9c2.9,7.4,8.3,13.8,12.7,20.4c4.3,6.5,10.5,15.3,12.1,23.3c5.9,29.5-32.8,30.9-50.8,21.7c-7.8-4-13-9.6-16.1-15.9c-7.5-15.4,2.2-37.9,17.6-43.2c6-2.1,11.7-1.2,15.6-0.2" />
              <path class="letter__layer" d="M127.8,141.5c-1.3-0.2-4.3-0.6-7.2,1c-5.2,2.8-7.4,10.1-5.2,14.2c3,5.8,14.2,5.3,21.2,2.1c1.6-0.7,8.2-3.8,10.3-10.6c2.7-8.9-4.7-19-12-23.9c-6.4-4.3-14.6-6-22-3.8c-7.7,2.3-13.9,8.4-17.9,15.4c-8.1,14.2-10,30.6-3.9,45.9c2.9,7.4,8.3,13.8,12.7,20.4c4.3,6.5,10.5,15.3,12.1,23.3c5.9,29.5-32.8,30.9-50.8,21.7c-7.8-4-13-9.6-16.1-15.9c-7.5-15.4,2.2-37.9,17.6-43.2c6-2.1,11.7-1.2,15.6-0.2" />
              <path class="letter__layer" d="M127.8,141.5c-1.3-0.2-4.3-0.6-7.2,1c-5.2,2.8-7.4,10.1-5.2,14.2c3,5.8,14.2,5.3,21.2,2.1c1.6-0.7,8.2-3.8,10.3-10.6c2.7-8.9-4.7-19-12-23.9c-6.4-4.3-14.6-6-22-3.8c-7.7,2.3-13.9,8.4-17.9,15.4c-8.1,14.2-10,30.6-3.9,45.9c2.9,7.4,8.3,13.8,12.7,20.4c4.3,6.5,10.5,15.3,12.1,23.3c5.9,29.5-32.8,30.9-50.8,21.7c-7.8-4-13-9.6-16.1-15.9c-7.5-15.4,2.2-37.9,17.6-43.2c6-2.1,11.7-1.2,15.6-0.2" />
            </g>
          </g>
          <!--m-->
          <g class="letter letter--6">
            <g class="letter__part">
              <path class="letter__layer" d="M205.3,237.9c1.8-17.6,3.6-35.4,0.6-52.8c-0.3-1.5-0.8-3.2-2.3-3.5c-0.7-0.1-1.4,0.2-2.1,0.5c-9.3,4.1-17.8,10.2-24.8,17.6" />
              <path class="letter__layer" d="M205.3,237.9c1.8-17.6,3.6-35.4,0.6-52.8c-0.3-1.5-0.8-3.2-2.3-3.5c-0.7-0.1-1.4,0.2-2.1,0.5c-9.3,4.1-17.8,10.2-24.8,17.6" />
              <path class="letter__layer" d="M205.3,237.9c1.8-17.6,3.6-35.4,0.6-52.8c-0.3-1.5-0.8-3.2-2.3-3.5c-0.7-0.1-1.4,0.2-2.1,0.5c-9.3,4.1-17.8,10.2-24.8,17.6" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M174.8,237.3c1.8-17.6,3.6-35.4,0.6-52.8c-0.3-1.5-0.8-3.2-2.3-3.5c-0.7-0.1-1.4,0.2-2.1,0.5c-9.3,4.1-17.8,10.2-24.8,17.6" />
              <path class="letter__layer" d="M174.8,237.3c1.8-17.6,3.6-35.4,0.6-52.8c-0.3-1.5-0.8-3.2-2.3-3.5c-0.7-0.1-1.4,0.2-2.1,0.5c-9.3,4.1-17.8,10.2-24.8,17.6" />
              <path class="letter__layer" d="M174.8,237.3c1.8-17.6,3.6-35.4,0.6-52.8c-0.3-1.5-0.8-3.2-2.3-3.5c-0.7-0.1-1.4,0.2-2.1,0.5c-9.3,4.1-17.8,10.2-24.8,17.6" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M116.4,198c7-7.4,15.5-13.4,24.8-17.6c0.7-0.3,1.4-0.6,2.1-0.5c1.5,0.3,2,2,2.3,3.5c3,17.4,1.2,35.2-0.6,52.8" />
              <path class="letter__layer" d="M116.4,198c7-7.4,15.5-13.4,24.8-17.6c0.7-0.3,1.4-0.6,2.1-0.5c1.5,0.3,2,2,2.3,3.5c3,17.4,1.2,35.2-0.6,52.8" />
              <path class="letter__layer" d="M116.4,198c7-7.4,15.5-13.4,24.8-17.6c0.7-0.3,1.4-0.6,2.1-0.5c1.5,0.3,2,2,2.3,3.5c3,17.4,1.2,35.2-0.6,52.8" />
            </g>
          </g>
          <!--o-->
          <g class="letter letter--7">
            <g class="letter__part">
              <path class="letter__layer" d="M224.7,214.5c-1.6,25.1,46.6,25.5,35.2-13.9C251.5,171.6,226.4,188.7,224.7,214.5z" />
              <path class="letter__layer" d="M224.7,214.5c-1.6,25.1,46.6,25.5,35.2-13.9C251.5,171.6,226.4,188.7,224.7,214.5z" />
              <path class="letter__layer" d="M224.7,214.5c-1.6,25.1,46.6,25.5,35.2-13.9C251.5,171.6,226.4,188.7,224.7,214.5z" />
            </g>
          </g>
          <!--k-->
          <g class="letter letter--8">
            <g class="letter__part">
              <path class="letter__layer" d="M266.8,188.2c0.7,1.4,7.1,13.8,21.2,16.1c11.3,1.9,19.6-4.2,22.2-5.8c5.9-3.6,12.9-12.1,12.7-19.4c-0.4-11.6-15.7-7.5-22.2-4.8c-10.3,4.3-17.8,11.6-18,25.8c-0.2,13.2,24.7,43.2,49.3,24.5" />
              <path class="letter__layer" d="M266.8,188.2c0.7,1.4,7.1,13.8,21.2,16.1c11.3,1.9,19.6-4.2,22.2-5.8c5.9-3.6,12.9-12.1,12.7-19.4c-0.4-11.6-15.7-7.5-22.2-4.8c-10.3,4.3-17.8,11.6-18,25.8c-0.2,13.2,24.7,43.2,49.3,24.5" />
              <path class="letter__layer" d="M266.8,188.2c0.7,1.4,7.1,13.8,21.2,16.1c11.3,1.9,19.6-4.2,22.2-5.8c5.9-3.6,12.9-12.1,12.7-19.4c-0.4-11.6-15.7-7.5-22.2-4.8c-10.3,4.3-17.8,11.6-18,25.8c-0.2,13.2,24.7,43.2,49.3,24.5" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M175.8,138.2c11.1,17.1,28.4,27.9,48.6,30.7c16.8,2.3,34-0.4,50.1-5.3c9.7-3,19.4-6.6,27.7-12.4c10.4-7.3,10.4-7.3,20-18.3c10.1-11.6,6.8-25.6-8.3-24.2c-8.4,0.8-16.4,8.7-20.2,16.4c-4,8.1-4.4,17.7-5,26.5c-0.7,9.5-2.6,18.7-4,28.1c-2.6,18.2-4.7,36.5-6.4,54.8" />
              <path class="letter__layer" d="M175.8,138.2c11.1,17.1,28.4,27.9,48.6,30.7c16.8,2.3,34-0.4,50.1-5.3c9.7-3,19.4-6.6,27.7-12.4c10.4-7.3,10.4-7.3,20-18.3c10.1-11.6,6.8-25.6-8.3-24.2c-8.4,0.8-16.4,8.7-20.2,16.4c-4,8.1-4.4,17.7-5,26.5c-0.7,9.5-2.6,18.7-4,28.1c-2.6,18.2-4.7,36.5-6.4,54.8" />
              <path class="letter__layer" d="M175.8,138.2c11.1,17.1,28.4,27.9,48.6,30.7c16.8,2.3,34-0.4,50.1-5.3c9.7-3,19.4-6.6,27.7-12.4c10.4-7.3,10.4-7.3,20-18.3c10.1-11.6,6.8-25.6-8.3-24.2c-8.4,0.8-16.4,8.7-20.2,16.4c-4,8.1-4.4,17.7-5,26.5c-0.7,9.5-2.6,18.7-4,28.1c-2.6,18.2-4.7,36.5-6.4,54.8" />
            </g>
          </g>
          <!--e-->
          <g class="letter letter--9">
            <g class="letter__part">
              <path class="letter__layer" d="M335.6,204.7c51.4,1.2,40.3-43.1,10.9-22.9c-28,19.3,0.9,66.8,33.1,38.7" />
              <path class="letter__layer" d="M335.6,204.7c51.4,1.2,40.3-43.1,10.9-22.9c-28,19.3,0.9,66.8,33.1,38.7" />
              <path class="letter__layer" d="M335.6,204.7c51.4,1.2,40.3-43.1,10.9-22.9c-28,19.3,0.9,66.8,33.1,38.7" />
            </g>
          </g>
        </svg>
        <div class="content__meta">
          <button class="btn btn--start" aria-label="Start animation">Start</button>
        </div>
      </div>
      <div class="content content--4">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 320 180" class="letters letters--effect-4">
          <g class="letter letter--1">
            <g class="letter__part">
              <path class="letter__layer" d="M41.5,88.4c0,0,26.8,0.9,32.9-9.9c8.4-15-10.8-31.6-46.7-25.2" />
              <path class="letter__layer" d="M41.5,88.4c0,0,26.8,0.9,32.9-9.9c8.4-15-10.8-31.6-46.7-25.2" />
              <path class="letter__layer" d="M41.5,88.4c0,0,26.8,0.9,32.9-9.9c8.4-15-10.8-31.6-46.7-25.2" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M39.2,89.6c45.8-10.3,59.4,49.7-13,36.4" />
              <path class="letter__layer" d="M39.2,89.6c45.8-10.3,59.4,49.7-13,36.4" />
              <path class="letter__layer" d="M39.2,89.6c45.8-10.3,59.4,49.7-13,36.4" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M40.5,63.4v54.9" />
              <path class="letter__layer" d="M40.5,63.4v54.9" />
              <path class="letter__layer" d="M40.5,63.4v54.9" />
            </g>
          </g>
          <g class="letter letter--2">
            <g class="letter__part">
              <path class="letter__layer" d="M91,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" />
              <path class="letter__layer" d="M91,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" />
              <path class="letter__layer" d="M91,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" />
            </g>
          </g>
          <g class="letter letter--3">
            <g class="letter__part">
              <path class="letter__layer" d="M140.6,63.4v61.7" />
              <path class="letter__layer" d="M140.6,63.4v61.7" />
              <path class="letter__layer" d="M140.6,63.4v61.7" />
            </g>
          </g>
          <g class="letter letter--4">
            <g class="letter__part">
              <path class="letter__layer" d="M161.5,72.1l6.3-10" />
              <path class="letter__layer" d="M161.5,72.1l6.3-10" />
              <path class="letter__layer" d="M161.5,72.1l6.3-10" />
            </g>
            <g class="letter__part">
              <path class="letter__layer" d="M161.5,81.7v43.4" />
              <path class="letter__layer" d="M161.5,81.7v43.4" />
              <path class="letter__layer" d="M161.5,81.7v43.4" />
            </g>
          </g>
          <g class="letter letter--5">
            <g class="letter__part">
              <path class="letter__layer" d="M177.3,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" />
              <path class="letter__layer" d="M177.3,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" />
              <path class="letter__layer" d="M177.3,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" />
            </g>
          </g>
          <g class="letter letter--6">
            <g class="letter__part">
              <path class="letter__layer" d="M222.2,81.7l15.8,42.4l15.5-42.4" />
              <path class="letter__layer" d="M222.2,81.7l15.8,42.4l15.5-42.4" />
              <path class="letter__layer" d="M222.2,81.7l15.8,42.4l15.5-42.4" />
            </g>
          </g>
          <g class="letter letter--7">
            <g class="letter__part">
              <path class="letter__layer" d="M293.7,110.5c-51.4,49.2-12.9-78.5,0-13.1h-31.3" />
              <path class="letter__layer" d="M293.7,110.5c-51.4,49.2-12.9-78.5,0-13.1h-31.3" />
              <path class="letter__layer" d="M293.7,110.5c-51.4,49.2-12.9-78.5,0-13.1h-31.3" />
            </g>
          </g>
        </svg>
        <div class="content__meta">
          <button class="btn btn--start" aria-label="Start animation">Start</button>
        </div>
      </div>
      <!-- Related demos -->
      <section class="content content--related">
        <p>If you enjoyed this demo you might also like:</p>
        <a class="media-item" href="http://tympanus.net/Development/SVGDrawingAnimation/">
          <img class="media-item__img" src="../assets/img/related/SVGDrawingAnimation.png">
          <h3 class="media-item__title">SVG Drawing Animation</h3>
        </a>
        <a class="media-item" href="http://tympanus.net/Development/AnimatedLetters/">
          <img class="media-item__img" src="../assets/img/related/AnimatedLetters.png">
          <h3 class="media-item__title">Animated Letters</h3>
        </a>
      </section>
      <a class="pater" href="http://goo.gl/eIBPXd" rel="nofollow">
        <img class="pater__img" src="../assets/img/sponsor/MightyDeals_FontDeals.png" alt="Font Deals by Mighty Deals" />
        <h3 class="pater__title">Amazing Font Deals!
          <br />
          <span>Up to 95% off!</span> &rarr;</h3>
      </a>
    </main>
  </div>
</template>

<script>
  require('../assets/js/main.js');

  let effectsScript = function() {
    var svgFx1 = document.querySelector('.letters--effect-1'),
      svgFx2 = document.querySelector('.letters--effect-2'),
      svgFx3 = document.querySelector('.letters--effect-3'),
      svgFx4 = document.querySelector('.letters--effect-4');

      var phrase1 = new Phrase(svgFx1, {
        pathOpacityAnim : true
      }),
      phrase2 = new Phrase(svgFx2, {
        pathOpacityAnim: true,
        outAnimation: {
          scale: 0,
          opacity: [1, 0],
          duration: 250,
          easing: 'easeInOutQuad'
        },
        inAnimation: {
          delay: 150,
          properties: {
            scale: {
              value: function() {
                return [0, 1];
              },
              duration: 900,
              elasticity: 600,
              easing: 'easeOutElastic'
            },
            opacity: {
              value: [0, 1],
              duration: 50,
              easing: 'linear'
            },
          }
        },
        pathAnimation: {
          duration: 700,
          easing: 'easeOutSine',
          delay: 200
        }
      }),
      phrase3 = new Phrase(svgFx3, {
        outAnimation: {
          translateX: -25,
          rotateZ: 20,
          opacity: [1, 0],
          duration: 250,
          easing: 'easeInBack'
        },
        inAnimation: {
          delay: 100,
          properties: {
            translateY: {
              value: function() {
                return [-80, 0];
              },
              duration: 1200,
              elasticity: 500,
              easing: 'easeOutElastic'
            },
            translateX: {
              value: function() {
                return [50, 0];
              },
              duration: 1200,
              elasticity: 500,
              easing: 'easeOutElastic'
            },
            rotateZ: {
              value: [-70, 0],
              duration: 1200,
              elasticity: 500,
              easing: 'easeOutElastic'
            },
            opacity: {
              value: [0, 1],
              duration: 750,
              easing: 'linear'
            },
          }
        },
        pathAnimation: {
          duration: 1400,
          easing: 'easeOutQuint',
          delay: 300
        }
      }),
      phrase4 = new Phrase(svgFx4, {
        outAnimation: {
          translateY: [0, 15],
          opacity: [1, 0],
          duration: 350,
          easing: 'easeInBack'
        },
        inAnimation: {
          delay: 130,
          properties: {
            rotateZ: {
              value: function() {
                return [70, 0];
              },
              duration: 1200,
              //elasticity: 500,
              easing: 'easeOutElastic'
            },
            opacity: {
              value: [0, 1],
              duration: 400,
              easing: 'linear'
            },
          }
        },
        pathAnimation: {
          duration: 1000,
          easing: 'easeOutCubic',
          delay: 400
        }
      });
    
    // Trigger the animations.
    svgFx1.nextElementSibling.querySelector('button').addEventListener('click', function() { phrase1.animate(); });
    svgFx2.nextElementSibling.querySelector('button').addEventListener('click', function() { phrase2.animate(); });
    svgFx3.nextElementSibling.querySelector('button').addEventListener('click', function() { phrase3.animate(); });
    svgFx4.nextElementSibling.querySelector('button').addEventListener('click', function() { phrase4.animate(); });
  };

  export default {
    name: 'test',
    data() {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    mounted() {
      effectsScript();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/normalize.css';
@import '../assets/css/sponsor.css';
@import '../assets/css/component.css';
@import '../assets/css/demo.css';
</style>

